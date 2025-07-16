import React from 'react';
import { FaSnowflake, FaWind } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CoolTechSection = () => {
    return (
        <section className="overflow-x-hidden py-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-32 bg-[url('https://cooltech-vite.vercel.app/assets/pattern-2-B9zh0663.png')] bg-no-repeat bg-top bg-cover">
            <div className="relative max-w-[1440px] mx-auto flex flex-col md:flex-row items-center lg:items-center justify-center gap-y-12 md:gap-x-16">

                {/* Left Column with Image Animation */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-xs sm:max-w-sm md:max-w-[360px] flex justify-center lg:justify-end"
                >
                    {/* Main Image */}
                    <div className="relative z-10">
                        <img
                            src="https://cooltech-vite.vercel.app/assets/about2-1-BNuWFb_a.jpg"
                            alt="AC Installation"
                            className="w-full"
                        />
                        <img
                            src="https://cooltech-vite.vercel.app/assets/about2-2-CIil4rct.jpg"
                            alt="AC Maintenance"
                            className="absolute bottom-0 right-0 w-full max-w-[50%] border-t-8 border-e-8 border-s-8 border-white"
                        />
                    </div>

                    {/* Yellow Stripe */}
                    <div className="w-[40px] sm:w-[50px] md:w-[60px] absolute top-3 left-[-15px] sm:left-[-24px] -rotate-6 h-[43vh] sm:h-[65vh] md:h-[70vh] bg-[#ffc513]"></div>

                    {/* Call Box */}
                    <div className="absolute top-6 left-6 z-[20] bg-white shadow-xl border-[#ffc513] p-4 pl-5 flex items-center space-x-3 max-w-[270px] rounded-md">
                        <div className="bg-[#ffc513] p-2 rounded text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h1.6a2 2 0 011.9 1.4l1.4 4.2a2 2 0 01-.45 2L8.8 12a15.6 15.6 0 006.4 6.4l1.4-1.6a2 2 0 012-.45l4.2 1.4a2 2 0 011.4 1.9V21a2 2 0 01-2 2h-1C10 23 1 14 1 3V2a2 2 0 012-2h.6z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Call Anytime</p>
                            <p className="font-bold text-blue-900 text-lg">+60 16-382 4522</p>
                        </div>
                        <div className="absolute -bottom-2 left-1 w-5 h-5 bg-white transform rotate-45 z-[-1]"></div>
                    </div>
                </motion.div>

                {/* Right Column with Content Animation */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full max-w-xl text-center lg:text-left"
                >
                    {/* Heading Label */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start space-x-0 lg:space-x-2 mb-2">
                        <p className="text-[#ffc513] font-semibold uppercase tracking-wider font-serif text-sm sm:text-base">About Aircond</p>
                        <hr className="border border-[#ffc513] w-10 mt-2 lg:mt-1" />
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-900 leading-snug mb-4">
                        Reliable Aircon Repair <br className="hidden sm:block" /> & Installation
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 mb-5 leading-relaxed text-sm sm:text-base">
                        At Best Aircon Service, we offer professional air conditioning installation and repair for residential and commercial spaces.
                        Our experienced technicians ensure smooth setup, efficient performance, and long-term reliability. Whether it’s a new unit
                        or a system breakdown, we respond fast with expert solutions. Your comfort is our top priority.
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 justify-items-center lg:justify-items-start">
                        {[{
                            icon: <FaSnowflake />,
                            text: "Expert Team Members"
                        }, {
                            icon: <FaWind />,
                            text: "Safe Solution For Home"
                        }].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 * (index + 1), duration: 0.5 }}
                                viewport={{ once: true }}
                                className="flex items-start space-x-3"
                            >
                                <div className="text-[#ffc513] text-3xl">{item.icon}</div>
                                <h4 className="text-blue-900 font-semibold text-base">{item.text}</h4>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Button Animation */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start gap-5"
                    >
                        <button
                            onClick={() => { window.location.href = 'tel:+60163824522' }}
                            className="bg-[#ffc513] hover:bg-[#e6b300] text-white font-bold px-6 py-3 rounded-md shadow-md transition-all text-sm sm:text-base"
                        >
                            Contact Us
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CoolTechSection;
