import React from 'react';
import { FaClipboardList, FaRobot, FaMoneyBillWave } from 'react-icons/fa';

const steps = [
  {
    id: 1,
    title: 'Select a Service',
    icon: <FaClipboardList className="text-4xl sm:text-5xl" />,
    description:
      'Browse our wide range of AC Cool N Cool Engineering solutions to find the perfect service tailored to your needs.',
  },
  {
    id: 2,
    title: 'Enjoy Reliable Service Delivery',
    icon: <FaRobot className="text-4xl sm:text-5xl" />,
    description:
      'Our certified technicians arrive on time and complete every job with precision, professionalism, and care.',
  },
  {
    id: 3,
    title: 'Pay Seamlessly & Instantly',
    icon: <FaMoneyBillWave className="text-4xl sm:text-5xl" />,
    description:
      'Make fast, secure payments through our trusted and convenient payment options — no delays, no hassle.',
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
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-10 sm:mb-12">
          How We Operate
        </h2>

        <div className="flex justify-center gap-8 sm:gap-12 md:gap-16 flex-wrap">
          {steps.map((step) => (
            <div
              key={step.id}
              className="w-72 sm:w-80 text-center relative  "
            >
              {/* Orbit + Icon */}
              <div className="relative group w-44 h-44 mx-auto">
                {/* Orbit Ring */}
                <div
                  className="absolute inset-0 rounded-full border-t-[2px] border-gray-200 
                  transition-all duration-700 ease-in-out group-hover:rotate-[180deg] group-hover:border-[#ffc513]"
                ></div>

                {/* Center Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gray-100 text-[#ffc513] group-hover:bg-[#ffc513] group-hover:text-white rounded-full flex items-center justify-center shadow-lg z-10 transition-all duration-500">
                  {step.icon}
                </div>

                {/* Orbiting Badge */}
                <div
                  className="absolute w-8 h-8 bg-blue-900 text-white text-sm font-bold 
  rounded-full flex items-center justify-center shadow-md z-20
  transition-all duration-700 ease-in-out
  opacity-40 group-hover:opacity-100
  bottom-5 left-6 group-hover:bottom-[128px] group-hover:left-[100px]"
                >
                  {step.id.toString().padStart(2, '0')}
                </div>
              </div>

              {/* Title */}
              <p className="mt-6 text-lg sm:text-xl font-semibold text-white leading-snug">
                {step.title}
              </p>

              {/* Description */}
              <p className="mt-3 text-[16px] text-white/80 px-3 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
