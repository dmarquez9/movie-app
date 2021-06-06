export type UserProps = {
  uid: string;
  email: string;
  name: string;
  provider: string;
  photoUrl: string;
  token: string;
} | boolean;

export type RawUserProps = {
  [x: string]: any;
};

export type TSigninWithEmailProps = (email: string, password: string) => Promise<void>;
export type TSignout = () => Promise<false | UserProps>;

export type TAuthContext = {
  user: UserProps;
  loading: boolean;
  signinWithEmail: TSigninWithEmailProps;
  signout: TSignout;
};
