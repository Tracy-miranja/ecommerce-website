// eslint-disable-next-line no-unused-vars
import React from "react";

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="bg-gray-600 dark:bg-gray-400 text-white mb-20"
    >
      <div className="container backdrop-blur-0 py-10">
        <div className="items-center space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl sm:items-left text-center sm:text-4xl font-semibold">
            Get Notified About The Product
          </h1>
          <input
            type="email"
            placeholder="Enter your email"
            className="text-gray-500 w-full mt-5 p-3 "
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
