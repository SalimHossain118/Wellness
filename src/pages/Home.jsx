/** @format */

import React from "react";
import Category from "../components/Category";
import Banner from "../components/Banner";
import HomeAbout from "../components/HomeAbout";
import { MdMedicalServices } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { FaIndustry } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import HomeMember from "../components/HomeMember";

const Home = () => {
  return (
    <div className="min-w-screen min-h-screen">
      <Banner />
      <div className=" flex flex-col justify-center items-center">
        <div className=" w-[70%] flex flex-col justify-center items-center">
          <h1 className=" text-4xl font-bold p-10 uppercase">
            We Care For You
          </h1>
          <div>
            <p className=" text-justify font-normal text-xl opacity-70">
              Popular Pharmaceuticals Ltd. (PPL), the pioneer manufacturer of
              Human Insulin in Bangladesh, is a company of Popular Group, the
              leading corporate house in the private sector Health Care
              Management of the country. PPL is manufacturing and marketing its
              high quality and wide variety of product range both in home and
              abroad.
            </p>
          </div>
          <button className=" mt-5 border-spacing-0 border-8 border-green-700 px-10 py-2 hover:bg-blue-700 transition-all hover:border-blue-700 hover:text-white">
            Learn More
          </button>
        </div>
        <div className=" w-full mt-10">
          <HomeAbout />
        </div>

        <div className=" flex md:flex-col justify-around items-center mt-10">
          <div className=" flex flex-col gap-2 justify-center items-center p-10">
            <span className=" text-green-500 text-4xl p-6 rounded-full border border-slate-300">
              <MdMedicalServices />
            </span>
            <h1 className=" text-2xl font-normal ">Health & Wellness</h1>
            <p className=" text-justify opacity-80">
              Life's all about staying healthy and enjoying the good things in
              life! However, illness is inevitable at all stages of life. In
              this area learn about the common health problems.
            </p>
            <button className="hover:underline uppercase px-5 py-2 bg-green-700 rounded-sm text-white text-sm font-semibold mt-14">
              learn more
            </button>
          </div>
          <div className=" flex flex-col gap-2 justify-center items-center p-10">
            <span className=" text-green-500 text-4xl p-6 rounded-full border border-slate-300">
              <IoIosPeople />
            </span>
            <h1 className=" text-2xl font-normal ">Social Responsibility</h1>
            <p className=" text-justify opacity-80">
              CSR initiatives are an integral part of our strategic commitment,
              and we are always guided by strong ethical values to operate
              responsibly within broader social and economic context.
            </p>
            <button className="hover:underline uppercase px-5 py-2 bg-green-700 rounded-sm text-white text-sm font-semibold mt-20">
              learn more
            </button>
          </div>
          <div className=" flex flex-col gap-2 justify-center items-center p-10">
            <span className=" text-green-500 text-4xl p-6 rounded-full border border-slate-300">
              <FaIndustry />
            </span>
            <h1 className=" text-2xl font-normal ">Manufacturing Facilities</h1>
            <p className=" text-justify opacity-80">
              Popular Pharmaceuticals Ltd. is a leading manufacturer of
              medicines and active pharmaceutical ingredients (APIs) based in
              Bangladesh.
            </p>
            <button className="hover:underline uppercase px-5 py-2 bg-green-700 rounded-sm text-white text-sm font-semibold mt-6">
              learn more
            </button>
          </div>
          <div className=" flex flex-col gap-2 justify-center items-center p-10">
            <span className=" text-green-500 text-4xl p-6 rounded-full border border-slate-300">
              <IoBookSharp />
            </span>
            <h1 className=" text-2xl font-normal ">Reseacrh & Development</h1>
            <p className=" text-justify opacity-80">
              Our product development team continues its strong research
              orientation in formulation development to transform PPL into a
              truly international one.
            </p>
            <button className=" hover:underline uppercase px-5 py-2 bg-green-700 rounded-sm text-white text-sm font-semibold mt-6">
              learn more
            </button>
          </div>
        </div>
        <div className=" w-full">
          <HomeMember />
        </div>
      </div>
      <div className=" w-full my-10">
        <Category />
      </div>
    </div>
  );
};

export default Home;
