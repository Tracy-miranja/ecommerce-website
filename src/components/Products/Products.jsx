// eslint-disable-next-line no-unused-vars
import React from "react";
import kidclothing from "../../assets/kidsclothing.jpg";
import kids from "../../assets/kids.webp";
import boycloth from "../../assets/boycloth.jpg";
import fashionable from "../../assets/fashionable-womens-clothing.jpg";
import casualoutfit from "../../assets/casualoutfit.webp";
import latestfashion from "../../assets/girlsfashion.jpg";
import { FaStar } from "react-icons/fa";
const ProductData = [
  {
    id: 1,
    img: kidclothing,
    ratings: 5.0,
    title: "Kids wear",
    price: "ksh.200",
    color: "white",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cumque ullam ea!",
  },
  {
    id: 2,
    img: fashionable,
    ratings: 5.0,
    title: "Women wear",
    price: "ksh.200",
    color: "white",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cumque ullam ea!",
  },
  {
    id: 3,
    img: boycloth,
    ratings: 5.0,
    title: "Kids wear",
    price: "ksh.200",
    color: "white",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cumque ullam ea!",
  },
  {
    id: 4,
    img: casualoutfit,
    ratings: 5.0,
    title: "women wear",
    price: "ksh.200",
    color: "white",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cumque ullam ea!",
  },
  {
    id: 5,
    img: kids,
    ratings: 5.0,
    title: "Kids wear",
    price: "ksh.200",
    color: "white",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cumque ullam ea!",
  },
  {
    id: 6,
    img: latestfashion,
    ratings: 5.0,
    title: "Women wear",
    price: "ksh.200",
    color: "white",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cumque ullam ea!",
  },
];

const Products = () => {
  function addRate(ratings, FaStar) {
    if (ratings === 5) {
      FaStar = +5;
    }
    return FaStar;
  }
  return (
    <div className="mt-10 mb-12">
      <div className="container">
        {/* head section */}
        <div className=" justify-center text-center mb-10 max-w-[600px] mx-auto">
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
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 place-items-center gap-5 ">
            {/* card section */}
            {ProductData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 shadow-lg"
              >
                <>
                  <img
                    src={data.img}
                    alt=""
                    className="h-[220px] w-[150px] sm:w-[400px] object-cover rounded-md"
                  />
                  <div>
                    <h3 data-aos="fade-up" className="font-semibold">
                      {data.title}
                    </h3>
                    <p data-aos="fade-up" className="text-gray-500 text-sm">
                      {data.color}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" onChange={addRate} />
                    <span>{data.ratings}</span>
                  </div>
                </>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10 items-center group">
            <button
              type="button"
              className="rounded-md bg-orange-500 p-2 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black group-hover:border group-hover:border-black"
            >
              view all clothes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
