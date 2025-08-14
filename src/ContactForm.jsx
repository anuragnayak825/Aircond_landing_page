import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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

  const formatPhone = (value) => {
    const numbers = value.replace(/\D/g, "").slice(0, 9);
    const match = numbers.match(/^(\d{2})(\d{3})(\d{4})$/);
    return match ? `${match[1]}-${match[2]} ${match[3]}` : numbers;
  };

  const handleChange = (name, value) => {
    if (name === "Phone no") {
      value = formatPhone(value);
    }
    setFormData({ ...formData, [name]: value });
  };

  const validatePhone = (phone) => {
    const regex = /^\d{2}-\d{3} \d{4}$/;
    return regex.test(phone);
  };

  const shouldLabelFloat = (name) => {
    return focusedField === name || formData[name].trim() !== "";
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!validatePhone(formData["Phone no"])) {
      alert("Phone number must be in the format 16-382 4522");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://www.accoolncool.com/kuala-lumpur/contact-handler.php", {
        method: "POST",
        body: formData
      });
      const result = await response.json();

      if (result.success) {
        setLoading(false);
        nav("/kuala-lumpur/thank-you"); // Or any thank you page
      } else {
        console.log(result)
        alert("There was an error sending your message. Please try again.");
        setLoading(false);
      }


      setLoading(false);
      nav("/kuala-lumpur/");
    } catch (error) {
      console.log(error.message, error)
      alert("There was an error sending your message. Please try again.");
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-3 text-white overflow-hidden"
    >
      <h2 className="text-2xl font-bold text-center">
        <span className="text-yellow-400">KL’s</span> #1 Aircon Technician Experts – Instant Booking !
      </h2>

      {fields.map(({ name, type }) =>
        name === "Phone no" ? (
          <div className="relative w-full" key={name}>
            <label
              className={`text-white font-medium transition-all duration-300
                ${shouldLabelFloat(name) ? "text-sm text-blue-700" : "text-base text-gray-500"}`}
            >
              {name}
            </label>

            {/* Phone input with Malaysia flag */}
            <div className="flex items-center border border-gray-300 rounded-md bg-white overflow-hidden focus-within:ring-2 focus-within:ring-blue-700 mt-1">
              <div className="pl-3 pr-2">
                <img
                  src="https://flagcdn.com/w40/my.png"
                  alt="Malaysia Flag"
                  className="w-6 h-4 object-cover "
                />
              </div>
              <input
                type="tel"
                placeholder="Phone no"
                value={formData[name]}
                onFocus={() => setFocusedField(name)}
                onBlur={() => setFocusedField("")}
                onChange={(e) => handleChange(name, e.target.value)}
                className="w-full px-3 py-3 outline-none text-black placeholder:text-gray-500"
              />
            </div>
          </div>
        ) : (
          <div className="relative w-full" key={name}>
            <label
              className={`text-white font-medium transition-all duration-300
                ${shouldLabelFloat(name) ? "text-sm text-blue-700" : "text-base text-gray-500"}`}
            >
              {name}
            </label>
            <input
              type={type}
              placeholder={name}
              value={formData[name]}
              onFocus={() => setFocusedField(name)}
              onBlur={() => setFocusedField("")}
              onChange={(e) => handleChange(name, e.target.value)}
              className="peer w-full bg-white text-black placeholder:text-gray-500 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-700 transition duration-300 mt-1"
            />
          </div>
        )
      )}

      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95, rotateX: 10 }}
        className={`w-full mt-3.5 px-6 py-3 ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800"
          } text-white font-semibold rounded-md shadow-md transition`}
        disabled={loading}
      >
        {loading ? "Sending..." : "Submit"}
      </motion.button>
    </motion.form>
  );
}
