/** @format */

import React from "react";
import AgroCard from "./AgroCard";
import AgroHero from "./AgroHero";

const AgroPage = () => {
  return (
    <div className="w-full flex flex-col  items-center justify-center ">
      <AgroHero />
      <div className="w-[85%] flex flex-col  items-center justify-center mt-10">
        <AgroCard />
      </div>
    </div>
  );
};

export default AgroPage;
