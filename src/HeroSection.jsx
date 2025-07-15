import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import ContactForm from "./ContactForm";

const sliderImages = [
  "https://webacrepair.info/images/hero-img.jpg",
  // "https://pixydrops.com/loazzne/assets/images/slider/slider-1.jpg",
  // "https://pixydrops.com/loazzne/assets/images/slider/slider-2.jpg",
  // "https://pixydrops.com/loazzne/assets/images/slider/slider-3.jpg",
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
    <div className="relative w-full min-h-screen">
      {/* 🔷 Swiper Background */}
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

      {/* 🔷 Text + Form Content */}
      <div className="relative w-full flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-8 lg:gap-10 xl:gap-10 2xl:gap-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 py-5 z-10">
        {/* Text Section */}
        <div className="text-white max-w-lg space-y-2 sm:space-y-4 md:space-y-4 lg:space-y-4 xl:space-y-4 2xl:space-y-4 text-start lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
            Professional Aircon Services You Can Rely On –{" "}
            <span className="text-yellow-400">(KL)</span>
          </h1>
          <p className="text-sm sm:text-2xl hidden sm:block md:block lg:block xl:block 2xl:block">
            Aircon Not Cooling?{" "}
            <span className="text-red-400 font-semibold">We’ve Got You Covered</span>
          </p>
          <p className="text-lg sm:text-base md:text-lg tracking-wide">
            Professional air conditioner servicing and repair in Kuala Lumpur.
            <br className="hidden sm:block" />
            Prompt, clean, and customer-friendly technicians.
          </p>
          <button className="mt-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded shadow transition duration-300 text-sm sm:text-base">
            CALL TECHNICIAN →
          </button>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>

      {/* 🔘 Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute  hidden top-1/2 h-10 w-10 left-2 transform -translate-y-1/2 bg-white/70 text-black hover:bg-white p-2 shadow-lg z-30 rounded-full"
      >
        <FaChevronLeft className="text-lg" />
      </button>
      <button
        onClick={handleNext}
        className="absolute hidden top-1/2 h-10 w-10 right-2 transform -translate-y-1/2 bg-white/70 text-black hover:bg-white p-2 shadow-lg z-30 rounded-full"
      >
        <FaChevronRight className="text-lg" />
      </button>
    </div>
  );
}
