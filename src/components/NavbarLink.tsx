import React from 'react';
import NextLink from 'next/link';
import { Link, Text } from '@chakra-ui/react';

type NavbarLinkProps = {
  href: string;
  Icon?: any;
  text: string;
};

const NavbarLink = ({ href, text, Icon }: NavbarLinkProps) => (
  <NextLink href={href} passHref>
    <Link
      px={4} display="flex" alignItems="center" _hover={{
        textDecoration: 'none',
      }}
    >
      <Icon w={6} h={6} mr={2} color="inactive" />
      <Text fontSize="md" fontWeight={600} color="inactive">{text}</Text>
    </Link>
  </NextLink>
);

export default NavbarLink;
