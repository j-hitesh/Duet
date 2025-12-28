import { Link } from "react-router-dom";
import "./follow.css"

const Cta = () => {
  return (
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
  );
};

export default Cta;
