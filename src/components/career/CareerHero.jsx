/** @format */

import React from "react";
import { career1 } from "../../assets/index";

const CareerHero = () => {
  return (
    <div className="w-full flex flex-col  items-center justify-center">
      <div className="relative w-full">
        <img
          src={career1}
          alt="Banner"
          className="w-full h-48 object-cover object-center"
        />
        {/* Company Profile */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-center">
            Careers at Wellness Pharmaceutical Ltd.
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-center">
            Wellness Pharmaceutical Ltd.
          </p>
        </div>
      </div>
      {/* end=> */}
      <div className="w-[85%] flex flex-col  items-center justify-center mt-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-start text-2xl text-black font-semibold">
            Welcome to Human Resources!!
          </h1>
          <p className="w-[50%] md:w-[70%] sm:w-[85%] xs:w-[90%] mt-4 p-3 text-sm text-slate-600">
            Thank you for your visit to our web site and your interest in
            Wellness Pharmaceutical Ltd.. We hope you will find what you are
            looking for as you peruse the many informational areas that are
            available on this web site including current employment
            opportunities.
          </p>
        </div>
        {/* end => */}
        <div className="flex flex-col justify-center items-center mt-4">
          <h1 className="text-start text-2xl text-black font-semibold">
            Join Us in Shaping the Future of Healthcare!
          </h1>
          <p className="w-[50%] md:w-[70%] sm:w-[85%] xs:w-[90%] mt-4 p-3 text-sm text-slate-600">
            At Wellness Pharmaceutical Ltd., we believe in nurturing talent,
            fostering innovation, and creating a workplace where every
            individual can thrive. As a leading global pharmaceutical company
            dedicated to improving lives, we are always on the lookout for
            passionate and skilled professionals who share our commitment to
            excellence. To obtain the most accurate and up-to-date information
            about career opportunities at Wellness Pharmaceutical Ltd., I
            recommend checking the following sources.
          </p>
        </div>
        {/* end=> */}
        <div className="flex flex-col justify-center items-center mt-4">
          <h1 className="text-start text-2xl text-black font-semibold">
            Why Choose a Career with Us
          </h1>
          <p className="w-[50%] md:w-[70%] sm:w-[85%] xs:w-[90%] mt-4 p-3 text-sm text-slate-600">
            <span className="text-lg font-semibold">Company Website:</span>{" "}
            Visit the official website of Wellness Pharmaceutical Ltd. Often,
            companies provide information about their corporate culture, values,
            and career opportunities on their websites.
          </p>
          <p className="w-[50%] md:w-[70%] sm:w-[85%] xs:w-[90%] mt-4 p-3 text-sm text-slate-600">
            <span className="text-lg font-semibold">Job Portals:</span> Check
            popular job portals or career websites for any job postings from
            Wellness Pharmaceutical Ltd. Companies frequently post their job
            openings on platforms like LinkedIn, Indeed, Glassdoor, and others.
          </p>
          <p className="w-[50%] md:w-[70%] sm:w-[85%] xs:w-[90%] mt-4 p-3 text-sm text-slate-600">
            <span className="text-lg font-semibold">LinkedIn:</span> Explore the
            LinkedIn profiles of current or past employees of Wellness
            Pharmaceutical Ltd. This can give you insights into the company's
            work culture and may even provide information on job openings.
          </p>
          <p className="w-[50%] md:w-[70%] sm:w-[85%] xs:w-[90%] mt-4 p-3 text-sm text-slate-600">
            <span className="text-lg font-semibold">Networking:</span> Attend
            industry events, conferences, or seminars where you might meet
            professionals from the pharmaceutical industry, including employees
            from Wellness Pharmaceutical Ltd. Networking can sometimes lead to
            valuable information about job openings.
          </p>
        </div>
        {/* end=> */}
      </div>
    </div>
  );
};

export default CareerHero;
