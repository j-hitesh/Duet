import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";
import "./follow.css";

const Follow = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section className="follow-section overflow-hidden cursor-pointer">
      <div 
        className={`follow-wrapper ${paused ? "paused" : ""}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        
        {/* LEFT ICONS */}
        <div className="flex space-x-10 iconHover">
          <FaFacebookF />
          <FaYoutube />
          <FaInstagram />
          <FaLinkedinIn />
        </div>

        {/* CENTER TEXT */}
        <h2 className="follow-text">Follow us on</h2>

        {/* RIGHT ICONS */}
        <div className="flex space-x-10">
          <FaFacebookF />
          <FaYoutube />
          <FaInstagram />
          <FaLinkedinIn />
        </div>

      </div>
    </section>
  );
};

export default Follow;
