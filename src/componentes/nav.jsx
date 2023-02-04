import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cerrar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="z-10 bg-gray-900 opacity-50 h-20 border border-green-500">
        <div className="pt-2 sm:pt-4 pb-4">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="h-8 mt-4 sm:mt-0 sm:h-12 ml-4 sm:ml-8 float-left ay-auto"
            />
          </Link>

          <button
            className="mr-4 mt-2 sm:mt-0 sm:mr-8 float-right flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="fill-current h-8 w-8"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="z-0 bg-gray-800 opacity-90 absolute right-0 w-screen h-full flex items-center ">
          <div className="mx-auto">
            <Link
              to="/"
              className="block px-6 w-32 font-medium mt-4 text-white text-2xl hover:bg-green-500 hover:text-black"
              onClick={cerrar}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="block px-5 w-32 font-medium mt-4 text-white text-2xl  hover:bg-green-500 hover:text-black"
              onClick={cerrar}
            >
              ABOUT
            </Link>
            <Link
              to="/skill"
              className="block px-6 w-32 font-medium mt-4 text-white text-2xl  hover:bg-green-500 hover:text-black"
              onClick={cerrar}
            >
              SKILLS
            </Link>
            <Link
              to="/contact"
              className="block px-2 w-32 font-medium mt-4 text-white text-2xl  hover:bg-green-500 hover:text-black"
              onClick={cerrar}
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
