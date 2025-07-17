import React from 'react'
import {
    FaTools,
    FaSnowflake,
    FaThermometerHalf,
    FaWater,
    FaBolt,
    FaWind,
    FaPhone,
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
        <div className='w-full py-10 px-4 '>
            {/* Heading */}
            <div className='flex flex-col justify-center items-center mb-10'>
                <div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-2 mb-2">
                    <p className="text-[#ffc513] font-semibold uppercase tracking-wider font-serif text-3xl">
                        Quality services
                    </p>
                    <hr className="border border-[#ffc513] w-10 mt-2 lg:mt-1" />
                </div>
                <p className='text-lg font-semibold tracking-wide text-center px-2'>
                    We provide expert air conditioning maintenance to keep your system running smoothly, efficiently, and reliably all year round.
                </p>
            </div>

            {/* Cards */}
            <div className='grid gap-y-16 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pt-16 place-items-center '>
                {services.map((ele, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants}
                        className='relative group w-full max-w-xs h-auto py-3.5 bg-gradient-to-b from-[#ccc8c8] to-[#f7f7f7] rounded-ee-[100px] px-5 shadow-md'
                    >
                        {/* Image */}
                        <div className='w-[140px] h-auto absolute -top-[10%] left-[10%]'>
                            <motion.img
                                src={ele.image}
                                alt={ele.title}
                                className='w-[140px] relative rounded-tr-[50px] object-cover'
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                            {/* Image dark overlay - only on desktop */}
                            <div className='hidden sm:flex absolute inset-0 bg-[#00000188] bg-opacity-80 items-center rounded-tr-[50px] justify-center opacity-0 group-hover:opacity-100 transition duration-300 z-20'></div>
                        </div>

                        {/* Desktop Hover Overlay */}
                        <div className='hidden sm:flex absolute inset-0 bg-[#00000188] bg-opacity-80 items-center rounded-ee-[100px] justify-center opacity-0 group-hover:opacity-100 transition duration-300 z-20'>
                            <button
                                onClick={() => window.location.href = 'tel:+60163824522'}
                                className='px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-semibold'
                            >
                                Book Now
                            </button>
                        </div>

                        {/* Mobile Call Icon - vibrate */}
                        {/* Mobile Call Icon - top right circle button */}
                        <div className='sm:hidden absolute top-4 right-4 z-30'>
                            <a
                                href='tel:+60163824522'
                                className='w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center animate-vibrate'
                            >
                                <FaPhone className='text-blue-600 text-xl' />
                            </a>
                        </div>


                        {/* Card Number */}
                        <h1 className='text-right p-16 text-5xl font-mono text-gray-500 z-10 relative'>
                            {ele.id}
                        </h1>

                        {/* Title and Icon */}
                        <div className='w-full h-auto py-2 z-10 relative'>
                            <span className='text-xl font-bold flex gap-2 items-center text-blue-700'>
                                {ele.icon} {ele.title}
                            </span>
                        </div>

                        {/* Description */}
                        <p className='text-[17px] text-gray-600 tracking-wide font-semibold mb-3 z-10 relative'>
                            {ele.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
