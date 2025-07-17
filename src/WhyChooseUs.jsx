import React from 'react';
import { motion } from 'framer-motion';
import { FaThermometerHalf, FaTools, FaRecycle, FaFan } from 'react-icons/fa';

const services = [
  {
    id: '01',
    title: 'Monthly Air Quality Testing',
    description: 'You’ve almost certainly heard us say at some point that air inside',
    icon: <FaThermometerHalf />,
  },
  {
    id: '02',
    title: 'HVAC Cleaning & Optimization',
    description: 'You’ve almost certainly heard us say at some point that air inside',
    icon: <FaFan />,
  },
  {
    id: '03',
    title: 'Installation & Maintenance',
    description: 'You’ve almost certainly heard us say at some point that air inside',
    icon: <FaRecycle />,
  },
  {
    id: '04',
    title: 'Money & Energy Efficiency',
    description: 'You’ve almost certainly heard us say at some point that air inside',
    icon: <FaTools />,
  },
];

export default function WhyChooseUs() {
  return (
    <motion.section
      className="w-full py-12 px-4 sm:px-6 bg-white overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center mb-16">

        <p className=" font-bold text-2xl sm:text-4xl mb-1">
          The Advantage of Working With Us
        </p>

        <h2 className="text-sm  font-medium text-gray-500 mt-4">
          From residential spaces to commercial environments, we understand the demands of Malaysia’s climate. Our AC services combine speed, reliability, and expertise — giving you cooling that fits your lifestyle.
        </h2>
      </div>

      {/* Responsive Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-16 gap-16 justify-items-center">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="w-[270px] sm:w-full flex flex-col items-center group cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="group/card transition-all duration-300 flex flex-col items-center">
              <div className="relative w-full text-center py-14 px-4 transition-all duration-300
                flex flex-col justify-between min-h-[280px] bg-gray-100 text-[#0c2340]
                group-hover/card:bg-[#ffc513] group-hover/card:text-white group-hover:shadow-xl rounded-md"
              >
                {/* Icon */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 transition-all duration-500 group-hover/card:-translate-y-2">
                  <div className="bg-[#0c2340] w-20 h-20 rounded flex justify-center items-center text-white text-3xl border border-gray-300">
                    {service.icon}
                  </div>
                  <div className="w-0 h-0 border-l-8 border-r-8 border-t-[10px] mx-auto border-transparent border-t-[#0c2340]"></div>
                </div>

                {/* Title & Description */}
                <div className="flex-grow flex flex-col justify-center mt-6">
                  <h3 className="font-bold text-[16px] mb-2">{service.title}</h3>
                  <p className="text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Bottom Arrow */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-5 h-5 rotate-45 bg-gray-100 group-hover/card:bg-[#ffc513] transition-all duration-300"></div>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex text-sm font-semibold group-hover/card:scale-[1.02] transition-transform duration-500">
                <span className="relative w-12 px-4 py-2 text-center text-white overflow-hidden z-10">
                  <span className="relative z-10">{service.id}</span>
                  <span className="absolute inset-0 bg-[#ffc513] -translate-x-full group-hover/card:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
                  <span className="absolute inset-0 bg-[#0c2340] z-[-1]"></span>
                </span>
                <span className="relative w-32 px-4 py-2 text-center text-white overflow-hidden z-10">
                  <span className="relative z-10">More Details</span>
                  <span className="absolute inset-0 bg-[#0c2340] -translate-x-full group-hover/card:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
                  <span className="absolute inset-0 bg-[#ffc513] z-[-1]"></span>
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
