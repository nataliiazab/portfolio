import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "../assets/profile-pic.webp";

const Header = () => {
  const Links = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="w-full relative z-[100]">
      <div className="md:flex items-center justify-between bg-white py-4 md:py-0 md:px-14 px-7 fixed top-0 left-0 right-0 shadow-sm">
        <a href="#home">
          <div className="font-bold text-2xl tracking-wide cursor-pointer flex items-center gap-1">
            <img
              src={logo}
              alt="Profile Pic"
              className="md:w-12 md:h-12 w-10 h-10"
            />
            <span className="text-primary hover:text-secondary md:ml-3 ml-2">
              NATALIIA ZABLOTSKA
            </span>
          </div>
        </a>
        <div
          onClick={() => setOpen(!open)}
          className="w-7 h-7 text-primary cursor-pointer absolute right-8 top-6 md:hidden"
        >
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </div>
        <ul
          className={`md:flex md:items-center items-center md:pb-0 absolute md:static md:z-auto z-50 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 bg-white sm:bg-transparent ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 md:my-8 mt-5 font-semibold text-xl border-b-2 md:border-b-0 text-right px-7 md:px-4 pb-4 md:pb-0 cursor-pointer"
            >
              <a
                href={link.link}
                className="text-light hover:text-secondary duration-500 uppercase"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
