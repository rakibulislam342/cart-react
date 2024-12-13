import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration in milliseconds
            easing: 'ease-in-out', // Easing function
            offset: 50, // Offset from the trigger point
            once: false, // Ensure animations can occur multiple times without reload
        });
    }, []);

    return (
        <div
            className='text-gray-300'
            style={{
                background:
                    "radial-gradient(32.31% 27.62% at 50% 46.74%, #010118 0%, rgba(35, 70, 157, 0.1) 64.15%, rgba(35, 70, 157, 0.05) 83.94%, rgba(35, 70, 157, 0) 100%), linear-gradient(180deg, #000a1f 0%, #010118 40.88%, #010118 76.87%)",
            }}
        >
            <div className='container mx-auto px-8 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>

                    {/* Features Section */}
                    <div data-aos="fade-up">
                        <h3 className='text-2xl font-semibold mb-6 border-b-2 border-blue-500 pb-2'>Features</h3>
                        <ul className='space-y-3'>
                            {["Level Up", "Crypto Basket", "Earn", "On-chain Staking", "Pay", "Pay for Business", "UpDown Options", "Strike Options", "Derivatives", "Rewards+", "Prime", "Onchain", "NFT"].map((item, index) => (
                                <li key={index}><a href="#" className='hover:text-blue-400 transition-colors'>{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Learn Section */}
                    <div data-aos="fade-up" data-aos-delay="200">
                        <h3 className='text-2xl font-semibold mb-6 border-b-2 border-blue-500 pb-2'>Learn</h3>
                        <ul className='space-y-3'>
                            {["University", "Research & Analysis", "Glossary", "Bitcoin", "What is Ethereum?", "What is blockchain?", "How to buy Bitcoin?", "How to buy Ethereum?", "How to purchase crypto?", "What is Crypto?", "What is DeFi?"].map((item, index) => (
                                <li key={index}><a href="#" className='hover:text-blue-400 transition-colors'>{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div data-aos="fade-up" data-aos-delay="400">
                        <h3 className='text-2xl font-semibold mb-6 border-b-2 border-blue-500 pb-2'>Company</h3>
                        <ul className='space-y-3'>
                            {["About Us", "Roadmap", "Partners", "Licenses & Registration", "Proof of Reserves", "Climate", "Capital", "Affiliate", "Careers", "Listing", "Support"].map((item, index) => (
                                <li key={index}><a href="#" className='hover:text-blue-400 transition-colors'>{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* News and Prices Section */}
                    <div data-aos="fade-up" data-aos-delay="600">
                        <h3 className='text-2xl font-semibold mb-6 border-b-2 border-blue-500 pb-2'>News</h3>
                        <ul className='space-y-3 mb-6'>
                            {["What's Trending", "Market Updates", "Product News", "Company News"].map((item, index) => (
                                <li key={index}><a href="#" className='hover:text-blue-400 transition-colors'>{item}</a></li>
                            ))}
                        </ul>
                        <h3 className='text-2xl font-semibold mb-6 border-b-2 border-blue-500 pb-2'>Prices</h3>
                        <ul className='space-y-3'>
                            {["Crypto Prices", "Bitcoin Price", "Ethereum Price", "BTC/USD Converter", "Site Widgets"].map((item, index) => (
                                <li key={index}><a href="#" className='hover:text-blue-400 transition-colors'>{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* QR Section */}
                    <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="800">
                        <div className="bg-blue-950 shadow-lg rounded-lg p-6 text-center">
                            <h2 className="text-xl font-semibold text-white mb-4">Scan to Download</h2>
                            <p className="text-gray-300 mb-4">Download our app to get started with Crypto!</p>
                            <div className="flex items-center justify-center mb-4">
                                <img 
                                    src="https://crypto.com/__assets/mkt-nav-footer/images/footer/qr_code.webp" 
                                    alt="Crypto QR Code" 
                                    className="w-32 h-32 object-contain rounded-md"
                                />
                            </div>
                            <button 
                                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded shadow-lg transition-transform transform hover:scale-105">
                                Download App
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='mt-12 text-center text-sm text-gray-400'>
                    <p>&copy; 2024 Crypto Platform. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
