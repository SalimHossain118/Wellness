/** @format */

import React from "react";
import { producthero1 } from "../../../assets/index";
const PoultryHero = () => {
  return (
    <div className="w-full flex mt-10 md-lg:flex-col py-0">
      <div className="w-full h-full">
        <img src={producthero1} alt="" className="w-full h-full object-cover" />
      </div>
      {/* end */}
      <div className="w-full flex flex-col justify-center items-center p-10 bg-[#f65c00]">
        <h1 className="text-2xl text-white font-bold text-center mt-5">
          Poultry Products
        </h1>

        <div className="w-full flex mt-2 justify-center items-center">
          <p className="text-white text-start p-2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PoultryHero;
