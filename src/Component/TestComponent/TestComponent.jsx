import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TestComponent = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, offset: 200, easing: "ease-in-out" });
    }, []);

    return (
        <div
            className="py-[6rem] sm:py-[8rem] px-4 sm:px-8"
            style={{
                background:
                    "radial-gradient(32.31% 27.62% at 50% 46.74%, #010118 0%, rgba(35, 70, 157, 0.1) 64.15%, rgba(35, 70, 157, 0.05) 83.94%, rgba(35, 70, 157, 0) 100%), linear-gradient(180deg, #000a1f 0%, #010118 40.88%, #010118 76.87%)",
            }}
        >
            {/* Centered "Your crypto journey starts here" */}
            <div
                className="text-center mb-10 flex justify-center items-center"
                data-aos="fade-up"
            >
                <h2 className="text-3xl sm:text-5xl text-white font-semibold tracking-wide">
                    Your crypto journey starts here
                </h2>
            </div>

            <div
                className="flex sm:flex-row justify-center items-center md:flex-row flex-col space-x-5 md:space-x-10 mt-10"
                data-aos="fade-up"
            >
                {/* Parent Container */}
                <div className="w-full sm:w-[35rem] space-y-6">
                    {/* UpDown Options */}
                    <div
                        className="bg-[#001A6E] rounded-3xl shadow-lg w-full overflow-hidden"
                        data-aos="fade-up"
                    >
                        <div className="p-6 flex flex-col sm:flex-row justify-between items-center h-full">
                            <div className="py-[2rem] sm:py-[3rem]">
                                <h2 className="text-2xl sm:text-3xl text-blue-400 font-semibold">
                                    Buy crypto
                                </h2>
                                <h3 className="text-white text-lg sm:text-xl font-medium mt-2">
                                    Buy BTC, ETH, and other crypto easily via
                                    bank transfer.
                                </h3>
                            </div>
                            <div className="mt-4">
                                <img
                                    src="https://mkt-site-asset.crypto.com/assets/home-page/buy-bitcoin.webp"
                                    className="w-full sm:w-[14rem] mx-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
                                    alt="Buy Crypto"
                                />
                            </div>
                        </div>
                    </div>

                    {/* New Div Below Buy Crypto */}
                    <div
                        className="bg-[#001A6E] rounded-3xl shadow-lg w-full overflow-hidden"
                        data-aos="fade-up"
                    >
                        <div className="p-6 flex flex-col sm:flex-col">
                            <div>
                                <h2 className="text-2xl sm:text-3xl text-blue-400 font-semibold">
                                    Buy crypto
                                </h2>
                                <h3 className="text-white text-lg sm:text-xl font-medium mt-2">
                                    Buy BTC, ETH, and other crypto easily via
                                    bank transfer.
                                </h3>
                            </div>
                            <div className="mt-4">
                                <img
                                    src="https://mkt-site-asset.crypto.com/assets/home-page/updown-options.webp"
                                    className="w-full sm:w-[35rem] mx-auto rounded-lg shadow-lg"
                                    alt="UpDown Options"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recurring Buy */}
                <div
                    className="bg-[#001A6E] rounded-3xl shadow-lg mt-4 w-full max-w-[30rem] h-auto mx-5 sm:h-[47.3rem]"
                    data-aos="fade-up"
                >
                    <div className="p-6">
                        <div>
                            <h2 className="text-2xl sm:text-3xl text-blue-400 font-semibold">
                                Recurring Buy
                            </h2>
                            <h3 className="text-white text-lg sm:text-xl mt-2">
                                Grow your portfolio automatically with daily,
                                weekly, or monthly trades.
                            </h3>
                        </div>
                    </div>

                    <div className="mt-auto">
                        <img
                            src="https://mkt-site-asset.crypto.com/assets/home-page/recurring-buy.webp"
                            className="px-5 rounded-lg mx-auto h-auto"
                            alt="Recurring Buy"
                        />
                    </div>
                </div>
            </div>

            {/* Scan to Download the App Section */}
            <div
                className="flex justify-center items-center mt-3"
                data-aos="fade-up"
            >
                <div className="p-8 bg-gray-300 rounded-3xl shadow-2xl w-full sm:w-[66rem] flex flex-col items-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
                        <div className="flex flex-col items-center text-center space-y-6">
                            <h2 className="text-4xl sm:text-5xl text-blue-600">
                                Get Started Today
                            </h2>
                            <h3 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#005eff]">
                                Join our 100M+ Users
                            </h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-4">
                                Scan to Download the App
                            </h3>
                            <img
                                src="https://mkt-site-asset.crypto.com/assets/app-qr-code86x86.webp"
                                alt="App QR Code"
                                className="w-[5rem] sm:w-[6rem] h-[5rem] sm:h-[6rem]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestComponent;
