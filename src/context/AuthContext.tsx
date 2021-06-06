import React, { useState, useEffect, useContext, createContext } from 'react';
import Router from 'next/router';

import firebase from 'lib/firebase';
import { createUser } from 'lib/firestore';

import type { TAuthContext, TSigninWithEmailProps, TSignout, UserProps, RawUserProps } from 'types/auth';

const AuthContext = createContext<TAuthContext | null>(null);

export function AuthProvider({ children }) {
  const auth: TAuthContext = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const handleUser = async (rawUser: RawUserProps | false) => {
    if (rawUser) {
      const user: UserProps = await formatUser(rawUser);
      const { token, ...userWithoutToken } = user;

      createUser(user.uid, userWithoutToken);
      setUser(user);

      setLoading(false);
      return user;
    } else {
      setUser(false);

      setLoading(false);
      return false;
    }
  };

  const signinWithEmail: TSigninWithEmailProps = async (email, password) => {
    setLoading(true);
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        handleUser(response.user);
        Router.push('/sites');
      });
  };

  const signout: TSignout = async () => {
    Router.push('/');

    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false));
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);

    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    signinWithEmail,
    signout
  };
}

const formatUser = async (user: RawUserProps) => {
  const token: string = await user.getIdToken();
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    token
  };
};
