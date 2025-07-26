import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/*Foggy overlay*/}
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}
      ></div>

      {/*Navlinks*/}
      <div
        className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-orange-400 space-y-6 z-[1050]`}
      >
        {navLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url} onClick={closeNav}>
              <p
                className={`relative text-white w-fit text-[20px] sm:text-[30px] ml-12
    after:block after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:bg-white after:w-full
    after:scale-x-0 after:transition-transform after:duration-500
    ${
      showNav
        ? "after:scale-x-100 after:origin-left after:delay-500"
        : "after:scale-x-0 after:origin-left"
    }
  `}
              >
                {link.label}
              </p>
            </Link>
          );
        })}

        {/*Close button*/}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

export default MobileNav;
