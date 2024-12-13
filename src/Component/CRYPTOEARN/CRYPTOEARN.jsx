import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles

const CRYPTOEARN = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });  // Initialize AOS with duration of 1000ms for smooth animation
    }, []);

    return (
        <div className="flex justify-center items-center py-[4rem]" 
        style={{
            background: `radial-gradient(32.31% 27.62% at 50% 46.74%, #1353f2 0%, rgba(35, 70, 157, 0.21) 64.15%, rgba(35, 70, 157, 0.07) 83.94%, rgba(35, 70, 157, 0) 100%), linear-gradient(180deg, #000a1f 0%, #00143c 40.88%, #010118 76.87%)`,
            backgroundPosition: 'left left', 
            boxShadow: '0 0 15px rgba(19, 83, 242, 0.7)'
        }} >
            <div className="relative flex flex-col-reverse sm:flex-row justify-between items-center w-full max-w-6xl px-4 sm:px-6 md:px-8">
                {/* Phone Image Container */}
                <div className="relative flex justify-center items-center w-full sm:w-1/2" data-aos="fade-up">
                    <img
                        src="https://mkt-site-asset.crypto.com/assets/home-page/en/earn-phone.webp"
                        alt="Phone"
                        className="w-[16rem] sm:w-[20rem] md:w-[20rem] lg:w-[22rem]"
                    />

                    {/* Notification Images */}
                    <img
                        src="https://mkt-site-asset.crypto.com/assets/home-page/earn-notif-1.webp"
                        alt="Notification 1"
                        className="absolute top-10 left-[10rem] sm:left-[12rem] w-[7rem] sm:w-[10rem] md:w-[12rem] lg:w-[14rem] transition-transform transform hover:scale-110"
                        data-aos="fade-up" // Animation for the first notification image
                    />
                    <img
                        src="https://mkt-site-asset.crypto.com/assets/home-page/earn-notif-2.webp"
                        alt="Notification 2"
                        className="absolute top-28 left-[12rem] sm:left-[14rem] mt-[1.5rem] w-[7rem] sm:w-[10rem] md:w-[12rem] lg:w-[14rem] transition-transform transform hover:scale-110"
                        data-aos="fade-up" // Animation for the second notification image
                    />
                </div>

                {/* Text Section */}
                <div className="text-center sm:text-left w-full sm:w-1/2 max-w-lg mt-8" data-aos="fade-up">
                    <h2 className="text-blue-400 text-2xl font-semibold">CRYPTO EARN</h2>
                    <h3 className="text-3xl sm:text-4xl text-white mt-2">Get the most out of your assets, safely</h3>
                    <p className="text-lg mt-4 text-white">Choose from 21+ cryptocurrencies including Bitcoin and stablecoins.</p>
                    <button className="border text-white font-semibold py-2 px-6 rounded-lg border-gray-300 shadow-lg mt-6" data-aos="fade-up">
                        Click Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CRYPTOEARN;
