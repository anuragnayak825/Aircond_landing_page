import React from "react";

export default function ServicesSection() {
  const plans = [
    {
      name: "Basic Service – Wall Mounted",
      features: [
        { name: "1 Unit – RM 80", included: true },
        { name: "2 Units – RM 70 each", included: false },
        { name: "3 Units & above – RM 60 each", included: false },
      ],
    },
    {
      name: "Basic Cleaning – Ceiling Cassette",
  
      recommended: true,
      features: [
        { name: "1 Unit - RM 100/unit", included: true },
        { name: "2 Units - RM 90/unit", included: true },
        { name: "3 Units & above - RM 80/unit", included: true },
      ],
    },
  ];

  return (
    <section className="bg-[#f8f9fb] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 items-start">
        {/* Left section */}
        <div>
          <h4 className="text-sm font-semibold text-blue-700 mb-1">Our Plans</h4>
          <h2 className="text-3xl font-bold leading-snug text-gray-800 mb-4">
            Find The Plan That's Right For You
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Mollit voluptate fugiat occaecat excepteur magna sunt commodo anim
            incididunt consequat consequat commodo.
          </p>
        </div>

        {/* Pricing Cards */}
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`bg-white w-full max-w- p-6 rounded-lg shadow-sm border border-gray-200 relative space-y-4`}
          >
            <h3 className="text-lg font-semibold text-gray-800 mt-4">
              {plan.name}
            </h3>
            <ul className="space-y-2 text-sm mt-2">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={`flex items-center text-blue-600`}
                >
                  &nbsp;{feature.name}
                </li>
              ))}
            </ul>
            <button className="w-full bg-gray-800 text-white py-2 rounded font-semibold text-sm hover:bg-black transition">
              💳 Pay With Stripe
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
