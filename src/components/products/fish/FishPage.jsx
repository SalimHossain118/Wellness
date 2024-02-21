/** @format */

import React from "react";
import FishCard from "./FishCard";
import FishHero from "./FishHero";

const FishPage = () => {
  return (
    <div className="w-full flex flex-col  items-center justify-center ">
      <FishHero />
      <div className="w-[85%] flex flex-col  items-center justify-center mt-10">
        <FishCard />
      </div>
    </div>
  );
};

export default FishPage;
