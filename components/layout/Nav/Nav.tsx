import Link from "next/link";
import React from "react";
import { AppPaths, AppRoutes } from "./Nav.consts";
import Image from "next/image";

export const Nav = () => {
  return (
    <header className="h-20 fixed w-full z-50">
      <div className="flex justify-between items-center h-full px-[10vw] bg-layout text-fontLight">
        <Link href={AppPaths.HOME}>
          <div className="border border-layout h-20 w-20">
            <Image
              className="bg-white border-layout"
              src="/assets/logo.png"
              alt="Dev Plan - logo"
              width={100}
              height={100}
              style={{ objectFit: "none" }}
            />
          </div>
        </Link>
        <nav className="flex">
          <ul className="flex items-center list-none">
            {AppRoutes.map(({ name, path }, index) => (
              <Link key={index} href={path}>
                <li className="inline-block ml-6 hover:text-primary">{name}</li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
