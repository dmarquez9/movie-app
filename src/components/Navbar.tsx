import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { Flex, Link, Image, Divider, Button } from '@chakra-ui/react';
import { MovieIcon, SeriesIcon, LoginIcon } from 'lib/icons';
import { useAuth } from 'context/AuthContext';
import NavbarLink from 'components/NavbarLink';

const Navbar = () => {
  const router = useRouter();
  const auth = useAuth();

  const handleLogin = (event) => {
    event.preventDefault()
    router.push('/login')
  }

  return (
    <Flex
      backgroundColor="primary"
      w="full"
      px={[4, 8]}
      alignItems="center"
      justifyContent="space-between"
      h="60px"
    >
      <Flex align="center">
        <NextLink href="/" passHref>
          <Link>
            <Image src="logo.png" alt="Logo" boxSize="60px" />
          </Link>
        </NextLink>
        <Divider orientation="vertical" w={1} h="20px" ml={4} borderColor="gray.300" />
        <NavbarLink href="/movies" text="Movies" Icon={MovieIcon} />
        <NavbarLink href="/series" text="TV & Series" Icon={SeriesIcon} />
      </Flex>
      <Flex align="center">
        {!auth.user
          ? <Button onClick={handleLogin} leftIcon={<LoginIcon />} colorScheme="yellow">Login</Button>
          : null
        }
      </Flex>
    </Flex>
  );
};

export default Navbar;
