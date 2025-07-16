import React from 'react';
import { FaClipboardList, FaRobot, FaMoneyBillWave } from 'react-icons/fa';

const steps = [
  {
    id: 1,
    title: 'Choose Your Service',
    icon: <FaClipboardList className="text-4xl sm:text-5xl" />,
  },
  {
    id: 2,
    title: 'Get Satisfied Services',
    icon: <FaRobot className="text-4xl sm:text-5xl" />,
  },
  {
    id: 3,
    title: 'Make Instant Payment',
    icon: <FaMoneyBillWave className="text-4xl sm:text-5xl" />,
  },
];

const Steps = () => {
  return (
    <div
      className="relative text-center py-10 sm:py-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/worker-works-air-conditioner_482257-90907.jpg?t=st=1752658727~exp=1752662327~hmac=385f93140a0e29f5be47a480c9ea8c766997dc99b8adcb25a7fce05f3a9202a9&w=1380')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#004e92c5] to-[#000000d4] z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Section Title */}
        <div className="flex justify-center items-center mb-3">
          <p className="text-[#ffc513] font-semibold uppercase tracking-wider font-serif text-base sm:text-lg">
            How it work
          </p>
          <hr className="border border-[#ffc513] w-10 sm:w-12 ml-2.5" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-10 sm:mb-12">
          3 easy step to task
        </h2>

        {/* Step Cards */}
        <div className="flex justify-center gap-8 sm:gap-12 md:gap-16 flex-wrap">
          {steps.map((step) => (
            <div
              key={step.id}
              className="w-72 sm:w-60 text-center relative group transition-transform duration-300 hover:scale-105"
            >
              {/* Circle Container */}
              <div className="relative w-40 sm:w-44 h-40 sm:h-44 mx-auto">
                {/* Outer semi circle border */}
                <div
                  className="
                    absolute inset-0 rounded-full 
                    border-t-[2px] border-gray-200
                    transition-transform duration-700 ease-in-out 
                    group-hover:rotate-180
                    group-hover:border-[#ffc513]
                  "
                ></div>

                {/* Middle circle with icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-32 sm:h-32 bg-gray-100 text-[#ffc513] group-hover:text-white group-hover:bg-[#ffc513] rounded-full flex items-center justify-center z-10">
                  {step.icon}
                </div>

                {/* Number badge */}
                <div
                  className="
                    absolute bottom-5 left-6 bg-blue-900 text-white text-xs sm:text-sm font-bold w-7 h-7 sm:w-8 sm:h-8 
                    rounded-full flex items-center justify-center z-20 shadow-md
                    transition-all duration-700 ease-in-out 
                    group-hover:top-[24px] group-hover:left-[110px] group-hover:bottom-auto
                  "
                >
                  {step.id.toString().padStart(2, '0')}
                </div>
              </div>

              {/* Title */}
              <p className="mt-5 text-[16px] sm:text-base font-semibold text-white leading-snug">
                {step.title.split(' ').slice(0, 2).join(' ')} <br />
                {step.title.split(' ').slice(2).join(' ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
