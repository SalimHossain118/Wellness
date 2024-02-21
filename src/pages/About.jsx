/** @format */

import React from "react";
import bannerImage from "../assets/images/imagescompanyImage.jpeg";
import companyImage from "../assets/images/imagesbannerImage.jpeg";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner Image */}
      <div className="relative">
        <img
          src={bannerImage}
          alt="Banner"
          className="w-full h-48 object-cover object-center"
        />
        {/* Company Profile */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-center">
            Company Profile
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-center">
            Wellness Pharmaceutical Ltd.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mt-4 mx-auto max-w-7xl text">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-center">
          Wellness Pharmaceutical Ltd.
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-justify">
          Wellness Pharmaceutical Ltd. is a leading global pharmaceutical
          company dedicated to advancing healthcare through cutting-edge
          researches, development, and delivery of innovative pharmaceutical
          solutions for both human and veterinary. With a commitment to
          improving global health, the company has been at the forefront of
          scientific innovation, consistently delivering high-quality products
          that address unmet medical needs. It was established in 2023 with a
          rich history of pharmaceutical research and marketing skills and
          experiences of resource persons in our country. This company
          collaborates on the manufacturing of drugs and the formulation of
          products with various international platforms, besides their own
          products. Their Research and Development department is highly enriched
          with laboratory facilities for testing quality control and assurances,
          as well as marketing policies to stay up-to-date.
        </p>

        <img
          src={companyImage}
          alt="Company"
          className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 mx-auto my-4"
        />

        <p className="text-lg sm:text-xl lg:text-2xl text-justify">
          Ethical and Responsible Practices: A vision often includes a
          commitment to conducting business with the highest ethical standards,
          ensuring patient safety, and engaging in responsible marketing and
          pricing practices. Global Access to Medicines: Some companies aspire
          to ensure that their products are accessible to people around the
          world, regardless of socio-economic factors. This involves initiatives
          to address affordability and availability issues.
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl text-justify">
          Ethical and Responsible Practices: A vision often includes a
          commitment to conducting business with the highest ethical standards,
          ensuring patient safety, and engaging in responsible marketing and
          pricing practices. Global Access to Medicines: Some companies aspire
          to ensure that their products are accessible to people around the
          world, regardless of socio-economic factors. This involves initiatives
          to address affordability and availability issues.
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl text-justify">
          Ethical and Responsible Practices: A vision often includes a
          commitment to conducting business with the highest ethical standards,
          ensuring patient safety, and engaging in responsible marketing and
          pricing practices. Global Access to Medicines: Some companies aspire
          to ensure that their products are accessible to people around the
          world, regardless of socio-economic factors. This involves initiatives
          to address affordability and availability issues.
        </p>

        {/* Repeat the above structure for other paragraphs or sections */}
      </div>
    </div>
  );
};

export default About;
