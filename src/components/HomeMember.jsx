import React from "react";
import { FaBinoculars, FaFlag } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import member from "../assets/images/member.png";

const HomeMember = () => {
  return (
    <div className=" w-full grid grid-cols-3">
      <div className=" w-full flex flex-col justify-center items-center p-12 bg-blue-900">
        <span className=" w-28 h-28 rounded-full">
          <img src={member} alt="" />
        </span>
        <h1 className=" text-white font-normal p-4 text-3xl">Member 1</h1>
        <h3 className=" text-white font-normal pb-4 opacity-80 text-xl">
          Chairman
        </h3>
        <p className=" text-white text-sm opacity-70">
          Welcome to Popular Pharmaceuticals Ltd. (PPL) website. Thank you for
          taking the time to visit our website to learn more about our company.
          <br />
          <br />
          PPL is one of the leading pharmaceuticals companies in Bangladesh
          backed by Popular Group, the leader of country’s healthcare sector.
          <br />
          <br /> We have been in the forefront of delivering healthcare services
          in Bangladesh, through the largest Healthcare network of
          establishments for last 32 years. We are serving millions of people
          every year.
        </p>

        <div className=" self-start">
          <button className=" bg-green-600 px-6 text-white rounded-md mt-10 text-lg font-semibold py-2 hover:bg-green-500">
            See More
          </button>
        </div>
      </div>
      <div className=" w-full flex flex-col justify-center items-center p-12 bg-green-600">
        <span className=" w-28 h-28 rounded-full">
          <img src={member} alt="" />
        </span>
        <h1 className=" text-white font-normal p-4 text-3xl">Member 2</h1>
        <h3 className=" text-white font-normal pb-4 opacity-80 text-xl">
          Managing Director & CEO
        </h3>
        <p className=" text-white text-sm opacity-70">
          Thank you for your visit to our web site and your interest in POPULAR
          PHARMACEUTCALS LIMITED. (PPL) <br />
          <br /> Thirty – six years ago, we have decided to embark on a long,
          formidable journey, modestly 'armed' with very few resources while
          having many hopes and daring dreams.
          <br />
          <br /> Pharmaceutical sector is technologically the most developed
          manufacturing industries in Bangladesh and the third largest industry
          in terms of contribution to government’s revenue.
        </p>

        <div className=" self-start">
          <button className=" bg-blue-900 px-6 text-white rounded-md mt-10 text-lg font-semibold py-2 hover:bg-blue-700">
            See More
          </button>
        </div>
      </div>
      <div className=" w-full flex flex-col justify-center items-center p-12 bg-blue-900">
        <span className=" w-28 h-28 rounded-full">
          <img src={member} alt="" />
        </span>
        <h1 className=" text-white font-normal p-4 text-3xl">Member 3</h1>
        <h3 className=" text-white font-normal pb-4 opacity-80 text-xl">
          Director
        </h3>
        <p className=" text-white text-sm opacity-70">
          Welcome to Popular Pharmaceuticals Ltd. (PPL) website. Thank you for
          taking the time to visit our website to learn more about our company.
          <br />
          <br />
          PPL is one of the leading pharmaceuticals companies in Bangladesh
          backed by Popular Group, the leader of country’s healthcare sector.
          <br />
          <br /> We have been in the forefront of delivering healthcare services
          in Bangladesh, through the largest Healthcare network of
          establishments for last 32 years. We are serving millions of people
          every year.
        </p>

        <div className=" self-start">
          <button className=" bg-green-600 px-6 text-white rounded-md mt-10 text-lg font-semibold py-2 hover:bg-green-500">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeMember;
