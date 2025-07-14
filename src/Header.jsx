import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import logo from './assets/logo-ac.webp';

export default function Header() {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full bg-[#1c63b8] shadow-xl z-50"
        >
            <div className="max-w-[1280px] mx-auto flex md:flex-row justify-between items-center px-6 sm:px-8 md:px-12 lg:px-16 py-3 gap-3 sm:gap-4">
                {/* Logo & Brand */}
                <div className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="Cool N Cool Logo"
                        className="w-[65px] h-[65px] object-contain drop-shadow-md"
                    />
                    <div className="hidden sm:block md:block lg:block xl:block 2xl:block">
                        <h1 className="text-lg sm:text-xl md:text-xl font-bold leading-tight">
                            <span className="text-[#F9B233]">A</span>
                            <span className="text-[#F9B233]">C</span>{' '}
                            <span className="text-white">COOL N COOL</span>
                        </h1>
                        <p className="text-xs sm:text-sm text-yellow-100">Engineering Services</p>
                    </div>
                </div>

                {/* Contact Buttons */}
                <div className="flex  gap-3 sm:gap-5 items-center justify-center">
                    {/* Phone Button */}
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="tel:+60163824522"
                        className="flex items-center gap-2 bg-white text-[#1c63b8] font-semibold text-sm sm:text-lg px-4 sm:px-6 py-2 rounded-full sm:rounded-md shadow hover:bg-gray-100 transition"
                    >
                        <FaPhoneAlt className="text-xl" />
                        <span className="hidden md:inline">+60 16-382 4522</span>
                        <span className="inline md:hidden">Call Us</span>
                    </motion.a>

                    {/* WhatsApp Button */}
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://wa.me/60123456789"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-500 text-white font-semibold text-sm sm:text-2xl px-4 sm:px-4 sm:py-4 py-2 rounded-full sm:rounded- shadow hover:bg-yellow-500 transition"
                    >
                        <FaWhatsapp className="text-xl sm:text-2xl " />
                        <span className="hidden md:inline">Contact On WhatsApp</span>
                    </motion.a>
                </div>
            </div>
        </motion.header>
    );
}
