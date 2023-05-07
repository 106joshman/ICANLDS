import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

// import { Logo } from "../Logo";

const MobileNav = ({ navLinks, isOpen, setOpen }) => {
  return (
    <div className="w-screen h-screen z-10 absolute top-0 left-0 bg-green-500 p-5">
      <div className="closeBttn flex justify-end">
        <button
          className={` hover:animatepulse`}
          onClick={() => setOpen(!isOpen)}
        >
          <AiOutlineClose size={34} color="#5ce1e6" />
        </button>
      </div>

      <div className="navLinks">
        <ul>
          {navLinks.map((navItems, index) => {
            return (
              <li key={index} className="text-white font-semibold">
                <Link
                  activeclassname="active"
                  className="block text-lg cursor-pointer hover:bg-gray-700 py-4 px-4"
                  to={navItems.path}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setOpen(!isOpen)}
                >
                  {navItems.name}
                </Link>
              </li>
            );
          })}
          {/* <>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={() => setOpen(!isOpen)}
            >
              Member
            </button>
          </> */}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
