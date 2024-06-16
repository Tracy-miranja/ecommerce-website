// eslint-disable-next-line no-unused-vars
import React from "react";

import womenwear from "../../assets/womenwear.png";
import Slider from "react-slick";

const imageList = [
  {
    id: 1,
    img: womenwear,
    title: "Upto 50% off Men's wear ",
    decription:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
  },
  {
    id: 2,
    img: womenwear,
    title: "Upto 50% off Men's wear ",
    decription:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
  },
  {
    id: 3,
    img: womenwear,
    title: "Upto 50% off Men's wear ",
    decription:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
  },
];

const Hero = () => {
  var setting = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="relative overflow-hidden min-h-[560px] sm:min-h-[590px] bg-gray-200 flex justify-center text-center dark:bg-orange-500 duration-200 -z-[999]">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-orange-300 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...setting}>
          {imageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-black text-5xl sm:text:6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                    {data.decription}
                  </p>
                  <div
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                    <button className="bg-gradient-to-r from-orange-300 to-red-500 hover:scale-150 text-white py-2 px-2 rounded-3xl">
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image session */}
                <div className="order-1 sm:order-1">
                  <div className="relative z-10">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[550px] sm:w-[550px] sm:scale-125 lg:scale-100 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
