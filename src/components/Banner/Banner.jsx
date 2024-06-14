// eslint-disable-next-line no-unused-vars
import React from "react";
import bannerimg from "../../assets/shop-clothes.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center py-12 items-center sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 item-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={bannerimg}
              alt="banner"
              className="max-w-[600px] h-[350px] w-full max-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>
          {/* text section */}
          <div className="flex flex-col justify-center sm:p-0 gap-6">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold ">
              winter sales upto 50% off
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leadimg-5"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              commodi nihil distinctio! Voluptas cum temporibus adipisci
              officiis nobis tempora rerum suscipit nam magni!
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm rounded-md bg-violet-100 p-4 dark:bg-white-500 dark:text-violate-800" />
                <p>Quality products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4 mt-5">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm rounded-md bg-violet-100 p-4 dark:bg-orange-500 " />
                <p>Fast delivery</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4 mt-5">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm rounded-md bg-violet-100 p-4 dark:bg-orange-500 " />
                <p>Get offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
