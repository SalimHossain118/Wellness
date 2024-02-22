/** @format */

import React from "react";
import { FaBinoculars, FaFlag } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";

const HomeAbout = () => {
  return (
    <div className=" w-full grid grid-cols-3 md:grid-cols-1">
      <div className=" w-full flex flex-col justify-center items-center p-12 bg-blue-900">
        <span className=" text-white text-6xl">
          <FaFlag />
        </span>
        <h1 className=" text-white font-normal p-4 text-3xl">Our Mission</h1>
        <p className=" text-white text-justify text-md opacity-80">
          The mission of a reliable pharmaceutical company in the global market
          outlines the purpose and fundamental principles that guide the
          company's day-to-day operations and long-term objectives. A
          well-defined mission statement for being a global pharmaceutical
          company might include various development of new products and covering
          the markets through the sustainable ways.
        </p>
        <div className=" self-start">
          <button className=" bg-green-600 px-6 text-white rounded-md mt-10 text-lg font-semibold py-2 hover:bg-green-500">
            See More
          </button>
        </div>
      </div>
      <div className=" w-full flex flex-col justify-center items-center p-12 bg-green-600">
        <span className=" text-white text-6xl">
          <FaBinoculars />
        </span>
        <h1 className=" text-white font-normal p-4 text-3xl">Our Vision</h1>
        <p className=" text-white text-justify text-md opacity-80">
          Our vision being pharmaceutical company typically reflects its
          long-term aspirations and the impact it aims to make in the healthcare
          industry both the human and veterinary products. Here, are some common
          elements that may be part of the vision for a pharmaceutical company.
          Secondly, Our Mission is to discover, develop and successfully market
          the pharmaceutical products to prevent, diagnose, alleviate and cure
          of the Disease diseases. Improving Global Health.
        </p>
        <div className=" self-start">
          <button className=" bg-blue-900 px-6 text-white rounded-md mt-10 text-lg font-semibold py-2 hover:bg-blue-700">
            See More
          </button>
        </div>
      </div>
      <div className=" w-full flex flex-col justify-center items-center p-12 bg-blue-900">
        <span className=" text-white text-6xl">
          <IoPeopleSharp />
        </span>
        <h1 className=" text-white font-normal p-4 text-3xl">Why Us</h1>
        <p className=" text-white text-justify text-md opacity-80">
          Wellness Pharmaceutical Ltd. is a leading animal pharmaceutical
          company dedicated to improving the health and well-being of animals.
          Renowned for our commitment to quality, innovation, and expertise, we
          offer a comprehensive range of high-quality pharmaceutical products
          for pets, livestock, and companion animals. With a customer-centric
          approach and a team of experienced professionals, we strive to be a
          trusted partner in animal healthcare, ensuring the safety,
          effectiveness, and satisfaction of our customers.
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

export default HomeAbout;
