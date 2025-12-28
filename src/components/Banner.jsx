import React from 'react'
import BannerImg from "../assets/Banner.webp"
import {Link} from "react-router-dom"

const Banner = () => {
  return (
   <section
  className="relative w-full min-h-[40vh] md:min-h-[85vh] flex flex-col justify-center items-center text-center text-white px-4 md:px-6 py-20"
  style={{
    backgroundImage: `url(${BannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* HEADLINE */}
  <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-[0_0_20px_rgba(0,0,0,0.5)] px-2">
    Your Vision, Turned Into a <br className="hidden sm:block" /> 
    Powerful Digital Presence
  </h1>
    <Link
  to="/contact"
  className="mt-6 px-6 md:px-10 py-3 md:py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
>
 Transform Your Vision Into Reality  &nbsp; &nbsp; 
 <i className="fa-solid fa-arrow-right-long"></i>
</Link>

  
  {/* BOTTOM CURVE */}
  <svg
    className="absolute bottom-0 left-0 w-full"
    viewBox="0 0 1440 120"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0,0 C480,140 960,-60 1440,40 L1440,120 L0,120 Z"></path>
  </svg>
</section>

  );
};
export default Banner
