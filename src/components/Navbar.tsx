import Image from "next/image";
import Link from "next/link";

import Container from "./Container";
import NavItem from "./NavItem";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 left-0 bg-white shadow-md z-50">
      <Container className="flex items-center gap-8 min-h-[60px]">
        <Link href="/">
          <Image src="/logo.svg" alt="Movie app logo" width={80} height={40} />
        </Link>
        <div className="flex items-center gap-4">
          <NavItem href="/movies">Movies</NavItem>
          <NavItem href="/tv-series">TV Series</NavItem>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
