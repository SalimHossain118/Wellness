/** @format */

import React from "react";
import CareerHero from "../components/career/CareerHero";
import WhayWithUs from "../components/career/WhayWithUs";

const CareerPage = () => {
  return (
    <div className="w-full flex flex-col  items-center justify-center ">
      <CareerHero />
      <div className="w-[85%] flex flex-col  items-center justify-center mt-10">
        <WhayWithUs />
      </div>
    </div>
  );
};

export default CareerPage;
