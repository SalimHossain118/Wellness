/** @format */

import React from "react";
import { FaBinoculars, FaFlag } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import member from "../assets/images/member.png";

const HomeMember = () => {
  return (
    <div className=" w-full grid grid-cols-3 md-lg:grid-cols-1">
      <div className=" w-full flex flex-col justify-center items-center p-12 bg-blue-900">
        <span className=" w-28 h-28 rounded-full">
          <img src={member} alt="" />
        </span>
        <h1 className=" text-white font-normal p-4 text-3xl">
          Dr Farzana Alam
        </h1>
        <h3 className=" text-white font-normal pb-4 opacity-80 text-xl">
          Chairman
        </h3>
        <p className=" text-white text-sm opacity-70">
          As the Chairman of Wellness Pharmaceutical Limited, it is my privilege
          to welcome you to our website, a platform dedicated to innovation,
          excellence, and compassion in both human and animal healthcare.
          <br />
          <br />
          At Wellness, we are driven by a profound commitment to improving the
          lives of all beings through cutting-edge pharmaceutical solutions.
          Whether it&#39;s enhancing the well- being of individuals or ensuring
          the health and vitality of our cherished animal companions, our
          mission remains unwavering.
          <br />
          <br />
          Beyond our dedication, we are deeply rooted in our responsibility to
          society and the environment. Sustainability, ethical practices, and
          community engagement are integral to everything we do, guiding our
          actions as we strive to make a positive impact on the world around us.
          <br />
          <br />
          As you navigate through our website, I encourage you to explore the
          breadth of our portfolio, learn more about our ongoing research and
          development initiatives, and discover the values that drive us forward
          each day.
          <br />
          <br />
          Thank you for your interest in Wellness Pharmaceutical limited.
          Together, let us continue to innovate, inspire, and make a meaningful
          difference in healthcare, for both humans and animals alike.
          <br />
          <br />
          Warm regards, <br /> Dr Farzana Alam <br /> Chairman <br /> Wellness
          Pharmaceutical Ltd.
        </p>

        <div className=" self-start">
          <button className=" bg-green-600 px-6 text-white rounded-md mt-10 text-lg font-semibold py-2 hover:bg-green-500">
            See More
          </button>
        </div>
      </div>
      <div className=" w-full flex flex-col justify-center items-center p-12 bg-green-600">
        <span className=" w-28 h-28 rounded-full">
          <img src={member} alt="" />
        </span>
        <h1 className=" text-white font-normal p-4 text-3xl">Ajoy Kumar</h1>
        <h3 className=" text-white font-normal pb-4 opacity-80 text-xl">
          Managing Director
        </h3>
        <p className=" text-white text-sm opacity-70">
          I trust this message finds you in good health and high spirits. As we
          embark on another year of serving the global community through our
          commitment to healthcare excellence, I wanted to take a moment to
          reflect on our journey and express my gratitude to each member of the
          Wellness Pharmaceutical family. <br />
          <br /> Our company's success is built on the dedication, resilience,
          and innovative spirit of our team. In the face of challenges, you have
          consistently demonstrated unwavering commitment to our mission of
          improving lives through accessible and high-quality pharmaceutical
          solutions. Your hard work and passion are the driving forces behind
          our achievements, and for that, I am immensely proud and thankful.
          <br />
          <br />
          At Wellness Pharmaceutical Ltd., we have always set ambitious goals
          and pursued them with a sense of purpose. Our commitment to research,
          development, and ethical business practices has positioned us as a
          reliable leader in the pharmaceutical industry. Together, we have made
          significant strides in delivering innovative healthcare solutions to
          those in need, contributing to the betterment of global health.
          <br />
          <br />
          As we move forward, let us continue to embrace collaboration,
          innovation, and a patient-centric approach. Our shared vision is to
          make a positive impact on the well-being of humanity, and each one of
          you plays a crucial role in realizing this vision.
          <br />
          <br />I encourage you to nurture your creativity, seek new
          opportunities for growth, and embody the values that define Wellness
          Pharmaceutical Ltd. Together, we will navigate the dynamic landscape
          of the pharmaceutical industry and overcome any challenges that come
          our way.
          <br />
          <br />
          Thank you for being an integral part of our journey. Here's to another
          year of excellence, innovation, and positive impact!
          <br />
          Best regards,
          <br />
          Ajoy Kumer
          <br />
          Managing Director
          <br /> Wellness Pharmaceutical Ltd.
        </p>

        <div className=" self-start">
          <button className=" bg-blue-900 px-6 text-white rounded-md mt-10 text-lg font-semibold py-2 hover:bg-blue-700">
            See More
          </button>
        </div>
      </div>
      <div className=" w-full flex flex-col justify-center items-center p-12 bg-blue-900">
        <span className=" w-28 h-28 rounded-full">
          <img src={member} alt="" />
        </span>
        <h1 className=" text-white font-normal p-4 text-3xl">
          Md Munsur Alam Munna
        </h1>
        <h3 className=" text-white font-normal pb-4 opacity-80 text-xl">
          Director
        </h3>
        <p className=" text-white text-sm opacity-70">
          It brings me great pleasure to extend a warm welcome to you on behalf
          of Wellness Pharmaceutical Limited , serving both the human and animal
          healthcare sectors. As Vice Chairman, I am proud to be a part of an
          organization dedicated to enhancing the well-being of both humans and
          animals through our innovative pharmaceutical solutions.
          <br />
          <br />
          At Wellness , we are committed to advancing and improving access to
          quality healthcare, and contributing to the betterment of lives around
          the globe. Our team of dedicated professionals works tirelessly to
          develop and deliver cutting-edge medications, food supplements and
          treatments that address the diverse needs of patients and animals
          alike.
          <br />
          <br /> As we continue to grow and evolve, we remain steadfast in our
          dedication to serving our customers, partners, veterans and
          communities with integrity, compassion, and innovation. Thank you for
          visiting our website and for your interest in Wellness Pharmaceutical
          Limited . We look forward to continuing to serve you and making a
          positive impact together.
          <br />
          <br />
          Best regards,
          <br />
          Md Munsur Alam Munna
          <br />
          Director
          <br /> Wellness Pharmaceutical Ltd.
        </p>

        <div className=" self-start">
          <button className=" bg-green-600 px-6 text-white rounded-md mt-10 text-lg font-semibold py-2 hover:bg-green-500">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeMember;
