// eslint-disable-next-line no-unused-vars
import React from "react";

// const imagelist = [
//   {
//     id: 1,
//     img: banner1,
//     title: "Upto 50% off Men's wear ",
//     decription:
//       "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.<br> Lorem ipsum may be used as a placeholder before the final copy is available.",
//   },
//   {
//     id: 1,
//     img: banner2,
//     title: "Upto 50% off Men's wear ",
//     decription:
//       "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.<br> Lorem ipsum may be used as a placeholder before the final copy is available.",
//   },
//   {
//     id: 1,
//     img: banner3,
//     title: "Upto 50% off Men's wear ",
//     decription:
//       "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.<br> Lorem ipsum may be used as a placeholder before the final copy is available.",
//   },
// ];

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[500px] sm:min-h-[650px] bg-gray-100 flex justify-center text-center dark:bg-gray-500 duration-200">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-orange-400 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div>
              <h1 className="text-black">Lorem ipsum dolor sit eligendi.</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                omnis?
              </p>
              <div>
                <button className="bg-gradient-to-r from-orange-300 to-red-500 hover:scale-150 text-white py-2 px-2 rounded-3xl">
                  Order Now
                </button>
              </div>
            </div>
            {/* text content session */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;