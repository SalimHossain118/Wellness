/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { TbBrandTwitter } from "react-icons/tb";

const Footer = () => {
  return (
    <div className=" w-full flex flex-col relative">
      <div className="w-full bg-[#F4F4F4] justify-around grid grid-cols-5 md-lg:grid-cols-2 2xs:grid-cols-1 items-end relative">
        <div className="flex flex-col h-[250px] w-[250px] mx-auto">
          <div className="flex flex-col justify-center items-start h-[250px] w-[250px] mx-auto p-2">
            <h2 className="text-md from-neutral-400 mb-2 text-slate-400">
              PRODUCTS
            </h2>

            <Link>
              <div className="flex justify-center gap-2 mb-2">
                <FaChevronRight className="text-slate-400 mt-1" />
                <div className="flex flex-col">
                  <p className="text-md text-slate-400 hover:text- ">
                    Products1
                  </p>
                </div>
              </div>
            </Link>

            <Link>
              <div className="flex justify-center gap-2 mb-2">
                <FaChevronRight className="text-slate-400 mt-1" />
                <div className="flex flex-col">
                  <p className="text-md text-slate-400 hover:text- ">
                    Products2
                  </p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="flex justify-center gap-2 mb-2">
                <FaChevronRight className="text-slate-400 mt-1" />
                <div className="flex flex-col">
                  <p className="text-md text-slate-400 hover:text- ">
                    Products4
                  </p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="flex justify-center gap-2 mb-2">
                <FaChevronRight className="text-slate-400 mt-1" />
                <div className="flex flex-col">
                  <p className="text-md text-slate-400 hover:text- ">
                    Products5
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col h-[250px] w-[250px] mx-auto">
          <div className="flex flex-col justify-center items-start h-[250px] w-[250px] mx-auto p-2">
            <h2 className="text-md from-neutral-400 mb-2 text-slate-400">
              QUICK LINKS
            </h2>

            <Link>
              <div className="flex justify-center gap-2 mb-2">
                <FaChevronRight className="text-slate-400 mt-1" />
                <div className="flex flex-col">
                  <p className="text-md text-slate-400 hover:text- ">Home</p>
                </div>
              </div>
            </Link>

            <Link>
              <div className="flex justify-center gap-2 mb-2">
                <FaChevronRight className="text-slate-400 mt-1" />
                <div className="flex flex-col">
                  <p className="text-md text-slate-400 hover:text- ">About</p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="flex justify-center gap-2 mb-2">
                <FaChevronRight className="text-slate-400 mt-1" />
                <div className="flex flex-col">
                  <p className="text-md text-slate-400 hover:text- ">
                    Products
                  </p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="flex justify-center gap-2 mb-2">
                <FaChevronRight className="text-slate-400 mt-1" />
                <div className="flex flex-col">
                  <p className="text-md text-slate-400 hover:text- ">Career</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col h-[250px] w-[250px] mx-auto">
          <div className="flex flex-col justify-center items-start h-[250px] w-[250px] mx-auto p-2">
            <h2 className="text-md from-neutral-400 mb-2 text-slate-400">
              QUICK LINKS
            </h2>

            <Link>
              <div className="flex justify-center gap-2 mb-2">
                <FaChevronRight className="text-slate-400 mt-1" />
                <div className="flex flex-col">
                  <p className="text-md text-slate-400 hover:text- ">Home</p>
                </div>
              </div>
            </Link>

            <Link>
              <div className="flex justify-center gap-2 mb-2">
                <FaChevronRight className="text-slate-400 mt-1" />
                <div className="flex flex-col">
                  <p className="text-md text-slate-400 hover:text- ">About</p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="flex justify-center gap-2 mb-2">
                <FaChevronRight className="text-slate-400 mt-1" />
                <div className="flex flex-col">
                  <p className="text-md text-slate-400 hover:text- ">
                    Products
                  </p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="flex justify-center gap-2 mb-2">
                <FaChevronRight className="text-slate-400 mt-1" />
                <div className="flex flex-col">
                  <p className="text-md text-slate-400 hover:text- ">Career</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* end */}
        <div className="flex flex-col h-[250px] w-[250px] mx-auto">
          <div className="flex flex-col justify-center items-start h-[250px] w-[250px] mx-auto p-2">
            <h2 className="text-md from-neutral-400 mb-2 text-slate-400">
              SOCIAL MEDIA
            </h2>

            <Link className="hover:text-[#0a66c2]">
              <div className="flex justify-center gap-2 mb-2 hover:text-[#0a66c2] ">
                <FaLinkedin className="text-slate-400  mt-1" />
                <div className="flex flex-col ">
                  <p className="text-md text-slate-400 ">Linkedin</p>
                </div>
              </div>
            </Link>

            <Link>
              <div className="flex justify-center gap-2 mb-2">
                <FaFacebook className="text-slate-400 mt-1" />
                <div className="flex flex-col">
                  <p className="text-md text-slate-400 ">Facebook</p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="flex justify-center gap-2 mb-2">
                <TbBrandTwitter className="text-slate-400 mt-1" />
                <div className="flex flex-col">
                  <p className="text-md text-slate-400 ">Twitter</p>
                </div>
              </div>
            </Link>
            <Link>
              <div className="flex justify-center gap-2 mb-2">
                <FaSquareYoutube className="text-slate-400 mt-1" />
                <div className="flex flex-col">
                  <p className="text-md text-slate-400 hover:text- ">Youtube</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* end */}
        <div className="flex flex-col justify-center items-start h-[250px] w-[250px] mx-auto p-2">
          <h2 className="text-md from-neutral-400 mb-2 text-slate-400">
            Contact Us
          </h2>

          <div className="flex justify-center gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-3 h-3 mt-1 text-slate-400 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <div className="flex flex-col">
              <p className="text-sm text-slate-400 ">
                House #511,513, Spring Rojla{" "}
              </p>
              <p className="text-sm text-slate-400 ">Flat #8/B Road #8</p>
              <p className="text-sm text-slate-400 ">
                Mirpur DOSH, Mirpur-1216
              </p>
              <p className="text-sm text-slate-400 ">Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="flex justify-center gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 mt-1 text-slate-400 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>

            <div className="flex flex-col">
              <p className="text-sm text-slate-400 ">
                info@wellnesspharmaceutical.com
              </p>
            </div>
          </div>
          {/* end email*/}
          <div className="flex justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 mt-1 text-slate-400 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>

            <div className="flex flex-col">
              <p className="text-sm text-slate-400 ">
                +8801770568699, +8801945684480
              </p>
            </div>
          </div>
          {/* end call */}
        </div>
        {/* end contact*/}
      </div>
      <div className="w-full flex justify-center bg-[#05b59c] p-2 text-white">
        © Copyright 2023. All Rights Reserved.{" "}
      </div>
    </div>
  );
};

export default Footer;
