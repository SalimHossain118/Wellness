/** @format */

import React from "react";
import { career1 } from "../../assets/index";

const CareerHero = () => {
  return (
    <div className="w-full h-[65vh] flex flex-col sm:flex-row py-0">
      {/* end */}
      <div className="w-full sm:w-[55%] h-full flex flex-col justify-items-center items-center ">
        <div className="mt-11">
          <h1 className="text-2xl sm:text-5xl text-black font-bold text-center">
            Agro Products
          </h1>
        </div>
        <div className="w-full sm:w-[60%] flex mt-2 justify-items-center items-center">
          <p className="text-slate-300 text-start p-2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
      </div>
      {/* end=> */}
      <div className="w-full sm:w-[45%] h-[300px] sm:h-full py-2">
        <img src={career1} alt="" className="w-full h-[100%] object-cover " />
      </div>
    </div>
  );
};

export default CareerHero;
