import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const MobileNav = ({navLinks}) => {
  return (
    <div className="navLinks md:order-1 w-full md:block md:w-auto">
      <ul className="z-[999] top-16 fixed lg:hidden text-green-50 flex-col p-4 mt-4 justify-between md:flex-row md:mt-0 md:text-sm md:font-medium">
        {navLinks.map((navItems, index) => {
          return (
            <li
              key={index}
              className="block text-lg cursor-pointer py-2 px-4 "
            >
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
