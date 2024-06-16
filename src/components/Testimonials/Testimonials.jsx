/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
const bodyCards = [
  {
    id: 1,
    name: "Grace muhavi",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis, sint asperiores molestiae culpa fugiat velit blanditi",
    img: "https://picsum.photos/106/106",
  },
  {
    id: 2,
    name: "Shalline khaver",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis, sint asperiores molestiae culpa fugiat velit blanditi",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 3,
    name: "omar albert",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis, sint asperiores molestiae culpa fugiat velit blanditi",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 4,
    name: "wayne ali",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis, sint asperiores molestiae culpa fugiat velit blanditi",
    img: "https://picsum.photos/101/101",
  },
];

const Testimonials = () => {
  return (
    <div className=" py-9">
      <div className="conatiner">
        {/* head section */}
        <div className=" justify-center text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-orange-500">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            explicabo quod assumenda!
          </p>
        </div>
      </div>
      {/*Testimonial body */}
      <div data-aos="zoom-in" className="overflow-hidden ">
        <Slider
          slidesToScroll={1}
          slidesToShow={4}
          autoplay
          autoplaySpeed={2000}
          pauseOnHover
          infinite
          dots
        >
          {bodyCards.map((data) => (
            <>
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col shadow-lg gap-4 py-8 px-6 mx-4 rounded-lg mt-7 relative bg-pink-100"
                >
                  <div className=" flex flex-col mb-4 justify-center items-center">
                    <div>
                      <img
                        src={data.img}
                        alt="profile"
                        className="rounded-full w-20 h-20"
                      />
                    </div>
                    {/* <div className="text-right absolute mr-0 ">
                      <p className="text-black/20 text-9xl font-serif ">,,</p>
                    </div> */}
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3 text-center">
                      <p className="text-xs text-gray-500 ">{data.text}</p>
                      <h1 className="font-bold text-xl text-black/80 dark:text-light relative">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
