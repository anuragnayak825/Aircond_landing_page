import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import ContactForm from "./ContactForm";

// Slider images
const sliderImages = [
  "https://webacrepair.info/images/hero-img.jpg",
  "https://pixydrops.com/loazzne/assets/images/slider/slider-1.jpg",
  "https://pixydrops.com/loazzne/assets/images/slider/slider-2.jpg",
  "https://pixydrops.com/loazzne/assets/images/slider/slider-3.jpg",
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
    <div className="relative w-full  overflow-hidden">
      {/* 🔷 Swiper Background Slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop
        speed={800}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full h-[80vh]"
      >
        {sliderImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              {/* Optional overlay inside Swiper */}
              <div className="w-full h-full bg-gradient-to-br from-[#004e92c5] to-[#000000d4]" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔷 Fixed Text Content */}
      <div className="absolute inset-0 flex flex-col lg:flex-row justify-center items-center gap-6 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 z-20">
        {/* Text Area */}
        <div className="text-white max-w-lg space-y-4 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
            Professional Aircon Services You Can Rely On – Serving{" "}
            <span className="text-yellow-500">(KL)</span>
          </h1>
          <p className="text-xl sm:text-2xl">
            Aircon Not Cooling?{" "}
            <span className="text-red-400">We’ve Got You Covered</span>
          </p>
          <p className="text-sm sm:text-base md:text-lg tracking-wide">
            Professional air conditioner servicing and repair in Kuala Lumpur.
            <br className="hidden sm:block" />
            Prompt, clean, and customer-friendly technicians.
          </p>
          <button className="mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded shadow transition duration-300 text-sm sm:text-base">
            CALL TECHNICIAN →
          </button>
        </div>

        {/* Placeholder for form area */}
        <div className="text-white w-full max-w-xl  h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px] xl:h-[320px] 2xl:h-[340px]">
          {/* Form will go here (you said don't add it now) */}
        </div>
      </div>

      {/* 🔘 Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 h-12 w-10 left-2 transform -translate-y-1/2 bg-white/80 text-black hover:bg-white p-2 shadow-lg z-30"
      >
        <FaChevronLeft className="text-xl" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 h-12 w-10 right-2 transform -translate-y-1/2 bg-white/80 text-black hover:bg-white p-2 shadow-lg z-30"
      >
        <FaChevronRight className="text-xl" />
      </button>
    </div>
  );
}
