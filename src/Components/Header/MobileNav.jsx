import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
// import { Logo } from "../Logo";

const MobileNav = ({ navLinks, isOpen, setOpen }) => {
  return (
    <div className="navLinks transition delay-5s duration-500 ease-in-out">
      {/*  right-5 w-1/2 items-center block md:w-auto */}
      <ul className="z-[999] top-[73px] h-[100dvh]  float-right fixed flex flex-col items-end lg:hidden p-4 borer text-green-50 bg-gray-800 rouned-lg md:mt-0 md:text-sm md:font-medium">
        {navLinks.map((navItems, index) => {
          return (
            <li key={index} className=" ">
              <Link
                activeclassname="active"
                className="block text-lg cursor-pointer hover:bg-gray-700 py-4 px-4"
                to={navItems.path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setOpen(isOpen)}
              >
                {navItems.name}
              </Link>
            </li>
          );
        })}
        <>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Member
          </button>
        </>
      </ul>
    </div>
  );
};

export default MobileNav;
