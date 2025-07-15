import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [focusedField, setFocusedField] = useState("");

  const fields = [
    { name: "Name", type: "text" },
    { name: "Phone no", type: "tel" },
    { name: "Address", type: "text" },
    { name: "Message", type: "text" },
  ];

  return (
    <motion.form
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-lg backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 text-white"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center">Get Help Instantly!</h2>

      {fields.map(({ name, type }) => (
        <div className="relative w-full" key={name}>
          <input
            type={type}
            placeholder=" "
            onFocus={() => setFocusedField(name)}
            onBlur={() => setFocusedField("")}
            className="peer w-full bg-white text-black placeholder-transparent border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-700 transition duration-300"
          />
          <label
            className={`
              absolute left-4 top-3 text-gray-600 font-medium transition-all duration-300
              peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-700
              ${focusedField === name ? "text-blue-700" : ""}
            `}
          >
            {name}
          </label>
        </div>
      ))}

      <div className="flex justify-start">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotateX: 10 }}
          className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-md shadow-md transition"
        >
          Submit
        </motion.button>
      </div>
    </motion.form>
  );
}
