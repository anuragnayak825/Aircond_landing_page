import React from "react";
import { FaCheckCircle, FaBolt, FaPhoneAlt } from "react-icons/fa";

export default function CombinedServicesAndOffer() {


  return (
    <section
      className="relative bg-fixed bg-center bg-cover bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/close-up-worker-operating-industrial-machine-factory_637285-4184.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px] z-0" />
      <div className="relative z-10 px-4 md:px-20 pt-6 pb-6">
        {/* Warranty Section */}
        <div className=" text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center justify-center gap-2">
            Expert Craftsmanship, Guaranteed Cooling, Zero Risk, & 45-Days Warranty.
          </h1>
          <p className="text-white max-w-4xl mx-auto mt-4 text-base md:text-xl leading-relaxed">
            Your cooling comfort is our top priority. If your Aircond doesn’t perform after our service, you pay nothing. Every job is covered with a worry-free <span className="text text-xl trak font-bold ">45-days warranty</span> — that’s our promise of quality and trust.


          </p>
          <div className="flex justify-center mt-5">
            <button
              onClick={() => (window.location.href = "tel:+60163824522")}
              className="px-3 py-3 rounded-xl text-black zoomin-out font-bold bg-gradient-to-r from-[#f49934] to-[#ffab18] shadow-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            >
              <FaBolt className="text-white drop-shadow" />
              GET A FREE 20 PSI GAS TOP UP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
