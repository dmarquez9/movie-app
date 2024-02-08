import cx from "classnames";
import { Inter, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["700"],
  variable: "--font-roboto-mono",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cx(inter.variable, poppins.variable)}>
      <head />
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
