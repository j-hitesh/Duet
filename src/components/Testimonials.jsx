import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import test1 from "../assets/Testomonial-1.webp"
import test2 from "../assets/Testomonial-2.webp"
import test3 from "../assets/Testomonial-3.webp"

const Testimonials = () => {
  const data = [
    {
      id: 1,
      title: "Brand Identity Transformation",
      text: "Design Duet completely redesigned our brand identity with fresh, modern visuals. Their attention to detail and creative strategy helped our brand look more premium and trustworthy.",
      name: "Amit Sharma",
      company: "Sharma Fabrics",
      img: test2,
    },

    {
      id: 2,
      title: "High-Quality Social Media Designs",
      text: "The social media graphics created by Design Duet significantly improved our engagement. Their designs matched our brand tone perfectly and made our posts stand out.",
      name: "Ritika Verma",
      company: "Ritika Boutique",
      img: test1,
    },
    {
      id: 3,
      title: "Creative Packaging & Print Designs",
      text: "Our product packaging designs were handled beautifully. Clean, modern, and eye-catching — customers loved it. Design Duet is our go-to design partner now.",
      name: "Harshit Kaushik",
      company: "Kaushik Foods",
      img: test3,
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1d1d1d]">
          Client’s <span className="border-b-8 border-purple-400 pb-1">Testimonials</span>
        </h2>

       <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={40}
        slidesPerView={1}>

          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white p-10 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.08)] max-w-4xl mx-auto">
                
                {/* Title */}
                <h3 className="text-lg font-semibold text-[#222] mb-3">
                  {item.title}
                </h3>

                {/* Text */}
                <p className="text-gray-600 leading-relaxed">
                  {item.text}
                </p>

                {/* Profile */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-[3px]">
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  <div className="text-left">
                    <h4 className="text-lg font-bold text-gray-800">{item.name}</h4>
                    <p className="text-purple-600 font-semibold">{item.company}</p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Testimonials;
