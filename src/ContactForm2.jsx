import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactForm2() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const nav = useNavigate();

  // Format Malaysian number: +60 12-345 6789
  const formatMalaysiaNumber = (value) => {
    // Keep only digits and +
    value = value.replace(/[^\d+]/g, "");

    // Ensure +60 prefix
    if (!value.startsWith("+60")) {
      value = "+60" + value.replace(/^\+?60?/, "");
    }

    // Remove +60 for manipulation
    let num = value.replace("+60", "").replace(/\s|-/g, "");

    // Limit to 9 digits after +60
    if (num.length > 9) num = num.slice(0, 9);

    // Format into +60 12-345 6789
    if (num.length > 2) num = num.slice(0, 2) + "-" + num.slice(2);
    if (num.length > 6) num = num.slice(0, 6) + " " + num.slice(6);

    return "+60 " + num.trim();
  };

  const handleChangePhone = (e) => {
    setPhone(formatMalaysiaNumber(e.target.value));
  };

  const handleSubmit = async () => {
    setError("");

    // Basic field validation
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    // Extract digits without formatting
    const rawNumber = phone.replace(/[^\d]/g, "");
    const withoutCountryCode = rawNumber.startsWith("60")
      ? rawNumber.slice(2)
      : rawNumber;

    if (withoutCountryCode.length < 9) {
      setError("Phone number must be at least 9 digits after +60.");
      return;
    }

    // Regex validation
    const malaysiaPattern = /^\+60\s\d{2}-\d{3}\s\d{4,5}$/;
    if (!malaysiaPattern.test(phone)) {
      setError("Enter a valid Malaysian number: +60 12-345 6789");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("message", message);

      const response = await fetch("/kuala-lumpur/contact-handler.php", {
        method: "POST",

        body: formData
      });
      // const result = await response.json();
      // console.log(result)
      // if (result.success) {
      //   setLoading(false);
      //   nav("/kuala-lumpur/thank-you");
      // } else {
      //   setError("Error sending message. Please try again.");
      //   setLoading(false);
      // }
    } catch (error) {
      alert("Error sending message.");
      setLoading(false);
    }
  };

  return (
    <form
      action={`https://www.accoolncool.com/kuala-lumpur/contact-handler.php`}
      method="post"
      className="w-full max-w-md text-black">
      <h1 className="font-thin italicss italicssst text-white">Message Us</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 p-2 mb-3 rounded">
          {error}
        </div>
      )}

      {/* Name */}
      <input
        type="text"
        placeholder="Enter Your Name"
        name="name"
        className="px-3.5 py-2 border mb-3 italicss border-gray-300 mt-2.5 shadow-inner outline-0 bg-white w-full"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Phone */}
      <div className="relative mb-3">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg"
            alt="Malaysia Flag"
            className="w-6 h-4 object-cover"
          />
        </span>
        <input
          type="tel"
          name="phone"
          placeholder="+60 12-345 6789"
          className="pl-12 pr-3 py-2 border italicss border-gray-300 shadow-inner outline-0 bg-white w-full"
          value={phone}
          onChange={handleChangePhone}
        />
      </div>

      {/* Message */}
      <textarea
        placeholder="Enter Your Message"
        name="message"
        className="px-3.5 py-2 border mb-3 italicss border-gray-300 shadow-inner outline-0 bg-white w-full"
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      {/* Button */}
      <div className="w-full flex justify-start items-center">
        <button
          type="submit"
          // onClick={handleSubmit}
          disabled={loading}
          className={`relative overflow-hidden group px-6 py-2 mb-3 border border-gray-300 text-white italicssst italicss ${loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
        >
          <span className="relative group-hover:text-black z-10">
            {loading ? "Sending..." : "Send"}
          </span>
          <span className="absolute inset-0 bg-yellow-400 scale-0 group-hover:scale-100 origin-bottom-left transition-transform duration-500 ease-in-out z-0"></span>
        </button>
      </div>
    </form>
  );
}
