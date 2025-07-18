import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [focusedField, setFocusedField] = useState("");
  const [formData, setFormData] = useState({
    Name: "",
    "Phone no": "",
    Address: "",
    Message: "",
  });
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const fields = [
    { name: "Name", type: "text" },
    { name: "Phone no", type: "tel" },
    { name: "Address", type: "text" },
    { name: "Message", type: "text" },
  ];

  // Format phone number to 16-382 4522
  const formatPhone = (value) => {
    const numbers = value.replace(/\D/g, "").slice(0, 9);
    const match = numbers.match(/^(\d{2})(\d{3})(\d{4})$/);
    return match ? `${match[1]}-${match[2]} ${match[3]}` : numbers;
  };

  // Handle input change
  const handleChange = (name, value) => {
    if (name === "Phone no") {
      value = formatPhone(value);
    }
    setFormData({ ...formData, [name]: value });
  };

  // Validate phone format
  const validatePhone = (phone) => {
    const regex = /^\d{2}-\d{3} \d{4}$/;
    return regex.test(phone);
  };

  // Floating label logic
  const shouldLabelFloat = (name) => {
    return focusedField === name || formData[name].trim() !== "";
  };

  // Handle submit
  const onSubmit = (e) => {
    e.preventDefault();

    if (!validatePhone(formData["Phone no"])) {
      alert("Phone number must be in the format 16-382 4522");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "your_service_id",     // 🔁 Replace with your EmailJS service ID
        "your_template_id",    // 🔁 Replace with your EmailJS template ID
        formData,
        "your_user_id"         // 🔁 Replace with your EmailJS public key
      )
      .then(() => {
        setLoading(false);
        nav("/thank-you");
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("There was an error sending your message. Please try again.");
        setLoading(false);
        nav("/thank-you");
      });
  };

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 text-white overflow-hidden"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center">Get Help Instantly!</h2>

      {fields.map(({ name, type }) => (
        <div className="relative w-full" key={name}>
          <input
            type={type}
            placeholder=" "
            value={formData[name]}
            onFocus={() => setFocusedField(name)}
            onBlur={() => setFocusedField("")}
            onChange={(e) => handleChange(name, e.target.value)}
            className="peer w-full bg-white text-black placeholder-transparent border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-700 transition duration-300"
          />
          <label
            className={`absolute left-4 text-gray-600 font-medium transition-all duration-300
              ${shouldLabelFloat(name) ? "top-0 text-sm text-blue-700" : "top-3.5 text-base text-gray-500"}
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-700
            `}
          >
            {name}
          </label>
        </div>
      ))}

      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95, rotateX: 10 }}
        className={`w-full px-6 py-3 ${
          loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800"
        } text-white font-semibold rounded-md shadow-md transition`}
        disabled={loading}
      >
        {loading ? "Sending..." : "Submit"}
      </motion.button>
    </motion.form>
  );
}
