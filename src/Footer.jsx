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
import ContactForm2 from './ContactForm2';

const Footer = () => {
    return (
        <>
            <footer className="bg-[#0c2340] text-white py-10 px-6 sm:px-10">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center">

                    <ContactForm2 />

                    {/* Right - Contact Info */}
                    <div className='w-full max-w-md italicss italicssr'>
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

                    <div className='py-1.5 w-full h-full lg:flex  flex-col items-center '>
                        <button onClick={() => { window.location.href = "tel:+60163824522" }} className='w-auto zoomin-out shadow-sm shadow-yellow-700 px-3 py-2 italicssr italicss  bg-yellow-400 text-black text-base md:text-lg font-semibold rounded-md  '>Claim Your Free 20 PSI Gas Top-Up </button>
                        <p className=' lg:text-center mt-5 text-lg font-semibold text-yellow-400 italicssr items-center italicss'>✔ 45 Days warranty on water Leaking</p>
                    </div>
                </div>
            </footer>

            {/* Bottom Bar */}
            <div className='w-full bg-[#051c3a] px-6 sm:px-24 py-4 flex flex-col md:flex-row justify-between items-center gap-4'>
                <h1 className='text-white text-sm font-thin italicss italicssst text-center md:text-left'>
                    © 2025, AC Cool N Cool Engineering. All rights reserved.
                </h1>
                <NavLink
                    className="text-white text-sm font-thin italicss italicssst hover:underline"
                    to="/privacy-policy"
                >
                    Privacy Policy
                </NavLink>
            </div>
        </>
    );
};

export default Footer;
