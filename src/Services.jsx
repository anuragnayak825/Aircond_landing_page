import React from 'react'
import { FaTools, FaSnowflake, FaThermometerHalf, FaWater, FaBolt, FaWind } from 'react-icons/fa'
import { motion } from 'framer-motion'

const services = [
    {
        id: '01',
        title: 'Servicing',
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

            {/* Responsive Cards Grid */}
            <div className='grid gap-y-16 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pt-16 place-items-center '>
                {services.map((ele, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants}
                        className='relative w-full max-w-xs h-auto py-3.5 bg-gradient-to-b from-[#ccc8c8] to-[#f7f7f7] rounded-ee-[100px] px-5 shadow-md'
                    >
                        {/* Image */}
                        <motion.img
                            src={ele.image}
                            alt={ele.title}
                            className='absolute w-[140px] -top-[10%] left-[10%] rounded-tr-[50px] object-cover'
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />

                        {/* Card Number */}
                        <h1 className='text-right p-16 text-5xl font-mono text-gray-500'>
                            {ele.id}
                        </h1>

                        {/* Title and Icon */}
                        <div className='w-full h-auto py-2'>
                            <span className='text-xl font-bold flex gap-2 items-center text-blue-700'>
                                {ele.icon} {ele.title}
                            </span>
                        </div>

                        {/* Description */}
                        <p className='text-[17px] text-gray-600 tracking-wide font-semibold mb-3'>
                            {ele.description}
                        </p>

                        {/* Button */}
                        <button className='px-3.5 py-2.5 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition'>
                            Connect Us
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
