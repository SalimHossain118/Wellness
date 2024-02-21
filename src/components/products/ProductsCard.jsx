/** @format */

import React from "react";
import { allproducts } from "../../constants/data.js";

const ProductsCard = () => {
  return (
    <div className="w-full justify-center items-center py-0">
      <div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-3 p-2">
        {allproducts.map((product, index) => (
          <div
            key={index}
            className="w-[300px] h-[400px] bg-white shadow-xl rounded-lg p-3 justify-center">
            <div className="flex justify-center">
              <img src={product.image} className="w-[150px] h-[150px]" />
            </div>
            <div>
              <h1 className="text-2xl text-black font-bold ">{product.name}</h1>
            </div>
            <div className="mt-2">
              <p className="text-sm">{product.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCard;
