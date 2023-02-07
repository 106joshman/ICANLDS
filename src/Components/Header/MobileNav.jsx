import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
// import { Logo } from "../Logo";

const MobileNav = ({ navLinks }) => {
  return (
    <div className="navLinks md:order-1 w-full md:block md:w-auto">
      {/* <div className="">
        <Link to="home">
          <Logo />
        </Link>
      </div> */}
      <ul className="z-[999] top-20 fixed lg:hidden text-green-50 bg-gray-800 rounded-lg flex-col h-[100vh] justify-between md:flex-row md:mt-0 md:text-sm md:font-medium">
        {navLinks.map((navItems, index) => {
          return (
            <li key={index} className="block text-lg cursor-pointer py-6 px-2 ">
              <Link
                activeclassname="active"
                to={navItems.path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {navItems.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileNav;
