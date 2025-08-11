import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import air_flow from "./assets/air_flow.webp";

export default function CTABanner() {
    return (
        <div
            className="relative w-full h-auto py-10 px-4 text-center"
            style={{
                backgroundImage: `url(${air_flow})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10">
                <h2 className="text-xl sm:text-3xl font-bold text-white drop-shadow">
                    Need Aircon Service? We’re Just a Call Away!
                </h2>
                <p className="mt-2 text-white font-medium max-w-3xl text-lg md:text-xl italic tracking-wide mx-auto drop-shadow">
                    From quick repairs to full installations, our certified technicians
                    have you covered. Contact us now for a free consultation!
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-4">
                    <a
                        href="tel:+60163824522"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
                    >
                        <FaPhoneAlt /> Call Us Now
                    </a>
                    <a
                        href="https://wa.me/60163824522"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition"
                    >
                        <FaWhatsapp className="text-3xl" /> Chat on WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
}
