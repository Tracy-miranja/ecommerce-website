// import React from "react";
import logo from "../../assets/logoshop.png";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="drop-shadow-md bg-white dark:bg-grey-900 dark:text-white duration-200 z-40">
      {/* upper Navbar */}
      <div className="bg-primary">
        <div className="container flex justify-between items-center">
          <div>
            <a
              href="#"
              className="font-bold text-2xl sm:text-2xl flex gap-2 text-white"
            >
              <img
                src={logo}
                alt="NavBrand"
                className="w-24 h-10 uppercase text-center "
              />{" "}
              <span className="text-red-500">Kushi</span>-wear
            </a>
          </div>
          {/* searchbar */}
          <div className="group">
            <input
              type="text"
              placeholder="search"
              className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-primary px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400"
            />
            <IoSearchSharp />
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div className="bg-red-500">Navbrand</div>
    </div>
  );
};

export default Navbar;
