"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="hidden absolute w-full lg:flex justify-between items-center py-[90px] overflow-x-hidden">
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

        <span className="left-[9%] absolute border-neutral-600 border-1 w-full max-w-[33%] min-h-auto z-50"></span>

        <nav className="font-barlow text-[20px] text-white uppercase tracking-[2.7px] backdrop-blur-xl px-[150px] h-32">
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
                  <strong>02</strong>
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
                  <strong>03</strong>
                </span>
                <span>TECHNOLOGY</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <header className="flex absolute w-full lg:hidden justify-between px-3 py-4 items-center">
        <div className="">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="min-w-[40px] min-h-[40px]"
            />
          </Link>
        </div>
        <div className="">
          <Menu
            size={30}
            color="white"
            className={`cursor-pointer ${isMenuOpen ? "hidden" : "block"}`}
            onClick={toggleMenu}
          />
        </div>
        <nav
          className={`${
            isMenuOpen ? "" : "hidden"
          } absolute top-0 right-0 w-auto font-barlow text-[16px] text-white uppercase tracking-[2.7px] backdrop-blur-xl py-[20px] min-h-screen`}
        >
          <div className="flex justify-end px-4 mb-10">
            <X
              size={30}
              color="white"
              className="cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <ul className="flex flex-col min-h-full pl-8">
            <li
              className={`min-h-full ${
                pathname === "/" || pathname === "/home"
                  ? "border-r-4 border-r-white"
                  : ""
              } border-solid flex items-center hover:border-b-4 border-b-neutral-400 my-4 pr-6`}
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
              } border-solid flex items-center hover:border-b-4 border-b-neutral-400 my-4 pr-6`}
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
              } border-solid flex items-center hover:border-b-4 border-b-neutral-400 my-4 pr-8`}
            >
              <Link href="/destination">
                <span className="mr-2">
                  <strong>02</strong>
                </span>
                <span>DESTINATION</span>
              </Link>
            </li>
            <li
              className={`min-h-full ${
                pathname === "/technology" ? "border-b-4 border-b-white" : ""
              } border-solid flex items-center hover:border-b-4 border-b-neutral-400 my-4 pr-8`}
            >
              <Link href="/technology">
                <span className="mr-2">
                  <strong>03</strong>
                </span>
                <span>TECHNOLOGY</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
