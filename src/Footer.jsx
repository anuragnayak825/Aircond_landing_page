import React from 'react';
import {
    FaTwitter,
    FaFacebookF,
    FaPinterestP,
    FaInstagram,
    FaEnvelope,
    FaPhoneAlt,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="bg-[#0c2340] text-white py-10 px-6 sm:px-10">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center">

                    {/* Left - Message Form */}
                    <div className='w-full max-w-md text-black'>
                        <h1 className='font-thin italic tracking-widest text-white'>Message Us</h1>
                        <input
                            type="text"
                            placeholder='Enter Your Name'
                            className='px-3.5 py-2 border mb-3 italic border-gray-300 mt-2.5 shadow-inner outline-0 bg-white w-full'
                        />
                        <input
                            type="text"
                            placeholder='Enter Your Phone No.'
                            className='px-3.5 py-2 border mb-3 italic border-gray-300 shadow-inner outline-0 bg-white w-full'
                        />
                        <textarea
                            placeholder='Enter Your Message'
                            className='px-3.5 py-2 border mb-3 italic border-gray-300 shadow-inner outline-0 bg-white w-full'
                            rows={4}
                        ></textarea>

                        <div className='w-full flex justify-start items-center'>
                            <button
                                type="button"
                                className="relative overflow-hidden group px-6 py-2 mb-3 border border-gray-300 text-white tracking-widest italic"
                            >
                                <span className="relative group-hover:text-black z-10">Send</span>
                                <span className="absolute inset-0 bg-yellow-400 scale-0 group-hover:scale-100 origin-bottom-left transition-transform duration-500 ease-in-out z-0"></span>
                            </button>
                        </div>
                    </div>

                    {/* Right - Contact Info */}
                    <div className='w-full max-w-md italic tracking-wider'>
                        <h3 className="text-white font-semibold text-xl mb-3 flex items-center gap-2">
                            Contact <span className="w-5 h-[2px] bg-yellow-400"></span>
                        </h3>
                        <ul className="text-lg text-gray-300 space-y-4">
                            <li>
                                Aircon Service provider in the Kuala Lumpur and Selangor regions.
                            </li>
                            <li className="flex items-start gap-2">
                                <FaEnvelope className="text-white text-xl mt-1" />
                                <span className='text-lg'>
                                    info@accoolncool.com &
                                    accoolncool@gmail.com
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt className="text-white text-xl" /> +60 16-382 4522
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

            {/* Bottom Bar */}
            <div className='w-full bg-[#051c3a] px-6 sm:px-24 py-4 flex flex-col md:flex-row justify-between items-center gap-4'>
                <h1 className='text-white text-sm font-thin italic tracking-widest text-center md:text-left'>
                    © 2025, AC Cool N Cool Engineering. All rights reserved.
                </h1>
                <NavLink
                    className="text-white text-sm font-thin italic tracking-widest hover:underline"
                    to="/privacy-policy"
                >
                    Privacy Policy
                </NavLink>
            </div>
        </>
    );
};

export default Footer;
