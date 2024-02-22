/** @format */

import React from "react";
import { producthero1 } from "../../../assets/index";

const AgroHero = () => {
  return (
    <div className="w-full flex mt-10 md-lg:flex-col justify-center py-0">
      <div className="w-[50%] md-lg:w-full h-full">
        <img src={producthero1} alt="" className="w-full h-full object-cover" />
      </div>
      {/* end */}
      <div className="w-[50%] md-lg:w-full flex flex-col justify-center p-10 items-center bg-[#f65c00]">
        <h1 className="text-2xl sm:text-5xl text-white font-bold text-center mt-5">
          Agro Products
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

export default AgroHero;
