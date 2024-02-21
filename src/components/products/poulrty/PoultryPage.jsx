/** @format */

import React from "react";
import PoultryHero from "./PoultryHero";
import PoultryCard from "./PoultryCard";

const PoultryPage = () => {
  return (
    <div className="w-full flex flex-col  items-center justify-center ">
      <PoultryHero />
      <div className="w-[85%] flex flex-col  items-center justify-center mt-10">
        <PoultryCard />
      </div>
    </div>
  );
};

export default PoultryPage;
