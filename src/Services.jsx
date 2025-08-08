import React from 'react'
import {
    FaTools,
    FaSnowflake,
    FaThermometerHalf,
    FaWater,
    FaBolt,
    FaWind,
    FaPhone,
    FaArrowRight,
} from 'react-icons/fa'
import { motion } from 'framer-motion'

const services = [
    {
        id: '01',
        title: 'Aircond Service & Cleaning',
        icon: <FaWind />,
        description:
            'We use specialized techniques to effectively service your HVAC system, ensuring peak performance, energy efficiency, and long-term reliability.',
        image:
            'https://img.freepik.com/free-photo/full-shot-mean-cleaning-air_23-2149482329.jpg',
    },
    {
        id: '02',
        title: 'Maintenance & Repair',
        icon: <FaTools />,
        description:
            'Our team provides quick and efficient service for Air con troubleshoot. Avail a full range of aircon repair and maintenance solutions.',
        image:
            'https://img.freepik.com/free-photo/medium-shot-smiley-people-wearing-helmets_23-2149366669.jpg',
    },
    {
        id: '03',
        title: 'Aircon Installation',
        icon: <FaSnowflake />,
        description:
            'We expertly install systems from leading manufacturers for both residential and commercial aircon units using professional tools and techniques.',
        image:
            'https://img.freepik.com/free-photo/certified-technician-getting-new-outdoor-air-conditioner-ready-after-replacing-old-busted-unit_482257-65745.jpg',
    },
    {
        id: '04',
        title: 'Diagnostics',
        icon: <FaThermometerHalf />,
        description:
            'We thoroughly diagnose your HVAC system to efficiently identify and resolve any issues quickly and precisely.',
        image:
            'https://img.freepik.com/free-photo/technician-looking-freon-leaks_482257-92791.jpg',
    },
    {
        id: '05',
        title: 'Heating & Water',
        icon: <FaWater />,
        description:
            'Get proficient services for your heating systems including flushing, resizing, or adjustments to maintain optimal functionality.',
        image:
            'https://img.freepik.com/free-photo/mechanic-holding-manometers-close-up_482257-90625.jpg',
    },
    {
        id: '06',
        title: 'Energy Efficiency',
        icon: <FaBolt />,
        description:
            'Our professional solutions help increase energy efficiency in your space, saving you costs and boosting sustainability.',
        image:
            'https://img.freepik.com/free-photo/woman-using-home-technology_23-2149216631.jpg',
    },
]

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
}

export default function Services() {
    return (
        <div className='w-full py-10 px-4'>
            {/* Heading */}
            <div className='flex flex-col justify-center items-center mb-10'>
                <div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-2 mb-2">
                    <p className="text-black font-semibold uppercase tracking-wider font-serif text-3xl">
                        Quality services
                    </p>
                    <hr className="border border-[#ffc513] w-10 mt-2 lg:mt-1" />
                </div>
                <p className='text-lg w-full max-w-3xl font-semibold tracking-wide text-center px-2'>
                    We provide expert air conditioning maintenance to keep your system running smoothly, efficiently, and reliably all year round.
                </p>
            </div>

            {/* Cards */}
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 px-10 md:px-20 ">
                {services.map((item, index) => (
                    <div
                        key={index}
                        className="group flex flex-col justify-between border border-gray-200 shadow-md rounded-xl bg-white hover:shadow-2xl transition duration-300"
                    >
                        {/* Image Section */}
                        <div className="relative w-full h-56 sm:h-64 lg:h-72 overflow-hidden rounded-t-xl">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-[#000000ab] bg-opacity-20 scale-0 rounded-[100px] group-hover:scale-100 group-hover:rounded-none  origin-top-left transition-all duration-500 ease-in-out rounded-t-xl" />
                        </div>

                        {/* Content Section */}
                        <div className="relative p-6 pt-16 flex flex-col justify-between grow">
                            {/* Floating Icon */}
                            <div className="absolute -top-10 left-6 w-20 h-20 bg-white border border-[#00C4CC] shadow-md rounded-full flex justify-center items-center z-10">
                                < div
                                    className=" text-3xl object-contain filter invert-[40%] brightness-[0.7] contrast-[1.2]"
                                >{item?.icon}</div>
                            </div>

                            {/* Title & Description */}
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-gray-800 mt-3">{item.title}</h3>
                                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.description}</p>
                            </div>

                            {/* Button */}
                            <div className="mt-6">
                                <button
                                    onClick={() => {
                                        window.location.href = "tel:+60163824522";
                                    }}
                                    className="bg-[#1574C0] text-white font-medium italic px-5 py-2.5 rounded-full flex items-center hover:bg-[#105b96] transition duration-300"
                                >
                                    Explore <FaArrowRight className="ml-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
