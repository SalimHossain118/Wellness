/** @format */

import React from "react";
import { producthero1 } from "../../../assets/index";

const AgroHero = () => {
  return (
    <div className="w-full h-[65vh] flex flex-col sm:flex-row py-0">
      <div className="w-full sm:w-[45%] h-[300px] sm:h-full">
        <img src={producthero1} alt="" className="w-full h-full object-cover" />
      </div>
      {/* end */}
      <div className="w-full sm:w-[55%] h-full flex flex-col justify-items-center items-center bg-[#f65c00]">
        <div className="mt-11">
          <h1 className="text-2xl sm:text-5xl text-white font-bold text-center">
            Agro Products
          </h1>
        </div>
        <div className="w-full sm:w-[60%] flex mt-2 justify-items-center items-center">
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
