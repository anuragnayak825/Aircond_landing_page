import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

export default function ContactACSection() {
  return (
    <section
      className="relative bg-cover bg-center py-16 px- md:px-"
    >
      {/* Overlay */}


      {/* Content */}
      <div className="relative z-10 border max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        {/* Text Section */}
        <div className="md:max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Connect With Us for Premium Air Conditioner Deals
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-white/90">
            Explore the latest models, top brands, and exclusive deals. Stay cool and
            comfortable with our premier air conditioner range in Kuala Lumpur, Selangor,
            Johor Bahru — and enjoy unbeatable value with our competitive prices!
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="space-y-4">
          <a
            href="tel:+60102497474"
            className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            <FaPhoneAlt className="text-xl" />
            Call Us Now
          </a>

          <a
            href="https://wa.me/60102497474"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            <FaWhatsapp className="text-xl" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
