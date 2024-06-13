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
        </div>
      </div>
    </div>
  );
};

export default Banner;
