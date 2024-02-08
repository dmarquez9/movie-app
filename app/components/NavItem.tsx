// "use client";
import type { Route } from "next";
import Link from "next/link";
// import { usePathname } from "next/navigation";

type NavItemProps = {
  href: Route<string> | URL;
  children: React.ReactNode;
};

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  // const pathname = usePathname();
  // const isActive = pathname === href;
  return <Link href={href}>{children}</Link>;
};

export default NavItem;
