import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navLinks } from "../constants";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`lg:px-14 px-3 lg:py-6 py-2 w-full flex items-center fixed top-0 z-20`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <img src={logo} alt="logo" className="object-contain w-fit h-16" />
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((item) => (
            <li
              key={item.id}
              className={`${
                active === item.title ? "text-neutral-500" : "text-secondary"
              } hover:text-neutral-500 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(item.title)}
            >
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex justify-end items-center">
          {toggle ? (
            <AiOutlineCloseCircle
              className="w-[28px] h-[28px] object-contain cursor-pointer text-black"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <BiMenuAltRight
              className="w-[28px] h-[28px] object-contain cursor-pointer text-black"
              onClick={() => setToggle(!toggle)}
            />
          )}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-10 -right-5 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4 justify-end items-start">
              {navLinks.map((item) => (
                <li
                  key={item.id}
                  className={`${
                    active === item.title
                      ? "text-neutral-500"
                      : "text-secondary"
                  } text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(item.title);
                  }}
                >
                  <a href={`#${item.id}`}>{item.title}</a>
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
