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
    <div id="Hero" className="relative w-full h-fit lg:min-h-[90vh] overflow-hidden">
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
      <div className="relative w-full flex flex-col lg:flex-row hero-row-layout justify-center items-center gap-4 md:gap-8 lg:ga xl:gap-10 2xl:gap-10 px-4 sm:px-6 md:px-10 lg: xl:px-20 2xl:px-28 pt-3 pb-6 sm:pt-10 sm:pb-10 lg:pt-10 lg:pb-8 z-10 overflow-hidden">
        {/* 🔹 Text Section */}
        <div className="overflow-hidden w-full lg:max-w-[1000px] ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white w-full space-y-3 md:space-y-6 sm:text-left"
          >
            <div className="md:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-[45px] font-semibold text-white ">
                Fast & Reliable Aircon Repair in KL – Book in 60 Seconds!
              </h1>
              <span className="text-lg md:text-xl font-normal">Affordable Rates | Same-Day Service | 100% Satisfaction.</span>
            </div>


            <p className=" font-semibold text-lg text-yellow-400 sm:text-xl md:text-2xl ">
              Aircon not cooling? <br /> <span className="text-white">Don’t sweat it — Certified techs just a click away</span>
            </p>

            <p className="text-sm sm:text-base md:text-lg tracking-wide">
              Trusted by 10k+ KL Homeowners & Businesses.
            </p>

            <button
              onClick={() => {
                window.location.href = "tel:+60163824522";
              }}
              className="relative mt-2 px-6 py-3 border border-white text-white font-semibold hover:border-blue-700 rounded shadow transition duration-300 text-sm sm:text-base overflow-hidden group"
            >
              <span className="relative z-10">Call a Technician Now  →</span>

              {/* Left Side Overlay */}
              <span className="absolute inset-y-0 left-1/2 w-0 group-hover:w-1/2  bg-blue-700 transition-all duration-300 origin-left"></span>

              {/* Right Side Overlay */}
              <span className="absolute inset-y-0 right-1/2 w-0 group-hover:w-1/2 bg-blue-700 transition-all duration-300 origin-right"></span>
            </button>

          </motion.div>
        </div>

        {/* 🔹 Contact Form Section */}
        <div className="overflow-hidden w-full lg:max-w-[500px] lg:flex justify-end  ">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-md xl:max-w-lg 2xl:max-w-lg"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>

      {/* 🔘 Swiper Arrows */}
      <button
        onClick={handlePrev}
        className="absolute hidden lg:flex justify-center items-center top-1/2 h-14 w-8 left-0 transform -translate-y-1/2 bg-white/70 text-black hover:bg-white p-2 shadow-lg z-30 rounded-e-lg "
      >
        <FaChevronLeft className="text-lg" />
      </button>
      <button
        onClick={handleNext}
        className="absolute hidden lg:flex justify-center items-center top-1/2 h-14 w-8 right-0 transform -translate-y-1/2 bg-white/70 text-black hover:bg-white p-2 shadow-lg z-30 rounded-s-lg "
      >
        <FaChevronRight className="text-lg" />
      </button>
    </div>
  );
}
