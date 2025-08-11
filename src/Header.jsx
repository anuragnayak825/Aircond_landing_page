import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import logo from './assets/logo-ac.webp';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation()
  const [isPrivacy, setisPrivacy] = useState(false)

  return (
    <>
      {/* 🔁 Zoom Animation Keyframes */}
      <style>
        {`
          @keyframes zoomInOut {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          .animate-zoom {
            animation: zoomInOut 2s ease-in-out infinite;
          }

          /* 👇 Custom media query: Hide Call Us text under 393px */
          @media (max-width: 393px) {
            .hide-on-xs {
              display: none !important;
            }
          }
        `}
      </style>

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full sticky top-0  bg-white shadow-xl z-50"
      >
        <div className="w-full mx-auto flex md:flex-row justify-between items-center pr-4 sm:px-8 md:px-10 lg:px-20 py-1 gap-4">

          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Cool N Cool Logo"
              className="w-[90px] h-[90px]  drop-shadow-md cursor-pointer"
              onClick={() => { location.pathname.startsWith('/privacy-policy') && window.history.back() }}
            />

          </div>





          {/* Contact Buttons */}
          <div className="flex items-center gap-4 sm:gap-3 md:gap-4 lg:gap-6">

            {/* 📞 Phone Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+60163824522"
              className="group flex items-center justify-center text-white font-semibold rounded-full overflow-hidden transition-all shadow-md hover:shadow-lg bg-[#1c63b8]"
            >
              {/* Icon & Conditional Text */}
              <span className="w-auto p-3 flex items-center justify-center rounded-full bg-[#1c63b8] md:hidden">
                <FaPhoneAlt className="text-lg" />
                <span className="ml-2 hide-on-xs">Call Us</span>
              </span>
              {/* Full text on md+ */}
              <span className="hidden md:flex items-center gap-2 px-5 py-2.5 xl:px-6 xl:py-3 text-sm xl:text-base 2xl:text-lg">
                <FaPhoneAlt className="text-lg xl:text-xl 2xl:text-2xl" />
                Call Us: +60 16-382 4522
              </span>
            </motion.a>

            {/* 💬 WhatsApp Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/60163824522"
              target="_blank"
              rel="noopener noreferrer"
              className="group animate-zoom flex items-center justify-center text-white font-semibold rounded-full overflow-hidden transition-all shadow-md hover:shadow-lg bg-green-600 hover:bg-green-700"
            >
              {/* Icon only on small */}
              <span className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-green-600 md:hidden">
                <FaWhatsapp className="text-xl sm:text-2xl" />
              </span>
              {/* Full text on md+ */}
              <span className="hidden md:flex items-center gap-2 px-5 py-2.5 xl:px-6 xl:py-3 text-sm xl:text-base 2xl:text-lg">
                <FaWhatsapp className="text-lg xl:text-xl 2xl:text-2xl" />
                Contact On WhatsApp
              </span>
            </motion.a>


          </div>
          <ul className=" hidden xl:flex justify-between text-lg capitalize font-semibold italicss italicss space-x-5">
            {['Residential', 'Commercial'].map((item, idx) => (
              <li
                key={idx}
                className="relative group cursor-pointer transition-transform duration-300 ease-in-out"
              >
                <a href='#residential' className="group-hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                  {item}
                </a>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </li>
            ))}
            <li

              className="relative group cursor-pointer transition-transform duration-300 ease-in-out"
            >
              <a href='#location' className="group-hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                Locations
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </li>
          </ul>


        </div>
      </motion.header>
    </>
  );
}
