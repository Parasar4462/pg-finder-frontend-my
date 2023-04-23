import React from "react";

//import images

import Image from "../assets/img/house-banner.png";

//import components

import Search from "./Search";
const Banner = () => {
  return (
    <section className="h-full max-h-[670px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:ml-8 xl:ml-[135px] flex items-center flex-col  lg:items-start text-left ">
          <h1 className=" text-4xl lg:text-[75px] font-semibold leading-none mb-6 ">
              <span className="text-violet-700 " > Find </span>
              Your Home <br/> Away From Home.
          </h1>
          <p className="max-w-[480px] mb-8">
          Choose from thousands of 100% genuine PG homes. Single room or a shared one, we have got it all.
          </p>
        </div>
        {/* image */}

        <div className="hidden flex-1 lg:flex justify-end items-end ">
          <img src={Image} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
