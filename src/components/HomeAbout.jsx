import React from "react";
import { FaBinoculars, FaFlag } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";

const HomeAbout = () => {
  return (
    <div className=" w-full grid grid-cols-3">
      <div className=" w-full flex flex-col justify-center items-center p-12 bg-blue-900">
        <span className=" text-white text-6xl">
          <FaFlag />
        </span>
        <h1 className=" text-white font-normal p-4 text-3xl">Our Mission</h1>
        <p className=" text-white text-justify text-lg opacity-80">
          "Popular Pharmaceuticals Ltd. will be the leading pharmaceutical
          company of the country within 2015 as manufacturer of high-tech, high
          quality affordable medicines"
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
        <p className=" text-white text-justify text-lg opacity-80">
          To establish an environment around the pharmaceutical field through
          the highest level of innovative and technical support which will add
          value to our society and act as a driven force of our humanity.
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
        <p className=" text-white text-justify text-lg opacity-80">
          The latest venture of Popular Group is Popular Medical College &
          Popular Medical College Hospital which will fulfill the Group's
          devoted commitment towards the health sector of Bangladesh providing
          the complete healthcare services.
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
