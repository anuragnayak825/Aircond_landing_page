import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ContactForm2() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const nav = useNavigate();

    // Malaysian number formatting
    const formatMalaysiaNumber = (value) => {
        value = value.replace(/[^\d+]/g, '');
        if (!value.startsWith('+60')) {
            value = '+60' + value.replace(/^\+?60?/, '');
        }
        let num = value.replace('+60', '');
        if (num.length > 2) {
            num = num.slice(0, 2) + '-' + num.slice(2);
        }
        if (num.length > 6) {
            num = num.slice(0, 6) + ' ' + num.slice(6);
        }
        return '+60 ' + num.trim();
    };

    const handleChange = (e) => {
        setPhone(formatMalaysiaNumber(e.target.value));
    };

    const handleSubmit = async () => {
        // Validation
        if (!name.trim() || !message.trim()) {
            alert("Please fill in all fields");
            return;
        }

        const malaysiaPattern = /^\+60\s\d{2}-\d{3}\s\d{4,5}$/;
        if (!malaysiaPattern.test(phone)) {
            alert("Please enter a valid Malaysian phone number in the format +60 12-345 6789");
            return;
        }

        setLoading(true);

        try {
            const queryString = new URLSearchParams({
                Name: name,
                "Phone no": phone,
                Message: message,
            }).toString();

            await fetch(
                `https://script.google.com/macros/s/AKfycbx_wrUZGEGspgPNSA22uCK_Cu70gejhyKQYF2nZPgWn2TbHShgIVYQjBrwO3oRA3wmR/exec?${queryString}`,
                {
                    method: "GET",
                    mode: "no-cors",
                }
            );

            setLoading(false);
            nav("/thank-you");
        } catch (error) {
            alert("There was an error sending your message. Please try again.");
            setLoading(false);
        }
    };

    return (
        <div className='w-full max-w-md text-black'>
            <h1 className='font-thin italic tracking-widest text-white'>Message Us</h1>

            {/* Name Input */}
            <input
                type="text"
                placeholder='Enter Your Name'
                className='px-3.5 py-2 border mb-3 italic border-gray-300 mt-2.5 shadow-inner outline-0 bg-white w-full'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            {/* Phone Input with Malaysian Flag */}
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
                    placeholder='+60 12-345 6789'
                    className='pl-12 pr-3 py-2 border italic border-gray-300 shadow-inner outline-0 bg-white w-full'
                    value={phone}
                    onChange={handleChange}
                />
            </div>

            {/* Message Textarea */}
            <textarea
                placeholder='Enter Your Message'
                className='px-3.5 py-2 border mb-3 italic border-gray-300 shadow-inner outline-0 bg-white w-full'
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            {/* Submit Button */}
            <div className='w-full flex justify-start items-center'>
                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="relative overflow-hidden group px-6 py-2 mb-3 border border-gray-300 text-white tracking-widest italic"
                >
                    <span className="relative group-hover:text-black z-10">
                        {loading ? "Sending..." : "Send"}
                    </span>
                    <span className="absolute inset-0 bg-yellow-400 scale-0 group-hover:scale-100 origin-bottom-left transition-transform duration-500 ease-in-out z-0"></span>
                </button>
            </div>
        </div>
    );
}
