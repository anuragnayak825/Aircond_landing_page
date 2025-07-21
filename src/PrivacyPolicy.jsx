import React, { useEffect } from "react";
import Header from './Header'
import Footer from "./Footer";

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // scroll to top when component mounts
    }, []);
    return (
        <>
            <Header />

            <div className="bg-white text-gray-800 py-12 px-4 md:px-12 max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

                <p className="mb-4">
                    At <strong>AC Cool n Cool Engineering</strong>, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal data when you interact with our website, request our services, or contact our support team.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-2">Information We Collect</h2>
                <p className="mb-4">
                    We may collect personal information such as your name, contact number, email address, company name, and service preferences when you:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                    <li>Submit a service inquiry or contact form</li>
                    <li>Reach out via phone, WhatsApp, or email</li>
                    <li>Subscribe to our newsletters, offers, or alerts</li>
                </ul>
                <p className="mb-4">
                    We also gather non-personal data like IP address, browser type, and visited pages to improve website performance and user experience.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-2">How We Use Your Information</h2>
                <ul className="list-disc list-inside mb-4 space-y-1">
                    <li>Deliver and manage our air conditioning and refrigeration services</li>
                    <li>Respond to service requests or queries</li>
                    <li>Improve our website, service quality, and client experience</li>
                    <li>Send updates, service notifications, or limited-time offers (only if you opt-in)</li>
                </ul>
                <p className="mb-4">
                    We do not sell or rent your information. Data is shared only with our trusted service teams or partners strictly when necessary for service delivery and in compliance with legal obligations.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-2">Data Security</h2>
                <p className="mb-4">
                    We implement industry-standard security measures to protect your data, including encrypted storage, controlled access, and secure communication protocols.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-2">Your Rights</h2>
                <p className="mb-4">
                    You can request to view, update, or delete your personal data anytime. You may also unsubscribe from marketing emails using the opt-out link included in each message.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-2">Contact Us</h2>
                <p className="mb-1">
                    <strong>Email:</strong> <a href="mailto:info@accoolncool.com" className="text-blue-600 hover:underline">info@accoolncool.com</a>
                </p>
                <p className="mb-4">
                    <strong>Phone:</strong> <a href="tel:+60163824522" className="text-blue-600 hover:underline">+60 16-382 4522</a>
                </p>
            </div>

            <Footer />
        </>
    );
};

export default PrivacyPolicy;
