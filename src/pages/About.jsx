import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutImg from "../assets/realvibe-mission-new.webp"
import AboutImg2 from "../assets/realvibe-vision-new-2.webp"
import { FaPenNib, FaPalette, FaVectorSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../components/follow.css"

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const services = [
    {
      title: "Branding",
      desc: "Purpose-driven, premium visuals that elevate your brand identity.",
      icon: <FaPenNib className="text-4xl text-purple-500" />,
    },
    {
      title: "UI/UX Design",
      desc: "Clean, modern and intuitive designs that enhance user experience.",
      icon: <FaVectorSquare className="text-4xl text-purple-500" />,
    },
    {
      title: "Social Creatives",
      desc: "Eye-catching, scroll-stopping visuals crafted for digital impact.",
      icon: <FaPalette className="text-4xl text-purple-500" />,
    },
  ];

  return (
    <div className="bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="pt-28 pb-16 text-center px-6">
        <h1 
          className="text-4xl md:text-6xl font-extrabold"
          data-aos="fade-up"
        >
          Meet Our Creative Team
        </h1>

        <p 
          className="text-lg md:text-xl text-gray-500 mt-5 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Where imagination meets craftsmanship — and every design becomes a meaningful visual story.
        </p>

      </section>

      {/* OUR MISSION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">

        <div data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            Our Mission
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed text-lg">
            At Design Duet, our mission is to transform ideas into powerful visual experiences. 
            We blend creativity, strategy, and aesthetics to craft designs that connect, inspire, 
            and communicate effortlessly. Every project we work on is built with intention — not 
            just to look good, but to create real impact for your brand.
          </p>
        </div>

        <img 
          src={AboutImg}
          className="w-full"
          data-aos="fade-left"
        />
      </section>

      {/* OUR VISION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          
          <img 
            src={AboutImg2}
            className="w-full"
            data-aos="fade-right"
          />

          <div data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Our Vision
            </h2>

            <p className="text-gray-600 mt-4 leading-relaxed text-lg">
              Our vision is to redefine how brands communicate through design.  
              We aim to be a creative powerhouse where innovation, originality, and 
              storytelling come together to build meaningful digital identities.  
              Every brand has a story — and we bring that story to life.
            </p>
          </div>

        </div>
      </section>

<section className="py-24 bg-white px-6">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Who We Are
        </h2>

        <p className="text-lg text-gray-500 mt-6 leading-relaxed">
          Design Duet is a creative studio for brands that want to stand out -
          modern, clean, and purpose-driven visuals crafted to perfection.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {services.map((item, idx) => (
          <div
            key={idx}
            className="
              relative group p-[2px] rounded-2xl 
              bg-gradient-to-r from-purple-500/30 via-pink-400/30 to-blue-400/30
              hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 
              transition-all duration-500
            "
          >
            <div
              className="
                bg-white/80 backdrop-blur-xl rounded-2xl p-8 h-full
                shadow-[0_0_20px_rgba(0,0,0,0.05)] group-hover:shadow-[0_0_30px_rgba(0,0,0,0.08)]
                transition-all duration-500
              "
            >
              {/* Icon */}
              <div className="mb-5">{item.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
      {/* WHY CHOOSE US */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 
            className="text-3xl md:text-4xl font-bold text-center"
            data-aos="fade-up"
          >
           Why Choose DesignDuet?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
            {[
              "Purpose-driven design",
              "Modern & trend-aware visuals",
              "Fully customized creative work",
              "Detail-focused craftsmanship",
              "Fast & reliable delivery",
              "Creative strategy that performs"
            ].map((point, i) => (
              <div 
                key={i}
                className="p-6 border border-gray-700 rounded-xl hover:bg-gray-800 transition-all"
                data-aos="fade-up"
                data-aos-delay={100 * i}
              >
                {point}
              </div>
            ))}
          </div>

        </div>
      </section>

       <section className="py-24 px-6 bg-white">
      {/* HEADING */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
          Meet the Visionary Behind
          <br /> Design Duet’s Creative Journey
        </h2>
      </div>

      {/* CONTENT ROW */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT TEXT */}
        <div>
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-400 text-transparent bg-clip-text">
            Shobit Sharma – (Founder & Creative Director)
          </h3>

          <p className="text-gray-600 leading-relaxed text-lg">
            A passionate creative professional with <strong>3 years of hands-on experience</strong> 
            in branding, graphic design, UI/UX, and 3d Design. Shobit has worked across 
            multiple design disciplines, helping businesses shape powerful visual identities and 
            deliver consistent brand experiences.
          </p>

          <p className="text-gray-600 leading-relaxed text-lg mt-5">
            His expertise lies in crafting modern, engaging, and purpose-driven designs that align 
            with brand strategy. Through Design Duet, he aims to bring clarity, innovation, and a 
            fresh creative perspective to every project.
          </p>

          <p className="text-gray-600 leading-relaxed text-lg mt-5">
            Committed to elevating brand presence, he ensures every client receives high-quality design 
            solutions that blend creativity with results-helping businesses stand out in today’s visual-first world.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="w-full max-w-md h-[380px] rounded-2xl bg-gray-200 shadow-lg overflow-hidden">
            {/* Replace this later with actual image */}
            <img
              src="/owner-temp.jpg"
              alt="Shobit Sharma"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
    <section className="py-14">
      <div className="max-w-6xl mx-auto bg-gray-50 rounded-2xl p-10 flex flex-col md:flex-col items-left justify-between shadow-sm">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Let’s Discuss Your Project
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl">
            Ready to make your brand unforgettable? Contact us now and let’s turn your vision into reality.
          </p>
        </div>

        {/* CONTACT PAGE BUTTON */}
        <Link to="/contact" className="cta-btn mt-8 md:mt-15">
          Lets Discuss →
        </Link>

      </div>
    </section>
    </div>
  );
};

export default About;
