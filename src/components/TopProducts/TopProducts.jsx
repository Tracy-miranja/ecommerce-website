// eslint-disable-next-line no-unused-vars
import React from "react";
import fashionwomentshirts from "../../assets/fashion-women-tshirts.jpg";
import Africanprint from "../../assets/African-print.jpg";
import menprintedshirts from "../../assets/men-printed-shirts.jpg";
import leopardprint from "../../assets/leopard-print.jpg";
import leryafashion from "../../assets/lerya-fashion.jpg";
import floralshirtsWomenBlouses from "../../assets/floral-shirts-Women-Blouses.webp";
import { FaStar } from "react-icons/fa";
const ProductData = [
  {
    id: 1,
    img: fashionwomentshirts,
    ratings: 5.0,
    title: "Kids wear",
    price: "ksh.200",
    color: "white",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cumque ullam ea!",
  },
  {
    id: 2,
    img: Africanprint,
    ratings: 5.0,
    title: "Women wear",
    price: "ksh.200",
    color: "white",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cumque ullam ea!",
  },
  {
    id: 3,
    img: menprintedshirts,
    ratings: 5.0,
    title: "Kids wear",
    price: "ksh.200",
    color: "white",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cumque ullam ea!",
  },
  {
    id: 4,
    img: floralshirtsWomenBlouses,
    ratings: 5.0,
    title: "women wear",
    price: "ksh.200",
    color: "white",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cumque ullam ea!",
  },
  {
    id: 5,
    img: leopardprint,
    ratings: 5.0,
    title: "Kids wear",
    price: "ksh.200",
    color: "white",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cumque ullam ea!",
  },
  {
    id: 6,
    img: leryafashion,
    ratings: 5.0,
    title: "Women wear",
    price: "ksh.200",
    color: "white",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cumque ullam ea!",
  },
];

const TopProducts = () => {
  return (
    <div>
      <div className="container">
        {/* header section */}
        <div className="text-left mb-20 justify-center ">
          <p data-aos="fade-up" className="text-sm text-orange-500">
            Top Selling Products
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            explicabo quod assumenda!
          </p>
        </div>
        {/* body section */}
        <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 gap-5 ">
          {ProductData.map((data) => (
            <div data-aos="zoom-in" key={data.id}>
              <div className="dark:bg-gray-500 group rounded-2xl hover:bg-black/80 hover:text-white duration-300 group max-w-[300px] max-h-[500px] bg-white  shadow-xl">
                <div className="flex h-[200px] justify-center">
                  <img
                    src={data.img}
                    alt="images"
                    className="max-w-[200px] block max-auto h-[200px] transform hover:translate-y-5 group-hover:scale-105 duration-300 drop-shadow-md"
                  />
                </div>
                {/* details section */}
                <div className="p-4 text-center">
                  {/* star rating */}
                  <div className="w-full flex text-center justify-center">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{data.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {data.description}
                  </p>
                  <button className="bg-orange-500 hover:scale-105 text-white rounded-full group-hover:bg-inherit group-hover:text-white p-1 mt-1 border group-hover:border-white">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
