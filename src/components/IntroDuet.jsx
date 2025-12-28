
import { useEffect } from "react";
import AOS from "aos";

const IntroDuet = () => {
    useEffect(() => {
      AOS.init({
        duration: 900,
        once: true,
        offset: 50,
      });
    }, []);
  return (
<>
  <section className="relative bg-[#f8f9fa] pb-20 px-6 text-center overflow-hidden">

  {/* TOP CURVE USING YOUR SVG */}
  <div className="absolute top-[-1px] left-0 w-full overflow-hidden leading-[0]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100px"
      viewBox="0 0 1200 130"
      preserveAspectRatio="none"
      >
      <path
        fill="#f8f9fa"
        d="M0,130 L0,60 C200,93.3333333 400,110 600,110 C800,110 1000,93.3333333 1200,60 L1200,130 L0,130 Z"
      ></path>
    </svg>
  </div>

  {/* CONTENT */}
  <div className="pt-32">
    <h2 className="text-2xl md:text-4xl font-bold text-[#222] leading-snug">
       Custom Creative Design Services in Gurgaon
    </h2>

    <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
     Design Duet delivers bespoke graphic design solutions crafted to elevate your brand’s identity. From logo design and visual branding to social media creatives and marketing graphics, we blend creativity with strategy to help businesses in Gurgaon stand out with confidence.
    </p>
  </div>

</section>
   <section className="py-20 px-4 sm:px-6 bg-white">
  <div className="max-w-6xl mx-auto text-center">

    {/* SECTION TITLE */}
    <h2
      className="text-3xl md:text-4xl font-extrabold text-[#1d1d1d]"
      data-aos="fade-up"
    >
      Our Creative Services
    </h2>

    <p
      className="mt-3 text-gray-600 text-base md:text-lg max-w-3xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="150"
    >
      We offer comprehensive design solutions tailored to bring your unique
      vision to life with exceptional creativity and precision.
    </p>

    {/* SERVICES GRID */}
    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div
        className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:scale-[1.03]"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-6">
          <i className="fa-solid fa-desktop text-white text-2xl"></i>
        </div>

        <h3 className="text-xl font-bold text-[#1d1d1d] text-left">Web Design Services</h3>
        <p className="mt-3 text-gray-600 text-left">
          We help businesses build or improve websites to boost user experience,
          brand identity, and online results.
        </p>

        <ul className="list-disc mt-4 space-y-2 text-gray-700 text-sm md:text-base text-left">
          <li>Custom website layout and structure</li>
          <li>Visual design and branding</li>
          <li>Content creation & SEO fundamentals</li>
          <li>Mobile and responsive design</li>
          <li>E-commerce setup & site maintenance</li>
        </ul>
      </div>

      {/* CARD 2 */}
      <div
        className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:scale-[1.03]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-6">
          <i className="fa-solid fa-paint-brush text-white text-2xl"></i>
        </div>

        <h3 className="text-xl font-bold text-[#1d1d1d] text-left">Graphic Design Services</h3>
        <p className="mt-3 text-gray-600 text-left">
          We create visual content to build strong brand identities and communicate effectively.
        </p>

        <ul className="list-disc mt-4 space-y-2 text-gray-700 text-sm md:text-base text-left">
          <li>Logo & brand design</li>
          <li>Brochures, posters, visiting cards</li>
          <li>Social media & digital graphics</li>
          <li>Website & app visuals</li>
          <li>Packaging, infographics & presentations</li>
        </ul>
      </div>

      {/* CARD 3 */}
      <div
        className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:scale-[1.03]"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-6">
            <i className="fa-solid fa-print text-white text-2xl"></i>
        </div>

        <h3 className="text-xl font-bold text-[#1d1d1d] text-left">Printing Services</h3>
        <p className="mt-3 text-gray-600 text-left">
          We produce premium print materials to help promote your business effectively.
        </p>

        <ul className="list-disc mt-4 space-y-2 text-gray-700 text-left text-sm md:text-base">
          <li>Brochure printing (custom finishes)</li>
          <li>Visiting cards (premium / emboss / UV)</li>
          <li>Flyers printing</li>
          <li>Banners (indoor / outdoor)</li>
        </ul>
      </div>

    </div>
  </div>
</section>

 </>
  )
}

export default IntroDuet
