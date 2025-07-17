import React from "react";
import { motion } from "framer-motion";

export default function ServicesSection() {
    return (
        <section
            className="relative py-20 px-6 md:px-12 bg-fixed bg-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: "url('https://img.freepik.com/free-photo/worker-refilling-hvac-system-refrigerant_482257-90516.jpg?ga=GA1.1.2112137625.1747906340&semt=ais_hybrid&w=740')",
            }}
        >
            {/* Overlay for visibility */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-"></div>

            {/* Content Wrapper */}
            <div className="relative z-10 text-center max-w-6xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex justify-center items-center space-x-2 mb-12"
                >
                    <p className="text-[#ffc513] font-semibold uppercase tracking-wider font-serif text-lg sm:text-2xl lg:text-3xl">Our Services & Pricing</p>
                    <hr className="border border-[#ffc513] w-10 mt-2 lg:mt-1" />
                </motion.div>

                {/* Pricing Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"
                >
                    {pricingData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
                        >
                            <h3 className="text-2xl font-semibold text-[#0077b6] mb-4">{item.title}</h3>
                            <ul className="text-sm text-gray-700 mb-6">
                                {item.services.map((service, idx) => (
                                    <li key={idx} className="mb-3">
                                        <span className="font-semibold">{service.name}:</span> {service.price}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs text-gray-500">{item.note}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// Pricing Data
const pricingData = [
    {
        title: "Wall Mounted",
        services: [
            { name: "Troubleshooting", price: "RM 75/unit" },
            { name: "Water Leaking", price: "RM 100/unit" },
            { name: "Gas Refill (R22)", price: "RM 120" },
            { name: "Gas Refill (R410)", price: "RM 150" },
            { name: "Gas Refill (R32)", price: "RM 150" },
            { name: "General Cleaning (1 Unit)", price: "RM 80/unit" },
            { name: "General Cleaning (2 Units)", price: "RM 70/unit" },
            { name: "General Cleaning (3+ Units)", price: "RM 60/unit" },
            { name: "Chemical Service (1 Unit)", price: "RM 150/unit" },
        ],
        note: "Note: Troubleshoot RM 75 and repair charges apply to any unit diagnosed required repair/parts replacements.",
    },
    {
        title: "Ceiling Cassette",
        services: [
            { name: "Troubleshooting", price: "RM 100/unit" },
            { name: "Water Leaking", price: "RM 150/unit" },
            { name: "Gas Refill (R22)", price: "RM 120" },
            { name: "Gas Refill (R410)", price: "RM 150" },
            { name: "Gas Refill (R32)", price: "RM 150" },
            { name: "General Cleaning (1 Unit)", price: "RM 100/unit" },
            { name: "General Cleaning (2 Units)", price: "RM 90/unit" },
            { name: "General Cleaning (3+ Units)", price: "RM 80/unit" },
            { name: "Chemical Service (1 Unit)", price: "RM 300/unit" },
        ],
        note: "Note: Gas more than 20psi is chargeable.",
    },
    {
        title: "Chemical Service Wall Mounted",
        services: [
            { name: "Residential (1 Unit)", price: "RM 150/unit" },
            { name: "Residential (2 Units)", price: "RM 130/unit" },
            { name: "Residential (3 Units)", price: "RM 120/unit" },
            { name: "Residential (5+ Units)", price: "RM 100/unit" },
            { name: "Commercial", price: "RM 150/unit" },
        ],
        note: "Note: 45 Days warranty on water Leaking.",
    },
];

