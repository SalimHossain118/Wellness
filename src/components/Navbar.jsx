/** @format */

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { logo } from "../assets/index.js";

const Navbar = () => {
  const [mHover, setHover] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className=" bg-[#696b7e] w-full flex  items-center justify-between text-white px-5">
        <Link to={"/"}>
          <div className="w-[40px] h-[40px] rounded-full">
            <img src={logo} alt="" />
          </div>
        </Link>

        <div className=" hidden sm:block">
          <ul className=" flex relative justify-between items-center">
            <li className=" p-2 cursor-pointer">
              <NavLink to={"/"}>Home BIG</NavLink>
            </li>

            <li className=" p-2 cursor-pointer hover:bg-[#05b59c]">
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li className=" p-2 cursor-pointer group">
              Products
              <ul className=" bg-[#696b7e] w-28 absolute mt-2 hidden group-hover:block">
                <li
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  className=" p-2 cursor-pointer hover:bg-[#a5a7b9]">
                  Product1
                  {mHover && (
                    <ul className=" bg-[#696b7e] w-28 absolute right-full top-0">
                      <li className=" p-2 cursor-pointer hover:bg-[#a5a7b9] ">
                        Product1.1
                      </li>
                      <li className=" p-2 cursor-pointer hover:bg-[#a5a7b9] ">
                        Product1.2
                      </li>
                    </ul>
                  )}
                </li>
                <li className=" p-2 cursor-pointer hover:bg-[#a5a7b9] ">
                  Product2
                </li>
                <li className=" p-2 cursor-pointer hover:bg-[#a5a7b9] ">
                  Product3
                </li>
              </ul>
            </li>
            <li className=" p-2 cursor-pointer hover:bg-[#05b59c]">
              <NavLink to={"/about"}>Gallery</NavLink>
            </li>
            <li className=" p-2 cursor-pointer hover:bg-[#05b59c]">
              <NavLink to={"/about"}>Career</NavLink>
            </li>

            <li className=" p-2 cursor-pointer group">
              Products
              <ul className=" bg-[#696b7e] w-28 absolute mt-2 hidden group-hover:block">
                <li
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  className=" p-2 cursor-pointer hover:bg-[#a5a7b9]">
                  Product1
                  {mHover && (
                    <ul className=" bg-[#696b7e] w-28 absolute right-full top-0">
                      <li className=" p-2 cursor-pointer hover:bg-[#a5a7b9] ">
                        Product1.1
                      </li>
                      <li className=" p-2 cursor-pointer hover:bg-[#a5a7b9] ">
                        Product1.2
                      </li>
                    </ul>
                  )}
                </li>
                <li className=" p-2 cursor-pointer hover:bg-[#a5a7b9] ">
                  Product2
                </li>
                <li className=" p-2 cursor-pointer hover:bg-[#a5a7b9] ">
                  Product3
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* end=> of large screen */}
        <div className=" sm:hidden z-10">
          {show ? (
            <span onClick={() => setShow(!show)}>
              <RxCross2 />
            </span>
          ) : (
            <span onClick={() => setShow(!show)}>
              <IoMenuSharp />
            </span>
          )}
        </div>
      </div>
      {/*  */}
      {show && (
        <div className=" sm:hidden">
          <div className=" bg-[#696b7e] w-40 h-full top-0 absolute flex flex-col  text-white px-5">
            <div className=" p-2">Logo</div>
            <ul className=" flex flex-col relative justify-between items-center">
              <li className=" p-2 cursor-pointer">Home</li>
              <li className=" p-2 cursor-pointer">Home</li>
              <li className=" p-2 cursor-pointer">Home</li>
              <li className=" p-2 cursor-pointer group">
                Product
                <ul className=" bg-[#696b7e] w-28 absolute mt-2 hidden group-hover:block">
                  <li
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    className=" p-2 cursor-pointer hover:bg-[#a5a7b9]">
                    Product1
                    {mHover && (
                      <ul className=" bg-[#696b7e] w-28 absolute left-full top-0">
                        <li className=" p-2 cursor-pointer hover:bg-[#a5a7b9] ">
                          Product1.1
                        </li>
                        <li className=" p-2 cursor-pointer hover:bg-[#a5a7b9] ">
                          Product1.2
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className=" p-2 cursor-pointer hover:bg-[#a5a7b9] ">
                    Product2
                  </li>
                  <li className=" p-2 cursor-pointer hover:bg-[#a5a7b9] ">
                    Product3
                  </li>
                </ul>
              </li>
              <li className=" p-2 cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
