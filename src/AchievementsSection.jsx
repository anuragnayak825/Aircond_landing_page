import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function AchievementsSection() {
    return (
        <section
            className="relative py-20 px-6 md:px-12 bg-fixed bg-center bg-cover bg-no-repeat"
            style={{
                backgroundImage:
                    "url('https://img.freepik.com/free-photo/close-up-worker-operating-industrial-machine-factory_637285-4184.jpg')",
            }}
        >
            {/* Overlay for visibility */}
            <div className="absolute inset-0 bg-black/50 backdrop-blu"></div>

            {/* Content Wrapper */}
            <div className="relative z-10 text-center max-w-6xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="flex lg:flex-row items-center lg:items-center justify-center lg:justify-center space-x-0 lg:space-x-2">
                        <p className="text-white font-semibold uppercase italicssr font-serif text-sm sm:text-base lg:text-3xl">Our Track Record</p>
                        <hr className="border border-[#ffc513] w-10 mt-2 lg:mt-1" />
                    </div>
                </motion.div>

                {/* Horizontal Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-8"
                >
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-white"
                        >
                            <img
                                src={item.icon}
                                alt={item.label}
                                className="w-10 h-10 mb-3 opacity-80"
                            />
                            <h3 className="text-3xl font-bold">
                                <CountUp end={parseCount(item.value)} duration={2} />
                                {getSuffix(item.value)}
                            </h3>
                            <p className="text-sm text-white mt-1">{item.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// Utility Functions
const parseCount = (value) => {
    const match = value.match(/[\d,.]+/);
    return match ? parseFloat(match[0].replace(/,/g, "")) : 0;
};

const getSuffix = (value) => {
    const match = value.match(/[^\d.,]+/);
    return match ? match[0] : "";
};

// Data
const stats = [
    {
        icon: "https://cdn-icons-png.flaticon.com/512/1053/1053244.png",
        value: "20+",
        label: "Years of Expertise",
    },
    {
        icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        value: "24",
        label: "Hour Emergency Support",
    },
    {
        icon: "https://cdn-icons-png.flaticon.com/512/3595/3595455.png",
        value: "27,895",
        label: "Jobs Completed",
    },
    {
        icon: "https://cdn-icons-png.flaticon.com/512/3595/3595454.png",
        value: "3000+",
        label: "Installations Done",
    },
    {
        icon: "https://cdn-icons-png.flaticon.com/512/4267/4267470.png",
        value: "99",
        label: "Client Satisfaction (%)",
    },
    {
        icon: "https://cdn-icons-png.flaticon.com/512/2698/2698213.png",
        value: "45",
        label: "Day Service Warranty",
    },
];
