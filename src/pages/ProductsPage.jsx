/** @format */

import React from "react";
import ProductsHero from "../components/products/ProductsHero";
import AllProducts from "../components/products/AllProducts";

const ProductsPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <ProductsHero />
      <AllProducts />
    </div>
  );
};

export default ProductsPage;
