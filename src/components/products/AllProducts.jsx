/** @format */

import React from "react";
import ProductsCard from "./ProductsCard";

const AllProducts = () => {
  return (
    <div className="w-[85%] flex flex-col  items-center justify-center mt-10">
      {/* <div className=" flex h-[55px] bg-blue-200 p-3 gap-2 justify-center items-center">
        <div className="w-[150px] h-[45px] p-2 border-s-orange-50 text-white text-xl  bg-orange-400 flex justify-center items-center rounded-lg cursor-pointer ">
          POULTRY
        </div>
        <div className="w-[150px] h-[45px] p-2 border-s-orange-50 text-white text-xl  bg-orange-400 flex justify-center items-center rounded-lg cursor-pointer ">
          DAIRY
        </div>
        <div className="w-[150px] h-[45px] p-2 border-s-orange-50 text-white text-xl  bg-orange-400 flex justify-center items-center rounded-lg cursor-pointer ">
          AGRO
        </div>
        <div className="w-[150px] h-[45px] p-2 border-s-orange-50 text-white text-xl  bg-orange-400 flex justify-center items-center rounded-lg cursor-pointer ">
          PETS
        </div>
        <div className="w-[150px] h-[45px] p-2 border-s-orange-50 text-white text-xl  bg-orange-400 flex justify-center items-center rounded-lg cursor-pointer ">
          FISH
        </div>
      </div> */}
      {/* end */}
      <ProductsCard />
    </div>
  );
};

export default AllProducts;
