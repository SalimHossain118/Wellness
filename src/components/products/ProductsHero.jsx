/** @format */

import React from "react";
import { producthero1 } from "../../assets/index";

const ProductsHero = () => {
  return (
    <div className="w-full h-[65vh] flex lg:flex-row sm:flex-col xm:flex-col py-0">
      {/* Image Section */}
      <div className="w-full sm:w-[45%] h-[300px] sm:h-full order-2 sm:order-1">
        <img src={producthero1} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Text Section */}
      <div className="w-full sm:w-[55%] h-full flex flex-col justify-center items-center bg-[#f65c00] order-1 sm:order-2">
        <div className="mt-11">
          <h1 className="text-2xl sm:text-5xl text-white font-bold text-center">
            Our Products
          </h1>
        </div>
        <div className="w-full sm:w-[60%] mt-2">
          <p className="text-white text-center p-2">
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

export default ProductsHero;
