import React, { useState } from "react";
import "./navbar.css"
import {
  FaBars,
  FaTimes
} from "react-icons/fa";

import GreenBtn from "./GreenBtn";

import { Link } from "react-scroll";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "servicios",
    },

    {
      id: 3,
      link: "soporte",
    },
    {
      id: 4,
      link: "planes",
    },
  ];

  return (
    <nav className="navbar-container">

      <div className="container-links">
        <div className="flex items-center">
          <h1 className="text-4xl font-bold">A.</h1>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="capitalize p-4 cursor-pointer hover:text-lightColor duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex mr-4">
          <GreenBtn title="Home" className="px-9 py-3" />
        </div>

        {/* burger icon  */}
        <div className="md:hidden">
          <div onClick={() => setNavigation(true)} className="cursor-pointer">
            <FaBars size={30} />
          </div>
        </div>
      </div>

      {/* mobile menu  */}
      <div
        className={
          navigation
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-gray-900/70 backdrop-blur"
            : ""
        }
      >
        <div
          className={
            navigation
              ? "fixed left-0 top-0 w-4/5 h-full bg-gray-900 text-white p-10 ease-in duration-500"
              : "fixed top-0 left-[-100%] h-full p-10 duration-500 ease-in"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <h2
                onClick={() => setNavigation(false)}
                className="text-3xl font-bold capitalize cursor-pointer"
              >
                onnn
              </h2>
              <div
                onClick={() => setNavigation(false)}
                className="p-3 cursor-pointer"
              >
                <FaTimes size={30} />
              </div>
            </div>
          </div>

          <div className="mt-24 flex flex-col h-fit gap-12">
         

            <ul className="capitalize">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className=" py-4 text-2xl tracking-wider cursor-pointer"
                >
                  <Link
                    onClick={() => setNavigation(false)}
                    to={link}
                    smooth
                    duration={500}
                    offset={-75}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>


          </div>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
