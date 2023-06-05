import Link from "next/link";
import React from "react";
import { AppPaths, AppRoutes } from "./Nav.consts";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const Nav = () => {
  const { status } = useSession();
  const { push } = useRouter();

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
        <div className="flex gap-4">
          {status === "authenticated" && (
            <button
              className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => signOut()}
            >
              Wyloguj
            </button>
          )}
          {status !== "authenticated" && (
            <>
              <button
                className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => push("api/auth/signin")}
              >
                Logowanie
              </button>
              <button
                className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => push("/register")}
              >
                Rejestracja
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
