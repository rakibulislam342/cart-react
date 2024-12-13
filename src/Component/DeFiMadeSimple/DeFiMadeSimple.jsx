import React from 'react';
import DeFiMadeImg from "./DeFiMadeImg/defi.webp";
import AOS from 'aos';
import 'aos/dist/aos.css';

const DeFiMadeSimple = () => {
    React.useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in ms
            offset: 200, // Offset from the original trigger point
            easing: 'ease-in-out', // Easing for animations
            once: false, // Whether animation should happen only once - false means it will trigger every time you scroll
        });
    }, []);

    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-8 rounded-lg shadow-lg">
            {/* Left Section */}
            <div 
                className="md:w-1/2 text-center md:text-left space-y-5 md:pl-20" // Increased padding to md:pl-20
                data-aos="fade-up" // Animate from bottom to top
            >
                <h4 className="text-5xl font-bold text-blue-600">CRYPTO.COM ONCHAIN</h4>
                <h2 className="text-4xl font-semibold text-gray-700">DeFi Made Simple</h2>
                <p className="text-lg text-gray-500">Crypto.com Onchain. Your Keys, Your Crypto.</p>
                <p className="text-lg text-gray-500">Earn. No lock-up period and stable returns.</p>
                <p className="text-lg text-gray-500">Swap. Swap DeFi coins and earn Triple Yield.</p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                    <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg transition-all duration-300">
                        Get Crypto.com Onchain
                    </button>
                    <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg transition-all duration-300">
                        Explore Features
                    </button>
                </div>
            </div>

            {/* Right Section */}
            <div 
                className="md:w-1/2 flex justify-center mt-8 md:mt-0" 
                data-aos="fade-up" // Animate from bottom to top
            >
                <img
                    src={DeFiMadeImg}
                    alt="DeFi Illustration"
                    className="w-full max-w-md rounded-lg"
                />
            </div>
        </div>
    );
};

export default DeFiMadeSimple;

