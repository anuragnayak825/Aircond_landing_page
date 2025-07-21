import React from "react";
import {
  FaTools,
  FaBuilding,
  FaHeadset,
  FaCheckCircle,
  FaSmile,
  FaStar,
} from "react-icons/fa";
import bg_img2 from "./assets/bg-img2.png";

const achievementsRow1 = [
  {
    id: 1,
    icon: <FaTools className="text-black text-4xl" />,
    number: "20+",
    label: "Years of Expertise",
  },
  {
    id: 2,
    icon: <FaHeadset className="text-black text-4xl" />,
    number: "24/7",
    label: "Hour Emergency Support",
  },
  {
    id: 3,
    icon: <FaBuilding className="text-black text-4xl" />,
    number: "3,000+",
    label: "Successfully Installations",
  },
];

const achievementsRow2 = [
  {
    id: 4,
    icon: <FaSmile className="text-black text-4xl" />,
    number: "10,000+",
    label: "Happy Customers Served",
  },
  {
    id: 5,
    icon: <FaCheckCircle className="text-black text-4xl" />,
    number: "45-Day",
    label: "Warranty on All Leak Repairs",
  },
  {
    id: 6,
    icon: <FaStar className="text-black text-4xl" />,
    number: "97.99%",
    label: "Customer Satisfaction Rate",
  },
];

export default function CompanyAchievementSection() {
  return (
    <section
      className="relative bg-fixed bg-no-repeat bg-cover bg-center text-white py-20 sm:py-28 px-4 sm:px-10 overflow-hidden"
      style={{
        backgroundImage: `
        linear-gradient(270deg, #00194C 59.9%, rgba(0, 25, 76, 0) 193.33%),
        url('https://themesflat.co/html/inverna/image/section/section-how-it-work-h2-1.jpg')`,
      }}
    >
      {/* Globe Background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center"
        style={{
          backgroundImage: `url('https://themesflat.co/html/inverna/image/section/section-how-it-work-h2-4.png')`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Company Achievement
          </h2>
        </div>

        {/* Row 1: 3 Items */}
        <div className="flex flex-wrap justify-center  gap-x-6 gap-y-14 sm:gap-16 mb-16">
          {achievementsRow1.map((item) => (
            <div
              key={item.id}
              className="bg-white w-full max-w-[300px] flex flex-col justify-center items-center relative pt-14 pb-8 px-4 rounded-md shadow-md"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 p-4 w-20 h-20 flex items-center justify-center shadow-md rounded">
                {item.icon}
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mt-3">{item.number}</h3>
              <p className="text-xl mt-4 font-semibold text-gray-600 text-center">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Row 2: 3 Items */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-14 sm:gap-16 ">
          {achievementsRow2.map((item) => (
            <div
              key={item.id}
              className="bg-white w-full max-w-[300px] flex flex-col justify-center items-center relative pt-14 pb-8 px-4 rounded-md shadow-md"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 p-4 w-20 h-20 flex items-center justify-center shadow-md rounded">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mt-3 text-center">{item.number}</h3>
              <p className="text-xl mt-4 font-semibold text-gray-600 text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Shape */}
      <img
        src={bg_img2}
        alt="Worker"
        className="absolute bottom-0 right-0 w-40 hidden md:block sm:w-52 lg:w-80 "
      />
      <img
        src="https://themesflat.co/html/inverna/image/section/section-how-it-work-h2-3.png"
        alt="Decorative Shape"
        className="absolute bottom-0 right-0 hidden md:block w-40 sm:w-36 lg:w-72 "
      />

      {/* Worker Image */}

    </section>
  );
}
