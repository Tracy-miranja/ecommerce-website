// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../../assets/e-shop.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaLocationArrow,
  FaMobile,
} from "react-icons/fa";
// const bannerimg = {
//   backgroundImage: `url ${logo}`,
//   backgroundPosition: "bottom",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   height: "100%",
//   width: "100%",
// };
const footerLink = [
  { title: "Home", link: "/#home" },
  { title: "About", link: "/#blog" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <div className="text-white bg-black pt-1 pb-5">
      <div className="container ">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pv-44 pt-4">
          {/* companies details */}
          <div className="py-2 px-4">
            <h1 className="sm:text-3xl text-xl font-bold text-justify flex items-center gap-3 sm:text-center">
              {/* <img src={logo} alt="logo" className="w-[80px]" /> */}
              Kushi<span className="text-orange-600">-wears</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              doloribus ipsa mollitia.
            </p>
          </div>
          {/* footer details */}
          <div className="grid grid-cols-3 col-span-2 mt-4 font-bold md:pl-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
            <div className="flex flex-row ">
              <div>
                <h3 className="sm:text-3xl text-justify sm:text-left mb-3">
                  Important Links
                </h3>
                <ul className="flex flex-col gap-3">
                  {footerLink.map((data) => (
                    <li
                      key={data.id}
                      className="cursor-pointer hover:text-red-400 hover:translate-x-1 duration-300"
                    >
                      <li>
                        <a href={data.link}>{data.title}</a>
                      </li>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="ml-10">
              <h1 className="sm:text-3xl font-semibold text-xl text-justify sm:text-left mb-3">
                Links
              </h1>
              <ul className="flex flex-col gap-3">
                {footerLink.map((data) => (
                  <li
                    key={data.id}
                    className="cursor-pointer hover:text-red-400 hover:translate-x-1 duration-300"
                  >
                    <li>
                      <a href={data.link}>{data.title}</a>
                    </li>
                  </li>
                ))}
              </ul>
            </div>
            {/* social icons */}
            <div>
              <div className="flex items-center gap-3 mt-2">
                <a href="#">
                  <FaInstagram className="text-3xl text-orange-600" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl text-orange-600" />
                </a>
                <a href="#">
                  <FaLinkedinIn className="text-3xl text-orange-600" />
                </a>
              </div>
              <div className="mt-6 items-center gap-3">
                <div className="flex mb-2">
                  <FaLocationArrow className=" text-orange-600 mr-2" />
                  <p>Nairobi, centarl park</p>
                </div>
                <div className="flex">
                  <FaMobile className=" text-orange-600 mr-2" />
                  <p>+25476921978</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
