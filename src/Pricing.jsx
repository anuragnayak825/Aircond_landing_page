import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa';

export default function Pricing() {
    const plans = [
        {
            img: "http://heroairconn.com/wp-content/uploads/2024/09/aircon-services-repair-malaysia.webp",
            name: "Basic Service – Wall Mounted",
            features: [
                { name: "1 Unit – RM 80", included: true },
                { name: "2 Units – RM 70 each", included: true },
                { name: "3 Units & above – RM 60 each", included: true },
            ],
        },
        {
            img: "http://heroairconn.com/wp-content/uploads/2024/09/aircon-services-repair-malaysia.webp",
            name: "Chemical Cleaning – Wall Mounted",
            features: [
                { name: "1 Unit – RM 150", included: true },
                { name: "2 Units – RM 130 each", included: true },
                { name: "3 Units  – RM 120 each", included: true },
            ],
        },
        {
            img: 'https://raisingwebsolutions.co.in/fast-aircon-landing/images/cassetter.webp',
            name: "Basic Cleaning – Ceiling Cassette",
            recommended: true,
            features: [
                { name: "1 Unit - RM 100/unit", included: true },
                { name: "2 Units - RM 90/unit", included: true },
                { name: "3 Units & above - RM 80/unit", included: true },
            ],
        },

        {
            img: 'https://raisingwebsolutions.co.in/fast-aircon-landing/images/cassetter.webp',
            name: "Chemical Cleaning – Ceiling Cassette",
            features: [
                { name: "1 Unit – RM 300", included: true },
                { name: "2 Units – RM 280 each", included: true },
                { name: "3 Units & above – RM 260 each", included: true },
            ],
        },
    ];
    return (
        <section className='  py-6'>
            <div className="text-center mb-6 md:mb-10 italic">
                <h4 className="text-xl md:text-3xl font-bold">Choose Your Comfort Plan</h4>
                <p className=" text-sm max-w-xl mx-auto mt-3">
                    Transparent pricing for all types of AC units and services. Choose the one that suits your needs best.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {plans.map((plan, idx) => (
                    <div
                        key={idx}
                        className="relative flex flex-col justify-between bg-white p-8 rounded border border-gray-300 shadow-lg hover:shadow-2xl transition duration-300 group overflow-hidden w-full"
                    >
                        <div>
                            <img src={plan?.img} alt="" />
                        </div>
                        <div>
                            <div className="">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-left">{plan.name}</h3>
                                <ul className="space-y-3 text-lg text-gray-700">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            ✅ {feature.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-6">
                                <a
                                    href="tel:+60163824522"
                                    className="w-full bg-blue-100 text-blue-700 py-2 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:bg-blue-200 transition"
                                >
                                    <FaPhoneAlt /> Call Now
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}
