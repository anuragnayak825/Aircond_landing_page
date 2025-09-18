import React from 'react'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

import wall from "./assets/aircon-services-repair-malaysia.webp"
import cast from "./assets/commercial-industrial-ceiling-aircon-service.webp"


export default function Pricing() {
    const text = "WhatsApp For Fast Response";

    const plans = [
        {
            img: wall,
            name1: "Basic Cleaning – Wall Mounted",
            features_Basic: [
                { name: "1 Unit – RM 80", included: true },
                { name: "2 Units – RM 70 each", included: true },
                { name: "3 Units & above – RM 60 each", included: true },
            ],
            name: "Chemical Cleaning – Wall Mounted",
            features_Chemical: [
                { name: "1 Unit – RM 150", included: true },
                // { name: "2 Units – RM 130 each", included: true },
                { name: "3 Units  – RM 120 each", included: true },
            ],
            Commer_features_Chemical: [
                { name: "RM 150 each", included: true },

            ],

        },
        {
            img: cast,
            name1: "Basic Cleaning – Ceiling Cassette",
            recommended: true,
            features_Basic: [
                { name: "1 Unit - RM 100/unit", included: true },
                { name: "2 Units - RM 90/unit", included: true },
                { name: "3 Units & above - RM 80/unit", included: true },
            ],
            name: "Chemical Cleaning – Ceiling Cassette",
            features_Chemical: [
                { name: "1 Unit – RM 300", included: true },
                // { name: "2 Units – RM 280 each", included: true },
                { name: "3 Units – RM 260 each", included: true },
            ],
            Commer_features_Chemical: [
                { name: "1 Unit – RM 380", included: true },
                { name: "3 Unit – RM 350", included: true },
            ],
        },
    ];
    return (
        <section className=' px-4 md:px-10 xl:px-20 py-6'>
            <div className="text-center mb-6 md:mb-10 italicss">
                <h4 className="text-xl md:text-3xl font-bold">Choose Your Comfort Plan</h4>
                <p className=" text-sm max-w-xl mx-auto mt-3">
                    Transparent pricing for all types of AC units and services. Choose the one that suits your needs best.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 h-auto gap-5 w-full">
                {plans.map((plan, idx) => (
                    <div
                        key={idx}
                        className="relative flex flex-col justify-between bg-white p-4 rounded border border-gray-300 shadow-lg hover:shadow-2xl transition duration-300 group overflow-hidden w-full"
                    >
                        <div className=''>
                            <img src={plan?.img} alt="" className='mx-auto' />
                        </div>
                        <div className=' space-y-7 '>
                            <div className=' xl:flex '>
                                <div className="  xl:border-e border-e-gray-300 px-4 ">
                                    <h3 className="text-lg font-bold text-gray-800 mb-4 mt-4 text-left">{plan.name1}</h3>
                                    <ul className="space-y-3 text-lg text-gray-700">
                                        {plan?.features_Basic?.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                ✅ {feature.name}
                                            </li>
                                        ))}
                                    </ul>

                                    <p className='text-xl font-semibold text-gray-700 mt-4  gap-2 '>✅ 45-day warranty on water leakage</p>

                                </div>
                                <div className=" px-4 mt-2.5 xl:mt-0">
                                    <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">{plan.name}</h3>
                                    <p className='text-sm font-semibold tracking-wider text-blue-600 mb-4 underline'>RESIDENTIAL LOT :</p>
                                    <ul className="space-y-3 text-lg text-gray-700">
                                        {plan?.features_Chemical?.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                ✅ {feature.name}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* <p className='text-sm font-semibold tracking-wider text-blue-600 mb-4 underline my-3'>COMMERCIAL LOT :</p> */}
                                    <p className='text-sm font-semibold tracking-wider text-blue-600 underline mt-3 mb-1'>{idx == 0 ? "COMMERCIAL LOT :" : 'COMMERCIAL LOT UP To 3.0HP'}</p>

                                    <ul className="space-y-3 text-lg text-gray-700">
                                        {plan?.Commer_features_Chemical?.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                ✅ {feature.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-center w-full ">
                                <button onClick={() => { window.location.href = "https://wa.me/60163824522" }} className="flex btn-wave2 justify-center items-center rounded-md w-auto px-3.5 py-2.5 font-semibold italicss italicssr text-white bg-green-600 shadow-md shadow-gray-400">
                                    <FaWhatsapp className="mr-2 text-2xl" />
                                    <span className="btn-wave">
                                        {text.split("").map((letter, index) => (
                                            <span key={index} style={{ "--i": index }}>{letter}</span>
                                        ))}
                                    </span>
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}
