import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import Footer from "./Footer";
import Header from "./Header";

const ThankYou = () => {
    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Agar tum react-router use kar rahe ho toh history ya navigate use kar sakte ho
    const handleGoBack = () => {
        window.history.back(); // ya koi custom route redirect karna ho toh use karo
        // example: navigate('/') if using react-router-dom v6
    };

    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-purple-200 overflow-hidden relative px-4">
                <Confetti
                    width={windowDimensions.width}
                    height={windowDimensions.height}
                    numberOfPieces={400}
                    recycle={false}
                />

                {/* Animated Checkmark */}
                <svg
                    className="w-24 h-24 mb-6 stroke-purple-700"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        className="stroke-current"
                        cx="26"
                        cy="26"
                        r="25"
                        strokeWidth="2"
                        stroke="#8b5cf6"
                        fill="none"
                    />
                    <path
                        className="checkmark"
                        fill="none"
                        stroke="#8b5cf6"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 27l7 7 16-16"
                        style={{
                            strokeDasharray: 48,
                            strokeDashoffset: 48,
                            animation: "drawCheck 0.5s forwards 0.5s",
                        }}
                    />
                </svg>

                <h1 className="text-6xl font-bold text-purple-700 animate-bounce mb-2">
                    Thank You!
                </h1>
                <p className="mt-2 text-xl text-gray-700 mb-6">
                    Your submission has been received 🎉
                </p>

                <button
                    onClick={handleGoBack}
                    className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-md shadow-md transition duration-300"
                >
                    Go Back
                </button>

                <div className="absolute bottom-10 text-sm text-gray-500">
                    © 2025 | Made with ❤️
                </div>

                {/* Inline CSS animation for checkmark */}
                <style>{`
        @keyframes drawCheck {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
            </div>
            <Footer />
        </>
    );
};

export default ThankYou;
