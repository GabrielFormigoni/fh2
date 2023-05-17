import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navLinks } from "../constants";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className='sm:px-16 px-4 sm:py-6 py-2 w-full flex items-center fixed top-0 z-[9999] bg-white'
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a href="#"><img src={logo} alt="logo" className="object-contain w-fit sm:h-20 h-12 cursor-pointer" /></a>
        <ul className="list-none hidden sm:flex flex-row md:gap-10 gap-6">
          {navLinks.map((item) => (
            <li
              key={item.id}
              className={`${
                active === item.title ? "text-black font-bold" : "text-neutral-600 font-medium"
              } hover:text-black md:text-[20px] text-[16px] cursor-pointer`}
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
                      ? "text-black"
                      : "text-neutral-900"
                  } text-[12px] font-medium cursor-pointer`}
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
