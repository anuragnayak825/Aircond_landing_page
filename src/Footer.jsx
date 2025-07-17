import React from 'react';
import {
    FaTwitter,
    FaFacebookF,
    FaPinterestP,
    FaInstagram,
    FaEnvelope,
    FaPhoneAlt,
} from 'react-icons/fa';
import logo from './assets/logo-ac.webp';

const services = [
    'Aircon Servicing',
    'Aircon Repair',
    'Aircon installation',
    'Aircon Maintenance',
    'Residential Aircon Services',
];

const Footer = () => {
    return (
        <footer className="bg-[#0c2340] text-white py-16 px-6 sm:px-10">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-12">

                {/* Left - Brand & Social */}
                <div className="max-w-sm space-y-5">
                    <div className="flex items-center gap-2 text-white text-2xl font-semibold">
                        <img src={logo} alt="Airko Logo" className="w-20 h-20" />
                        <span className="text-white">AC COOL N COOL <br />Engineering Services</span>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        Desires to obtain pain of itself, because it is pain, but occasionally circumstances.
                    </p>
                    {/* <div className="flex items-center gap-4 text-white text-sm">
                        <FaTwitter className="hover:text-orange-500 transition" />
                        <FaFacebookF className="hover:text-orange-500 transition" />
                        <FaPinterestP className="hover:text-orange-500 transition" />
                        <FaInstagram className="hover:text-orange-500 transition" />
                    </div> */}
                </div>

                {/* Service */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                        Service <span className="w-5 h-[2px] bg-orange-500"></span>
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        {services.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                        Contact <span className="w-5 h-[2px] bg-orange-500"></span>
                    </h3>
                    <ul className="text-sm text-gray-300 space-y-3">
                        <li>Aircon Service provider in the Kuala Lumpur and Selangor regions.</li>
                        <li className="flex items-center gap-2">
                            <FaEnvelope className="text-orange-500" />
                            info@accoolncool.com <br />accoolncool@gmail.com
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhoneAlt className="text-orange-500" /> +60 16-382 4522
                        </li>
                    </ul>
                </div>

                {/* Gallery */}
               
            </div>
        </footer>
    );
};

export default Footer;
