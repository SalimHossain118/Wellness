/** @format */ import React from "react";
import PetHero from "./PetHero";
import PetsCard from "./PetsCard";

const PetProductsPage = () => {
  return (
    <div className="w-full flex flex-col  items-center justify-center ">
      <PetHero />
      <div className="w-[85%] flex flex-col  items-center justify-center mt-10">
        <PetsCard />
      </div>
    </div>
  );
};

export default PetProductsPage;
