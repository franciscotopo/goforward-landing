"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constant/constant";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`
        ${
          navBg ? "bg-black shadow-md" : "fixed"
        } transition-all duration-200 h-[16vh] z-[1000] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <div className="flex items-center h-full">
          <Image
            src={navBg ? "/images/GoForwardLogoLight.svg" : "/images/GoForwardLogoDark.svg"}
            alt="Logo de GoForward"
            width={70}
            height={0}
            className="h-[70px] w-auto"
          />
        </div>

        {/* NavLinks */}

        <div className="hidden lg:flex items-center space-x-10 text-white">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p
                  className={`relative ${navBg ? "text-white" : "text-black"} text-2xl font-medium w-fit block
    after:block after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:h-[3px] after:bg-orange-400 after:w-full after:scale-x-0
    hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-right`}
                >
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Burger Menu */}
        <div className="flex items-center space-x-4">
          <HiBars3BottomRight
            onClick={openNav}
            className={`w-8 h-8 cursor-pointer ${navBg ? "text-white" : "text-black"} lg:hidden`}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
