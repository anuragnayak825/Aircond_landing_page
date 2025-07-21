import React from "react";
import { FaCheckCircle, FaBolt, FaPhoneAlt } from "react-icons/fa";

export default function CombinedServicesAndOffer() {
  const plans = [
    {
      name: "Basic Service – Wall Mounted",
      features: [
        { name: "1 Unit – RM 80", included: true },
        { name: "2 Units – RM 70 each", included: true },
        { name: "3 Units & above – RM 60 each", included: true },
      ],
    },
    {
      name: "Basic Cleaning – Ceiling Cassette",
      recommended: true,
      features: [
        { name: "1 Unit - RM 100/unit", included: true },
        { name: "2 Units - RM 90/unit", included: true },
        { name: "3 Units & above - RM 80/unit", included: true },
      ],
    },
    {
      name: "Chemical Cleaning – Wall Mounted",
      features: [
        { name: "1 Unit – RM 150", included: true },
        { name: "2 Units – RM 130 each", included: true },
        { name: "3 Units  – RM 120 each", included: true },
      ],
    },
    {
      name: "Chemical Cleaning – Ceiling Cassette",
      features: [
        { name: "1 Unit – RM 300", included: true },
        { name: "2 Units – RM 280 each", included: true },
        { name: "3 Units & above – RM 260 each", included: true },
      ],
    },
  ];

  return (
    <section
      className="relative bg-fixed bg-center bg-cover bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/close-up-worker-operating-industrial-machine-factory_637285-4184.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px] z-0" />

      <div className="relative z-10 px-4 md:px-20 pt-20 pb-28">
        {/* Header */}
        <div className="text-center mb-12">
          <h4 className="text-3xl font-bold text-white">Choose Your Comfort Plan</h4>
          <p className="text-white text-sm max-w-xl mx-auto mt-3">
            Transparent pricing for all types of AC units and services. Choose the one that suits your needs best.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between bg-white p-8 rounded border border-gray-300 shadow-lg hover:shadow-2xl transition duration-300 group overflow-hidden w-full"
            >
              <div className="">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{plan.name}</h3>
                <ul className="space-y-3 text-lg text-gray-700">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      ✅ {feature.name}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <a
                  href="tel:+60163824522"
                  className="w-full bg-blue-100 text-blue-700 py-2 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:bg-blue-200 transition"
                >
                  <FaPhoneAlt /> Call Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Warranty Section */}
        <div className="mt-16 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center justify-center gap-2">
            Expert Craftsmanship, Guaranteed Cooling, Zero Risk, & 45-Days Warranty.
          </h1>
          <p className="text-white max-w-2xl mx-auto mt-4 text-base md:text-lg leading-relaxed">
            Your cooling comfort is our top priority. If your Aircond doesn’t perform after our service, you pay nothing. Every job is covered with a worry-free <span className="text text-xl trak font-bold ">45-days warranty</span> — that’s our promise of quality and trust.


          </p>
          <div className="flex justify-center mt-5">
            <button
              onClick={() => (window.location.href = "tel:+60163824522")}
              className="px-6 py-3 rounded-xl text-black zoomin-out font-bold bg-gradient-to-r from-[#f49934] to-[#ffab18] shadow-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            >
              <FaBolt className="text-white drop-shadow" />
              GET a FREE 20 PSI GAS TOP UP 
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
