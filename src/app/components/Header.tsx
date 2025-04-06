"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="relative flex justify-between items-center py-16 overflow-x-hidden">
      <div className="ml-20">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={60}
            height={60}
            className="min-w-[60px] min-h-[60px]"
          />
        </Link>
      </div>

      <span className="left-[160px] absolute border-neutral-600 border-1 w-full max-w-[45%] min-h-auto z-50"></span>

      <nav className="font-barlow text-[28px] text-white uppercase tracking-[2.7px] backdrop-blur-xl px-[150px] h-32">
        <ul className="flex space-x-4 min-h-full">
          <li
            className={`min-h-full ${
              pathname === "/" || pathname === "/home"
                ? "border-b-4 border-b-white"
                : ""
            } border-solid flex items-center hover:border-b-4 border-b-neutral-400`}
          >
            <Link href="/">
              <span className="mr-2">
                <strong>00</strong>
              </span>
              <span>HOME</span>
            </Link>
          </li>
          <li
            className={`min-h-full ${
              pathname === "/crew" ? "border-b-4 border-b-white" : ""
            } border-solid flex items-center hover:border-b-4 border-b-neutral-400`}
          >
            <Link href="/crew">
              <span className="mr-2">
                <strong>01</strong>
              </span>
              <span>CREW</span>
            </Link>
          </li>
          <li
            className={`min-h-full ${
              pathname === "/destination" ? "border-b-4 border-b-white" : ""
            } border-solid flex items-center hover:border-b-4 border-b-neutral-400`}
          >
            <Link href="/destination">
              <span className="mr-2">
                <strong>01</strong>
              </span>
              <span>DESTINATION</span>
            </Link>
          </li>
          <li
            className={`min-h-full ${
              pathname === "/technology" ? "border-b-4 border-b-white" : ""
            } border-solid flex items-center hover:border-b-4 border-b-neutral-400`}
          >
            <Link href="/technology">
              <span className="mr-2">
                <strong>02</strong>
              </span>
              <span>TECHNOLOGY</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
