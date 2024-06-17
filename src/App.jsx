import { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products.jsx";
import Banner from "./components/Banner/Banner.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts.jsx";
import Subscribe from "./components/Subscribe/Subscribe.jsx";
import TopSelling2 from "./components/TopSelling2/TopSelling2.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Footer from "./components/footer/Footer.jsx";
import Popup from "./components/popup/Popup.jsx";

const App = () => {
  const [orderpopup, setOrderPopup] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      delay: 100,
      easing: "ease-in-out-sine",
    });
    AOS.refresh();
  }, []);
  return (
    <div className=" dark:bg-gray-800 dark:text-white duration-200">
      <Navbar count={count} />
      <Hero />
      <Products />
      <TopProducts setOrderPopup={setOrderPopup} />
      <Banner />
      <Subscribe />
      <TopSelling2 />
      <Testimonials />
      <Footer />
      <Popup
        orderpopup={orderpopup}
        setOrderPopup={setOrderPopup}
        setCount={setCount}
        count={count}
      />
    </div>
  );
};

export default App;
