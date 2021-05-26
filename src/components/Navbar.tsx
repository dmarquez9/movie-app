import React from 'react';
import NextLink from 'next/link';
import { Flex, Link, Image, Divider } from '@chakra-ui/react';
import { createIcon } from '@chakra-ui/icons';

import NavbarLink from 'components/NavbarLink';

const MovieIcon = createIcon({
  displayName: 'MovieIcon',
  viewBox: '0 0 576 512',
  d: 'M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm280 208c0 6.6-5.4 12-12 12H148c-6.6 0-12-5.4-12-12V124c0-6.6 5.4-12 12-12h216c6.6 0 12 5.4 12 12v264zm104-16c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z',
});

const SeriesIcon = createIcon({
  displayName: 'SeriesIcon',
  viewBox: '0 0 576 512',
  d: 'M400 244v-8c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12zm12 76h8c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12zm-36-136.5s-1.5-7.5-144-7.5-144.5 7.5-144.5 7.5S80 184 80 288s7.5 104.5 7.5 104.5S88 400 232 400s144-7.5 144-7.5 7.5-.5 7.5-104.5-7.5-104.5-7.5-104.5zM512 144v288c0 26.5-21.5 48-48 48h-16v32h-48l-10.7-32H122.7L112 512H64v-32H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h140.9l-54-55.2c-9.3-9.5-9.1-24.7.3-33.9 9.5-9.3 24.7-9.1 33.9.3L256 96l86.9-88.8c9.3-9.5 24.5-9.6 33.9-.3 9.5 9.3 9.6 24.5.3 33.9l-54 55.2H464c26.5 0 48 21.5 48 48zm-48 0H48v288h416V144z',
});

const Navbar = () => {
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
    </Flex>
  );
};

export default Navbar;
