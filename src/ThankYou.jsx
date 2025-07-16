import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Header from "./Header";
import Footer from "./Footer";

const ThankYou = () => {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch("https://assets10.lottiefiles.com/packages/lf20_3rwasyjy.json")
            .then((res) => res.json())
            .then(setAnimationData)
            .catch((err) => console.error("Failed to load Lottie animation", err));
    }, []);

    return (
        <>
            <Header />
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 text-white px-4">
                {animationData ? (
                    <div className="w-full max-w-md">
                        <Lottie animationData={animationData} loop={true} />
                    </div>
                ) : (
                    <p className="text-xl font-medium">Loading animation...</p>
                )}
                <h1 className="text-4xl md:text-5xl font-bold mt-6">Thank You!</h1>
                <p className="text-lg mt-3 text-center max-w-md">
                    Your submission has been received. We appreciate your effort!
                </p>
            </div>
            <Footer />
        </>
    );
};

export default ThankYou;
