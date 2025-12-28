import { useEffect } from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn,FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import { useRef } from "react";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const formRef = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_pq15nid",
      "template_4lk6a08",
      formRef.current,
      "teByLd6wuLJlt7av0"
    )
    .then(
      (result) => {
        alert("Message Sent Successfully!");
      },
      (error) => {
        alert("Failed to send message.");
      }
    );
};
  return (
    <div className="pt-28">

      <section className="px-6 mb-28" data-aos="fade-up">
  <div className="max-w-5xl mx-auto bg-white/60 backdrop-blur-xl 
    border border-white/40 rounded-3xl py-16 px-6 md:px-16 text-center">

    {/* Heading */}
    <h1
      className="text-5xl md:text-6xl font-extrabold leading-tight 
      bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 
      text-transparent bg-clip-text"
      data-aos="zoom-in"
    >
      Get in Touch <br /> with Design Duet
    </h1>

    {/* Subtext */}
    <p
      className="text-lg md:text-xl text-gray-700 mt-6"
      data-aos="fade-up"
      data-aos-delay="150"
    >
      We're here to turn your creative vision into stunning reality.
    </p>

    {/* Contact Blocks */}
    <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">

      {/* WhatsApp Block */}
      <div
        data-aos="fade-right"
        data-aos-delay="300"
        className="flex items-center gap-4 bg-white 
        px-8 py-5 rounded-2xl border
        shadow-[0_0_20px_rgba(168,85,247,0.25)]
        hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]
        transition-all hover:scale-[1.02]"
      >
        <FaWhatsapp className="text-green-500 text-3xl" />
        <a 
  href="tel:+91-9310412672" 
  className="text-xl font-medium hover:text-purple-500 transition-all"
>
  +91-9310412672
</a>
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="350"
        className="flex items-center gap-4 bg-white 
        px-8 py-5 rounded-2xl border
        shadow-[0_0_20px_rgba(168,85,247,0.25)]
        hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]
        transition-all hover:scale-[1.02]"
      >
        <FaEnvelope className="text-red-400 text-3xl"/>
        <a 
  href="mailto:info@designduet.in" 
  className="text-xl font-medium hover:text-purple-500 transition-all"
>
  info@designduet.in
</a>

      </div>

    </div>

    {/* Social Icons */}
    <div
      className="flex justify-center gap-10 mt-10 text-3xl"
      data-aos="fade-up"
      data-aos-delay="500"
    >
      <FaFacebookF className="cursor-pointer hover:text-blue-600 transition" />
      <FaInstagram className="cursor-pointer hover:text-pink-600 transition" />
      <FaYoutube className="cursor-pointer hover:text-red-600 transition" />
      <FaLinkedinIn className="cursor-pointer hover:text-blue-600 transition" />
    </div>

  </div>
</section>
      <section
        className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl p-10 md:p-14 mb-20"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Start Your Project
        </h2>

       <form ref={formRef} onSubmit={sendEmail} className="space-y-6">

  {/* Name Fields */}
  <div>
    <label htmlFor="myname">Full Name*</label>
    <input
      type="text"
      name="full_name"
      placeholder="Name"
      className="w-full p-4 rounded-xl border focus:ring-2 focus:ring-purple-500 outline-none"
      required
      id="myname"
    />
  </div>

  {/* Email */}
  <label htmlFor="forEmail">Email address*</label>
  <input
    type="email"
    name="user_email"
    placeholder="Email Address"
    className="w-full p-4 rounded-xl border focus:ring-2 focus:ring-purple-500 outline-none"
    required
    id="forEmail"
  />

  {/* Phone */}
  <label htmlFor="forNum">Phone Number*</label>
  <input
    type="text"
    name="phone"
    placeholder="Phone Number"
    className="w-full p-4 rounded-xl border focus:ring-2 focus:ring-purple-500 outline-none"
    required
    id="forNum"
  />

  {/* Services */}
  <div>
    <p className="font-semibold text-gray-700 mb-2">Service Needed</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        "Web Design",
        "Graphic Design",
        "Printing Design",
        "Consultation",
      ].map((service, index) => (
        <label key={index} className="flex items-center gap-3 text-lg">
          <input
            type="checkbox"
            name="services"
            value={service}
            className="w-5 h-5 accent-purple-600"
          />
          {service}
        </label>
      ))}
    </div>
  </div>

  {/* Project Details */}
  <textarea
    name="message"
    placeholder="Project Details"
    rows="4"
    className="w-full p-4 rounded-xl border focus:ring-2 focus:ring-purple-500 outline-none"
    required
  ></textarea>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xl rounded-xl font-semibold hover:opacity-90 transition"
  >
    Send Message
  </button>
</form>

      </section>
    </div>
  );
};

export default ContactPage;

