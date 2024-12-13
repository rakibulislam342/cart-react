import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OURVISION = () => {
    useEffect(() => {
        // Initialize AOS once when the component mounts
        AOS.init({
            duration: 1000, // Set duration of the animation
            easing: 'ease-in-out', // Easing function for smooth animation
            once: true, // Trigger animations only once when they come into view
            mirror: false, // Do not trigger animations when scrolling back up
        });

        // Refresh AOS if needed, such as after navigation or dynamic content change
        return () => {
            AOS.refresh();
        };
    }, []);

    return (
        <div
            style={{
                background:
                    'radial-gradient(32.31% 27.62% at 50% 46.74%, #010118 0%, rgba(35, 70, 157, 0.1) 64.15%, rgba(35, 70, 157, 0.05) 83.94%, rgba(35, 70, 157, 0) 100%), linear-gradient(180deg, #000a1f 0%, #010118 40.88%, #010118 76.87%)',
                padding: '4rem 2rem',
                position: 'relative',
            }}
        >
            <div className="flex flex-col items-center justify-center space-y-12">
                {/* Section Title with animation */}
                <div className="text-center" data-aos="fade-up" data-aos-offset="200">
                    <h3 className="text-xl md:text-2xl font-semibold text-blue-500 tracking-wide">
                        OUR VISION
                    </h3>
                    <h2 className="text-white text-6xl md:text-5xl font-semibold leading-snug">
                        Cryptocurrency in <br />
                        <span className="inline-block mt-2">Every Wallet™</span>
                    </h2>
                </div>

                {/* Vision Image with animation */}
                <div className="w-full flex justify-center" data-aos="zoom-in" data-aos-offset="200">
                    <img
                        className="w-64 md:w-[30rem] rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
                        src="https://mkt-site-asset.crypto.com/assets/crypto-com-logo.webp"
                        alt="Crypto Logo"
                    />
                </div>

                {/* Vision Stats with animation */}
                <div
                    className="flex flex-col md:flex-row items-center justify-center text-center space-y-8 md:space-y-0 md:space-x-20"
                    data-aos="fade-up" data-aos-offset="200"
                >
                    <div className="flex flex-col" data-aos="fade-right">
                        <h2 className="text-xl md:text-2xl font-bold text-blue-500">Founded in</h2>
                        <h3 className="text-lg md:text-xl font-semibold text-blue-400">2016</h3>
                    </div>

                    <div className="flex flex-col" data-aos="fade-left">
                        <h2 className="text-xl md:text-2xl font-bold text-blue-500">Users</h2>
                        <h3 className="text-lg md:text-xl font-semibold text-blue-400">100M</h3>
                    </div>
                </div>

                {/* About Us Button with animation */}
                <div data-aos="fade-up" data-aos-offset="200">
                    <button className="px-8 py-3 text-white text-lg font-medium rounded-full shadow-lg border border-blue-500 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transform transition duration-300 hover:scale-105">
                        About Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OURVISION;
