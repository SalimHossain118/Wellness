import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Category = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mdtablet: {
      breakpoint: { max: 991, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 3,
    },
    smmobile: {
      breakpoint: { max: 640, min: 0 },
      items: 2,
    },
    xsmobile: {
      breakpoint: { max: 440, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className=" w-full mx-auto relative">
        <Carousel
          autoPlay={true}
          infinite={true}
          arrows={true}
          responsive={responsive}
          transitionDuration={500}
        >
          {[1, 2, 3, 4, 5, 6].map((c, i) => (
            <div className="h-[185px] border block" key={i}>
              <div className="w-full h-full relative p-3">
                <img
                  className=" w-full h-full cursor-pointer hover:scale-110 transition-all"
                  src={`/animalM/${c}.png`}
                  alt="image"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Category;
