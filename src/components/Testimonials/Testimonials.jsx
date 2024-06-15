// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
const bodyCards = [
  {
    id: 1,
    name: "victor omar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis, sint asperiores molestiae culpa fugiat velit blanditi",
    img: "https://images.app.goo.gl/wRvu85cyFziHM4ch8",
  },
  {
    id: 2,
    name: "victor omar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis, sint asperiores molestiae culpa fugiat velit blanditi",
    img: "https://images.app.goo.gl/wRvu85cyFziHM4ch8",
  },
  {
    id: 3,
    name: "victor omar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis, sint asperiores molestiae culpa fugiat velit blanditi",
    img: "https://images.app.goo.gl/wRvu85cyFziHM4ch8",
  },
  {
    id: 4,
    name: "victor omar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis, sint asperiores molestiae culpa fugiat velit blanditi",
    img: "https://images.app.goo.gl/wRvu85cyFziHM4ch8",
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
      <div>
        <Slider
          slidesToScroll={1}
          slidesToShow={4}
          autoplay
          autoplaySpeed={2000}
          pauseOnHover
          infinite
          arrows
        >
          {bodyCards.map((data) => (
            <div
              key={data.id}
              className="flex flex-col shadow-lg gap-4 py-8 px-6 mx-4 rounded-lg"
            >
              <div>
                <img
                  src={data.img}
                  alt="profile"
                  className="rounded-full w-20 h-20"
                />
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="space-y-5">
                  <p className="text-xs text-gray-500 ">{data.text}</p>
                  <h1 className="font-bold text-xl text-black/80 dark:text-light">
                    {data.name}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
