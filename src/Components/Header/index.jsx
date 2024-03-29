import Hamburger from "hamburger-react";
import React, { useState, useEffect } from "react";
// import { Link, animateScroll as scroll } from "react-scroll";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../Logo";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [navColor, setnavColor] = useState("transparent");
  const [textColor, setTextColor] = useState("black");

  const listenScrollEvent = () => {
    window.scrollY > 100 ? setnavColor("white") : setnavColor("transparent");
    window.scrollY > 250 ? setTextColor("green") : setTextColor("black");
    // window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const navLinks = [
    { id: 0, name: "Home", path: "home" },
    { id: 0, name: "About", path: "about" },
    { id: 0, name: "Exco", path: "district/excos" },
    { id: 0, name: "Chairman", path: "district/chairman" },
    { id: 0, name: "Library", path: "district/resources" },
    { id: 0, name: "Gallery", path: "gallery" },
    { id: 0, name: "Contact", path: "contact" },
  ];

  return (
    <header
      className="flex items-center fixed w-full shadow-md px-6 lg:px-10 py-4 z-[999]"
      style={{
        backgroundColor: navColor,
        color: textColor,
        // height: navSize,
        transition: "all 1s",
      }}
    >
      <nav className="container mx-auto flex items-center justify-between">
        <div className="">
          <Link to="home">
            <Logo />
          </Link>
        </div>

        <div className="flex order-2">
          {/* <button
            type="button"
            className="text-white hidden lg:flex bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-2 py-2 text-center mr-3 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Membership
          </button> */}

          <div className="lg:hidden">
            <Hamburger
              // color="#5ce1e6"
              color="blue"
              label="Show menu"
              backgroundColor="blue"
              distance="md"
              rounded
              hideOutline={false}
              size={30}
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
        </div>

        <div className="navLinks md:order-1 w-full md:block md:w-auto">
          <ul className="hidden lg:flex flex-col p-4 mt-4 justify-between md:flex-row md:space-x-8 rounded-md md:mt-0 md:font-medium">
            {navLinks.map((navItems, index) => {
              return (
                <li key={index} className="block text-xl">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-[blue] border-b-2 border-[blue] hover:bg-blue-100 font-medium py-2 px-4"
                        : "text-black hover:bg-blue-100 font-medium rounded-lg py-2 px-4"
                    }
                    // className="hover:bg-blue-100 font-medium rounded-lg py-2 px-4 "
                    to={navItems.path}
                  >
                    {navItems.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* <div
        className="modal fade fixed top-0 left-0 z-[1055] hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalScrollableLabel"
              >
                New Members Guide
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative p-4 text-black text-lg">
              <p className="text-justify mb-2.5">
                Dear Professional Colleague,
              </p>
              <p className="text-justify mb-2">
                We are very pleased that you would like to join the Lagos &
                District Society of The Institute of Chartered Accountants of
                Nigeria. The Lagos & District Society of ICAN is one of the
                grassroot arms of the Institute and acts as an interface between
                the members working or living on Lagos Island, Ikoyi, Victoria
                Island, Lekki and Ajah.
              </p>
              <p className="text-justify mb-4">
                Our members’ meeting comes up on
                <strong> second Thursday of every month</strong> at the Study
                Center of the National Open University of Nigeria, 114/116,
                Ahmadu Bello Way, Victoria Island, Lagos.
              </p>
              <p className="text-justify mb-2">
                {" "}
                Kindly fill and submit the membership form via this link{" "}
                <a
                  className="text-blue-500"
                  href="https://forms.gle/RDbhPHPRMHu7eLKe9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  New Members form
                </a>{" "}
                and pay the total sum of N10,000 into our Bank account the
                details of which is as also stated below. (N5,000 for
                Registration & N5,000 for Annual Subscription), in favour of
                ICAN Lagos & District Society. Payment can be made at the bank
                or via transfer into any of the District Accounts.
              </p>
              <p className="text-justify mb-2">
                Please find the account details below: <br />{" "}
                <strong> First Bank Account No: 2017594673</strong> <br />{" "}
                <strong> Zenith Bank Account No: 1017471043</strong>. <br />{" "}
                Also, all members of the District are required to pay
                <strong> N20,000 as development levy</strong> (one-time payment)
                in the dedicated building account detailed below. This payment
                is a requirement to process any application that requires our
                confirmation. <br />{" "}
                <strong> ICANLDS Building Project Account</strong> <br />{" "}
                <strong> Zenith Bank 1017746132 </strong> <br />
                Should you require help in anyway, please call any of the
                numbers below on the website. <br />
                Thank you.
              </p>
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {isOpen && (
        <MobileNav navLinks={navLinks} isOpen={isOpen} setOpen={setOpen} />
      )}
    </header>
  );
};

export default Navbar;
