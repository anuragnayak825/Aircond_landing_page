import React from "react";
import {
  FaTools,
  FaBuilding,
  FaHandshake,
  FaHeadset,
} from "react-icons/fa";
import bg_img2 from "./assets/bg-img2.png"
const achievements = [
  {
    id: 1,
    icon: <FaTools className="text-black text-4xl" />,
    number: "20+",
    label: "Years of Expertise",
  },
  {
    id: 2,
    icon: <FaHeadset className="text-black text-4xl" />,
    number: "24",
    label: "Hour Emergency Support",
  },
  {
    id: 3,
    icon: <FaBuilding className="text-black text-4xl" />,
    number: "3,000+",
    label: "Successfully Projects",
  },
  {
    id: 4,
    icon: <FaHandshake className="text-black text-4xl" />,
    number: "99%",
    label: "Happy Clients",
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
      {/* Globe Dotted Background */}
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

        {/* Achievement Cards */}
        <div className="flex flex-wrap justify-center gap-6 space-y-11 sm:gap-10 items-start">
          {achievements.map((item) => (
            <div
              key={item.id}
              className=" bg-white w-full max-w-[230px] flex flex-col justify-center items-center relative pt-14 pb-8 px-4 rounded-md shadow-md"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 p-4 w-20 h-20 flex items-center justify-center shadow-md rounded">
                {item.icon}
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-blue-900 mt-4">
                {item.number}
              </h3>
              <p className="text-sm mt-4 font-semibold text-gray-600 text-center">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Floating Shape */}
      <img
        src="https://themesflat.co/html/inverna/image/section/section-how-it-work-h2-3.png"
        alt="Decorative Shape"
        className="absolute bottom-0 right-0 hidden md:block sm:right-0 w-40 sm:w-36 lg:w-72 z-20"
      />

      {/* Worker Image */}
      <img
        src={bg_img2}
        alt="Worker"
        className="absolute bottom-0 right-0 w-40 hidden md:block sm:w-52 lg:w-80 z-10"
      />
    </section>
  );
}
