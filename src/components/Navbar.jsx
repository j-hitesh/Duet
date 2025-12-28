import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/Logo.webp'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 fixed top-0 left-0 z-50 bg-white/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <Link to="/" className="text-2xl font-bold">
           <img src={logo} alt="Design Duet logo" className="md:w-50 w-30" />
        </Link>

        <Link
          to="/contact"
          className="md:hidden px-4 py-2 bg-purple-600 text-white rounded-lg text-sm"
        >
          Contact Us
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-purple-600">
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About Us" />
          <NavItem to="/services" label="Our Projects" />
          <NavItem to="/contact" label="Contact Us" />
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 mt-3" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 text-lg font-medium text-purple-600 ">

          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about">About Us</Link>
          <Link onClick={() => setOpen(false)} to="/services">Our Projects</Link>

        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ to, label }) => (
  <li className="relative group cursor-pointer">
    <Link to={to}>{label}</Link>
    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
  </li>
);

export default Navbar;
