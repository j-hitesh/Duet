import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp
} from "react-icons/fa6";
import Logo from "../assets/logo-footer.webp"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white pt-20 pb-10 ">
     {/* LEFT SIDE – WHATSAPP */}
<div className="fixed bottom-10 left-6 z-50">
  <a
    href="https://wa.me/919310412672"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 shadow-xl w-12 h-12 rounded-full flex items-center justify-center
    hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] hover:scale-110 
    transition-all duration-300 animate-floating animate-popIn"
  >
    <FaWhatsapp className="text-white text-3xl" />
  </a>
</div>

{/* RIGHT SIDE – BACK TO TOP */}
<div className="fixed bottom-10 right-6 z-50">
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="bg-white shadow-xl w-12 h-12 rounded-full flex items-center justify-center
    hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] hover:scale-110 
    transition-all duration-300 animate-floating animate-popIn"
  >
    <span className="text-xl font-bold text-purple-600"><i className="fa-solid fa-angle-up"></i></span>
  </button>
</div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT SECTION */}
        <div>
          <img
            src={Logo}
            alt="Logo"
            className="h-20 mb-5"
          />

          <p className="text-gray-300 leading-relaxed mb-6">
          We're passionate about creating exceptional designs that tell your story and bring your vision to life. Let's create something amazing together.
          </p>

          <p className="font-semibold mb-3 underline underline-offset-4 decoration-purple-400">
            Follow us on
          </p>

          <div className="flex items-center gap-5 text-3xl">
            <a href="">
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />

            </a>
            <a href="">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer" />

            </a>
            <a href="">
            <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />

            </a>
            <a href="">
            <FaXTwitter className="hover:text-gray-300 cursor-pointer" />

            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-5 underline underline-offset-4 decoration-purple-400">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300 cursor-pointer">
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/About"}>About us</Link>
            </li>
            <li>
                <Link to={"/services"}>Our Services</Link>
            </li>
            <li>
                <Link to={"/contact"}>Contact us</Link>
            </li>
          </ul>
        </div>

     
        {/* ADDRESS + BADGES */}
        <div>
          <h3 className="text-xl font-semibold mb-5 underline underline-offset-4 decoration-purple-400">
            Address
          </h3>

          <p className="text-gray-300 mb-5 leading-relaxed">
            555, 5th Floor, JMD Megapole,  
            Sector-48, Gurgaon-122018
          </p>
           <p>Contact - +91-9310412672</p>  

           <p> Email - info@designduet.in</p>
        </div>

      </div>

      {/* BOTTOM COPYRIGHT BAR */}
      <div className="text-center text-gray-400 mt-12 pt-6 border-t border-gray-800">
        © Design Duet. All rights reserved 2025
      </div>
    </footer>
  );
};

export default Footer;
