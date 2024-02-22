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
      <div className=" bg-[#05b59c] w-full flex h-14 items-center justify-between text-white px-5 fixed z-50">
        <Link to={"/"}>
          <div className="w-[40px] h-[40px]">
            <img src={logo} alt="" className=" scale-150" />
          </div>
        </Link>

        <div className="  sm:hidden">
          <ul className=" flex relative justify-between items-center">
            <li className=" p-2 cursor-pointer hover:bg-[#49a093ae] rounded-lg">
              <NavLink to={"/"}>Home</NavLink>
            </li>

            <li className=" p-2 cursor-pointer hover:bg-[#49a093ae] rounded-lg ">
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li className=" p-2 cursor-pointer group hover:bg-[#49a093ae] rounded-lg ">
              Products
              <ul className=" bg-[#05b59c] w-28 absolute left-28 mt-2 hidden group-hover:block z-50 rounded-md">
                <li className=" p-2 cursor-pointer hover:bg-[#49a093ae] rounded-lg ">
                  <NavLink to={"/allproducts"}>All Product</NavLink>
                </li>
                <li className=" p-2 cursor-pointer hover:bg-[#49a093ae] rounded-lg ">
                  <NavLink to={"/poultryproducts"}>Poultry</NavLink>
                </li>
                <li className=" p-2 cursor-pointer hover:bg-[#49a093ae] rounded-lg ">
                  <NavLink to={"/agroproducts"}>Agro</NavLink>
                </li>
                <li className=" p-2 cursor-pointer hover:bg-[#49a093ae] rounded-lg ">
                  <NavLink to={"/petsproducts"}>Pets</NavLink>
                </li>
                <li className=" p-2 cursor-pointer hover:bg-[#49a093ae] rounded-lg ">
                  <NavLink to={"/fishproducts"}>Fish</NavLink>
                </li>
              </ul>
            </li>
            <li className=" p-2 cursor-pointer hover:bg-[#49a093ae] rounded-lg">
              <NavLink to={"/about"}>Gallery</NavLink>
            </li>
            <li className=" p-2 cursor-pointer hover:bg-[#49a093ae] rounded-lg">
              <NavLink to={"/career"}>Career</NavLink>
            </li>

            <li className=" p-2 cursor-pointer group hover:bg-[#49a093ae] rounded-lg">
              Contact
              <ul className=" bg-[#05b59c]  w-28 absolute -right-6 mt-2 hidden group-hover:block z-50 rounded-md">
                <li className=" p-2 cursor-pointer hover:bg-[#49a093ae] rounded-lg">
                  Head Office
                </li>
                <li className=" p-2 cursor-pointer hover:bg-[#49a093ae] rounded-lg ">
                  Factory
                </li>
                <li className=" p-2 cursor-pointer hover:bg-[#49a093ae] rounded-lg ">
                  Zone
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* end=> of large screen */}
        <div className=" sm:block hidden z-10">
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
        <div className=" sm:block hidden">
          <div className=" bg-[#05b59c] w-40 h-auto fixed flex flex-col text-white px-5 z-50">
            <Link to={"/"}>
              <div className="w-[40px] h-[40px]">
                <img src={logo} alt="" className=" scale-150" />
              </div>
            </Link>

            <div className=" block mt-2">
              <ul className=" flex flex-col relative justify-between items-center">
                <li className=" p-2 cursor-pointer">
                  <NavLink to={"/"}>Home</NavLink>
                </li>

                <li className=" p-2 cursor-pointer hover:bg-[#49a093ae] rounded-lg">
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li
                  onClick={() => setHover(!mHover)}
                  className=" p-2 cursor-pointer group relative"
                >
                  Products
                  {mHover && (
                    <ul className=" bg-[#34786e] hover:bg-[#49a093ae] rounded-lg  w-28 absolute top-2 -right-28 mt-2 hidden group-hover:block z-50">
                      <li className=" p-2 cursor-pointer hover:bg-[#49a093ae] rounded-lg">
                        All Product
                      </li>
                      <li className=" p-2 cursor-pointer hover:bg-[#49a093ae] rounded-lg ">
                        Poultry
                      </li>
                      <li className=" p-2 cursor-pointer hover:bg-[#49a093ae] rounded-lg ">
                        Agro
                      </li>
                      <li className=" p-2 cursor-pointer hover:bg-[#49a093ae] rounded-lg ">
                        Pets
                      </li>
                      <li className=" p-2 cursor-pointer hover:bg-[#49a093ae] rounded-lg ">
                        Fish
                      </li>
                    </ul>
                  )}
                </li>
                <li className=" p-2 cursor-pointer hover:bg-[#49a093ae] rounded-lg">
                  <NavLink to={"/about"}>Gallery</NavLink>
                </li>
                <li className=" p-2 cursor-pointer hover:bg-[#49a093ae] rounded-lg">
                  <NavLink to={"/about"}>Career</NavLink>
                </li>

                <li
                  onClick={() => setHover(!mHover)}
                  className=" p-2 cursor-pointer group relative hover:bg-[#49a093ae] rounded-lg"
                >
                  Contact
                  {mHover && (
                    <ul className=" bg-[#34786e] w-28 absolute rounded-md -top-8 -right-28 mt-2 hidden group-hover:block z-50">
                      <li className=" p-2 cursor-pointer hover:bg-[#49a093ae] rounded-lg">
                        Head Office
                      </li>
                      <li className=" p-2 cursor-pointer hover:bg-[#49a093ae] rounded-lg ">
                        Factory
                      </li>
                      <li className=" p-2 cursor-pointer hover:bg-[#49a093ae] rounded-lg ">
                        Zone
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
