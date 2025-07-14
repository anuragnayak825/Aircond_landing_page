import React from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl"
      >
        {/* <div className="col-span-1 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-500">We’d love to hear from you!</p>
        </div> */}

        <form className="col-span-1 grid grid-cols-1 gap-6">
          <ThreeDInput label="Name" type="text" name="name" />
          <ThreeDInput label="Phone Number" type="tel" name="phone" />
          <ThreeDInput label="Address" type="text" name="address" />
          <ThreeDInput label="Additional Address" type="text" name="additional_address" />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-all"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

function ThreeDInput({ label, type, name }) {
  return (
    <motion.div
      className="relative w-full"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        required
        className="w-full px-4 py-3 rounded-2xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all bg-white"
        style={{
          transform: "perspective(1000px) rotateX(1deg)",
        }}
      />
    </motion.div>
  );
}
