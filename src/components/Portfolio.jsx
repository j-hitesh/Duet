import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/d-5.webp"
import img2 from "../assets/d-7.webp"
import img3 from "../assets/d-11.webp"
import img4 from "../assets/d-16.webp"
import img5 from "../assets/d-18.webp"
import img6 from "../assets/d-20.webp"

const Portfolio = () => {
    useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 50,
    });
  }, []);

  const projects = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
  ];
  return (

    <>
   <section className="pt-20 px-6 bg-[#f8f9fa]">
  <div className="max-w-6xl mx-auto text-center">

    {/* SECTION TITLE */}
    <h2 
      className="text-3xl md:text-4xl font-extrabold text-[#1d1d1d]"
      data-aos="fade-up"
    >
      Our Creative Portfolio
    </h2>

    {/* SUBTEXT */}
    <p 
      className="mt-3 text-gray-600 text-base md:text-lg max-w-3xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="120"
    >
      Explore our diverse collection of projects that showcase our expertise 
      across various design disciplines.
    </p>

    {/* FILTER BUTTONS */}
    <div 
      className="mt-10 flex flex-wrap justify-center gap-4"
      data-aos="fade-up"
      data-aos-delay="200"
    >
     
    </div>

  </div>
</section>
 
   <section className="py-14 px-6 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {projects.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="w-full h-[310px] overflow-hidden rounded-xl shadow-lg bg-gray-100 cursor-pointer
                          transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
            >
              <img
                src={item.img}
                alt="portfolio item"
                className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
           <div className="mt-10 flex justify-center">
          <Link
            to="/services"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-500
                       text-white font-semibold rounded-xl shadow-md
                       hover:scale-105 transition-all duration-300"
          >
            See All Projects
          </Link>
        </div>
      </div>
    </section> 
 </>
  )
}

export default Portfolio
