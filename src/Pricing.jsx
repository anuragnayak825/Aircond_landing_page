import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa';

export default function Pricing() {
    const text = "Call Now For More Information";

    const plans = [
        {
            img: "http://heroairconn.com/wp-content/uploads/2024/09/aircon-services-repair-malaysia.webp",
            name1: "Basic Service – Wall Mounted",
            features_Basic: [
                { name: "1 Unit – RM 80", included: true },
                { name: "2 Units – RM 70 each", included: true },
                { name: "3 Units & above – RM 60 each", included: true },
            ],
            name: "Chemical Cleaning – Wall Mounted",
            features_Chemical: [
                { name: "1 Unit – RM 150", included: true },
                { name: "2 Units – RM 130 each", included: true },
                { name: "3 Units  – RM 120 each", included: true },
            ],
        },
        {
            img: 'https://raisingwebsolutions.co.in/fast-aircon-landing/images/cassetter.webp',
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
                { name: "2 Units – RM 280 each", included: true },
                { name: "3 Units & above – RM 260 each", included: true },
            ],
        },
    ];
    return (
        <section className=' px-4 md:px-10 xl:px-20 py-6'>
            <div className="text-center mb-6 md:mb-10 italic">
                <h4 className="text-xl md:text-3xl font-bold">Choose Your Comfort Plan</h4>
                <p className=" text-sm max-w-xl mx-auto mt-3">
                    Transparent pricing for all types of AC units and services. Choose the one that suits your needs best.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                {plans.map((plan, idx) => (
                    <div
                        key={idx}
                        className="relative flex flex-col justify-between bg-white p-4 rounded border border-gray-300 shadow-lg hover:shadow-2xl transition duration-300 group overflow-hidden w-full"
                    >
                        <div className=''>
                            <img src={plan?.img} alt="" className='mx-auto' />
                        </div>
                        <div className=' '>
                            <div className=' xl:flex '>
                                <div className="  xl:border-e border-e-gray-300 px-4 ">
                                    <h3 className="text-lg font-bold text-gray-800 mb-4 text-left">{plan.name}</h3>
                                    <ul className="space-y-3 text-lg text-gray-700">
                                        {plan?.features_Basic?.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                ✅ {feature.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className=" px-4 mt-2.5 xl:mt-0">
                                    <h3 className="text-lg font-bold text-gray-800 mb-4 text-left">{plan.name}</h3>
                                    <ul className="space-y-3 text-lg text-gray-700">
                                        {plan?.features_Chemical?.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                ✅ {feature.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-4 flex justify-center w-full ">
                                <button onClick={() => { window.location.href = "tel:+60163824522" }} className="flex btn-wave2 justify-center items-center rounded-md w-auto px-3.5 py-2.5 font-semibold italic tracking-wider bg-yellow-400 shadow-md shadow-gray-400">
                                    <FaPhoneAlt className="mr-2" />
                                    <span className="btn-wave">
                                        {text.split("").map((letter, index) => (
                                            <span key={index} style={{ "--i": index }}>{letter}</span>
                                        ))}
                                    </span>
                                </button>
                                {/* <a
                                   
                                    className="w-auto mx-auto bg-blue-100 text-blue-700 py-2 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:bg-blue-200 transition"
                                >
                                    <FaPhoneAlt /> Call Now
                                </a> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}
