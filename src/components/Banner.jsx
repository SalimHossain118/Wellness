import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Banner = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    Desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className=" w-full md-lg:mt-6">
        <div className=" lg:w-[90%] mx-auto">
          <div className=" w-full flex flex-wrap md-lg:gap-8">
            <div className=" w-full">
              <div className=" my-8">
                <Carousel
                  autoPlay={true}
                  infinite={true}
                  arrows={true}
                  showDots={true}
                  responsive={responsive}
                >
                  {[1, 2, 3, 4, 5, 6, 7].length > 0 &&
                    [1, 2, 3, 4, 5, 6, 7].map((b, i) => (
                      <div className="lg:h-[440px] h-auto w-full block" key={i}>
                        <img src={`/banner/${b}.jpg`} alt={b} />
                      </div>
                    ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;