import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'

export default function Residentialandcommericial() {
    return (
        <section id='residential' className='w-full h-auto px-5 md:px-10 xl:px-20 py-10 bg-gray-50 flex flex-col lg:flex-row gap-10 items-center justify-center overflow-hidden'>
            {/* Residential Card */}
            <motion.div
                className='w-full lg:w-1/2'
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                <div className='w-full shadow-md bg-white border-8 border-white rounded-md'>
                    <div className='w-full group'>
                        <div className='w-full relative overflow-hidden'>
                            <img
                                src="https://img.freepik.com/free-photo/medium-shot-people-wearing-helmets-work_23-2149366667.jpg"
                                alt="Residential Service"
                                className='w-full object-cover'
                            />
                            <div className='absolute inset-0 flex'>
                                {[...Array(4)].map((_, i) => (
                                    <div
                                        key={i}
                                        className='w-1/4 h-full scale-x-0 origin-center transition-transform duration-500 ease-in-out group-hover:scale-100 bg-black/80'
                                    />
                                ))}
                            </div>
                        </div>
                        <div className='p-6'>
                            <h1 className='text-xl md:text-2xl font-bold italicss italicss'>Aircon Residential Services</h1>
                            <p className='text-sm md:text-lg font-normal italicss italicssr mt-6'>
                                At AC Cool N Cool Engineering, we understand how essential it is to maintain a comfortable and healthy environment at home—especially in India’s hot and humid climate. Our Residential aircon Services are designed to offer seamless, efficient, and long-lasting cooling for your living spaces.
                            </p>
                            <a href="https://wa.me/60163824522" className='w-full py-3.5 flex justify-center items-center mt-4 bg-blue-700 hover:bg-blue-800 text-white font-bold italicss text-lg md:text-xl px-3 rounded-2xl'>
                                Book Now <FaArrowRightLong className='ml-2.5' />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Commercial Card */}
            <motion.div
                className='w-full lg:w-1/2'
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                <div className='w-full shadow-md bg-white border-8 border-white rounded-md'>
                    <div className='w-full group'>
                        <div className='w-full relative overflow-hidden'>
                            <img
                                src="https://img.freepik.com/free-photo/men-working-with-equipment-full-shot_23-2148921408.jpg"
                                alt="Commercial Service"
                                className='w-full object-cover'
                            />
                            <div className='absolute inset-0 flex'>
                                {[...Array(4)].map((_, i) => (
                                    <div
                                        key={i}
                                        className='w-1/4 h-full scale-x-0 origin-center transition-transform duration-500 ease-in-out group-hover:scale-100 bg-black/80'
                                    />
                                ))}
                            </div>
                        </div>
                        <div className='p-6'>
                            <h1 className='text-xl md:text-2xl font-bold italicss italicss'>Aircon Commercial Services</h1>
                            <p className='text-sm md:text-lg font-normal italicss italicssr mt-6'>
                                At AC Cool N Cool Engineering , we help businesses stay cool and productive with reliable aircon. Our commercial aircon services are tailored for offices, showrooms, hotels, and more. We deliver efficient, scalable, and long-lasting cooling solutions for every business need.
                            </p>
                            <a href="https://wa.me/60163824522" className='w-full py-3.5 flex justify-center items-center mt-4 bg-blue-700 hover:bg-blue-800 text-white font-bold italicss text-lg md:text-xl px-3 rounded-2xl'>
                                Book Now <FaArrowRightLong className='ml-2.5' />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>

    )
}
