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
        className="w-full sticky top-0 bg-[#1c63b8] shadow-xl z-50"
      >
        <div className="max-w-[1280px] mx-auto flex md:flex-row justify-between items-center px-6 sm:px-8 md:px-12 lg:px-10 py-1 gap-4">

          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Cool N Cool Logo"
              className="w-[90px] h-[90px] object-contain drop-shadow-md cursor-pointer"
              onClick={() => { location.pathname.startsWith('/privacy-policy')&& window.history.back() }}
            />
            <div className="sm:block">
              <h1 className="text-xs sm:text-xl md:text-xl font-bold leading-tight">
                <span className="text-[#F9B233]">A</span>
                <span className="text-[#F9B233]">C</span>{' '}
                <span className="text-white">COOL N COOL</span>
              </h1>
              <p className="text-xs sm:text-sm text-yellow-100">Engineering Services</p>
            </div>
          </div>




          {/* Contact Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">

            {/* 📞 Phone Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+60163824522"
              className="group flex items-center justify-center text-[#1c63b8] font-semibold rounded-full overflow-hidden transition-all shadow-md hover:shadow-lg bg-white"
            >
              {/* Icon & Conditional Text */}
              <span className="w-auto p-2.5 flex items-center justify-center rounded-full bg-white md:hidden">
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
        </div>
      </motion.header>
    </>
  );
}
