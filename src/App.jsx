import { useEffect } from "react";
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

const App = () => {
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
    <div>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <TopSelling2 />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
