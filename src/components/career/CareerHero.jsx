/** @format */

import React from "react";
import { career1 } from "../../assets/index";

const CareerHero = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="relative w-full">
        <img
          src={career1}
          alt="Banner"
          className="w-full h-48 object-cover object-center"
        />
        {/* Company Profile */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-center">
            Careers at Wellness Pharmaceutical Ltd.
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-center">
            Wellness Pharmaceutical Ltd.
          </p>
        </div>
      </div>
      {/* end=> */}
    </div>
  );
};

export default CareerHero;
