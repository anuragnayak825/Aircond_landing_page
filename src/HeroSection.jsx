import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import hero1 from "./assets/Hero1.webp";
import hero2 from "./assets/Hero2.webp";
import hero3 from "./assets/Hero_3.webp";

const sliderImages = [
  "https://webacrepair.info/images/hero-img.jpg",
  hero1,
  hero2,
  hero3,
];

export default function HeroSection() {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <div className="relative w-full h-fit lg:min-h-screen overflow-hidden">
      {/* 🔷 Background Swiper */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop
          speed={800}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-full h-full"
        >
          {sliderImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="w-full h-full bg-gradient-to-br from-[#004e92c5] to-[#000000d4]" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 🔷 Content (Text + Form) */}
      <div className="relative w-full flex flex-col lg:flex-row hero-row-layout justify-center items-center gap-4 md:gap-8 lg:gap-10 xl:gap-10 2xl:gap-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 pt-3 pb-6 sm:pt-10 sm:pb-10 lg:pt-16 lg:pb-10 z-10">
        {/* 🔹 Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white max-w-lg space-y-4 sm:text-left"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
            Professional Aircon Services You Can Rely On –{" "}
            <span className="text-yellow-400">(KL)</span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl hidden sm:block">
            Aircon Not Cooling?{" "}
            <span className="text-red-400 font-semibold">We’ve Got You Covered</span>
          </p>

          <p className="text-sm sm:text-base md:text-lg tracking-wide">
            Professional air conditioner servicing and repair in Kuala Lumpur.
            <br className="hidden sm:block" />
            Prompt, clean, and customer-friendly technicians.
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 0px rgba(255,255,255,0)",
                "0 0 20px rgba(255,0,0,0.5)",
                "0 0 0px rgba(255,255,255,0)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            onClick={() => {
              window.location.href = "tel:+60163824522";
            }}
            className="mt-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded shadow transition duration-300 text-sm sm:text-base"
          >
            CALL TECHNICIAN →
          </motion.button>
        </motion.div>

        {/* 🔹 Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-md xl:max-w-lg 2xl:max-w-lg"
        >
          <ContactForm />
        </motion.div>
      </div>

      {/* 🔘 Swiper Arrows */}
      <button
        onClick={handlePrev}
        className="absolute hidden lg:flex top-1/2 h-10 w-10 left-2 transform -translate-y-1/2 bg-white/70 text-black hover:bg-white p-2 shadow-lg z-30 rounded-full"
      >
        <FaChevronLeft className="text-lg" />
      </button>
      <button
        onClick={handleNext}
        className="absolute hidden lg:flex top-1/2 h-10 w-10 right-2 transform -translate-y-1/2 bg-white/70 text-black hover:bg-white p-2 shadow-lg z-30 rounded-full"
      >
        <FaChevronRight className="text-lg" />
      </button>
    </div>
  );
}
