import React from "react";
import { Font } from "@/utils/fonts";
import { Nav } from "./Nav/Nav";
import { Footer } from "./Footer/Footer";

type LayoutProps = {
  children: React.ReactNode;
};
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`${Font.robotoMono.className} ${Font.sourceSansPro.variable}`}
    >
      <Nav />
      <main className="py-24 px-[10vw] min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};
