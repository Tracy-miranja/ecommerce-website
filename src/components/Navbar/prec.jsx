// import React from "react";
import logo from "../../assets/logoshop.png";
import { IoSearchSharp } from "react-icons/io5";
import { RiShoppingCart2Fill } from "react-icons/ri";
import DarkMode from "./DarkMode";
import { FaCaretDown } from "react-icons/fa";
// import { list } from "postcss";
const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Top Rated", link: "/#Service" },
  { id: 3, name: "Kids Ware", link: "/#" },
  { id: 4, name: "Mens Wear", link: "/#" },
  { id: 4, name: "Women Wear", link: "/#" },
  { id: 4, name: "Electronics", link: "/#" },
];

const DropdownLinks = [
  { id: 1, name: "Trending products", link: "/#" },
  { id: 2, name: "Best selling", link: "/#" },
  { id: 3, name: "Top Rated", link: "/#" },
];
const Navbar = () => {
  return (
    <div className="drop-shadow-md bg-white dark:bg-grey-900 dark:text-white duration-200 z-40 ">
      {/* upper Navbar */}
      <div className="bg-primary flex">
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
          <div className="flex justify-between items-center gap-4">
            <div className="relative group overflow-hidden sm:block ">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-primary px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400"
              />
              <IoSearchSharp
                className="text-gray-500 group-hover:text-red-500 absolute top-1/2 -translate-y-1/2 right-3"
                onClick={() => alert("no clothes yet,")}
              />
            </div>
            {/* order button */}
            <button
              type="button"
              className=" bg-gradient-to-r from-orange-300 to-red-500 m-1 py-1 px-4 transition-all duration-200 rounded-full flex items-center gap-3 group  text-white bg-blend-lighten"
              onClick={() => alert("no order yet")}
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <RiShoppingCart2Fill className="flex items-center text-[20px] drop-shadow-sm cursor-pointer" />
            </button>
            {/* dark mode button */}
            <DarkMode />
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div className="bg-red-500 flex justify-center">
        <ul className="sm:flex hidden items-center ">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-3 py-3 text-red-50 hover:text-purple-500 duration-200 "
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* simple dropdown and links */}
          <li className="relative group">
            <a href="#" className="flex items-center gap-2 py-2 text-red-50">
              Trending
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"></FaCaretDown>
              </span>
            </a>
            <div className="absolute z-[999] hidden group-hover:block w-[150px] rounded-md bg-white text-black">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="block hover:bg-slate-100 w-full p-2 rounded-md"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
