import { usePortfolio } from "../context/PortfolioContext";
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesPage = () => {
  const { activeCategory, setActiveCategory } = usePortfolio();

  const categories = [
    "All Projects",
    "3D Designs",
    "Graphic Designs",
    "Printing Designs",
    "Web Designs",
  ];

    useEffect(() => {
      AOS.init({ duration: 900, once: true });
     }, []);
  return (
    
    <section>
       <div
      className="
        max-w-6xl mx-auto bg-white rounded-3xl py-12 px-6 text-center mb-12 mt-30
        transition-all duration-300
        shadow-[0_0_25px_rgba(168,85,247,0.15)]
        hover:shadow-[0_0_40px_rgba(236,72,153,0.35)]
      "
      data-aos="fade-up"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
        Our Creative Portfolio
      </h1>

      <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
        Explore our diverse range of design projects, meticulously crafted to bring visions to
        life. From stunning web designs to impactful graphic art, we deliver excellence.
      </p>
    </div>
      <div className="flex flex-wrap gap-4 justify-center my-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-6 py-3 rounded-xl text-lg border 
            ${
              activeCategory === cat
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                : "border-purple-300 text-purple-500 hover:bg-purple-100"
            }
          `}
        >
          {cat}
        </button>
      ))}
    </div>
    </section>
  );
};

export default ServicesPage;
