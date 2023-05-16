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
      className='sm:px-16 px-6 sm:py-6 py-2 w-full flex items-center fixed top-0 z-[9999] bg-white'
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <img src={logo} alt="logo" className="object-contain w-fit h-16" />
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((item) => (
            <li
              key={item.id}
              className={`${
                active === item.title ? "text-neutral-500" : "text-black"
              } hover:text-neutral-500 text-[20px] font-medium cursor-pointer`}
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
            } p-6 bg-white absolute top-14 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4 justify-end items-start">
              {navLinks.map((item) => (
                <li
                  key={item.id}
                  className={`${
                    active === item.title
                      ? "text-neutral-500"
                      : "text-black"
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
