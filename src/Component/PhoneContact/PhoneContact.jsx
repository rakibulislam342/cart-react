import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js'; // Import Typed.js
import PhoneContactImg from './PhoneContactImg/phone-content.webp';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import ImageCarousel from './../ImageCarousel/ImageCarousel';

const PhoneContact = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        // Initialize AOS animations
        AOS.init({
            duration: 1000, // Duration of animation
            once: true, // Animation happens only once
        });
        AOS.refresh();

        // Initialize Typed.js for animated text (excluding "America's")
        const typed = new Typed(typedRef.current, {
            strings: [
                "Premier Crypto Trading Platform",
                "Most Trusted Crypto Platform",
                "Your Gateway to Secure Trading",
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            startDelay: 500,
            loop: true,
        });

        // Cleanup Typed.js instance on component unmount
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div 
            className="text-center pt-[6rem] px-4 sm:px-8 md:px-16 pb-8" 
            style={{
                background: `radial-gradient(32.31% 27.62% at 50% 46.74%, #1353f2 0%, rgba(35, 70, 157, 0.21) 64.15%, rgba(35, 70, 157, 0.07) 83.94%, rgba(35, 70, 157, 0) 100%), linear-gradient(180deg, #000a1f 0%, #00143c 40.88%, #010118 76.87%)`
            }} 
        >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                America's <br />
                <span ref={typedRef}></span>
            </h2>

            <div className="mt-[4rem]  bg-[radial-gradient(32.31%_27.62%_at_50%_46.74%,_#1353f2_0%,_rgba(35,_70,_157,_0.21)_64.15%,_rgba(35,_70,_157,_0.07)_83.94%,_rgba(35,_70,_157,_0)_100%),_linear-gradient(180deg,_#000a1f_0%,_#00143c_40.88%,_#010118_76.87%)] p-2 rounded-3xl flex justify-center items-center md:w-[37rem] md:h-[74rem] w-[22rem] sm:w-[30rem] lg:w-[500px] h-[38rem] sm:h-[57rem] lg:h-[940px] shadow-lg mx-auto overflow-hidden">
                <img 
                    src={PhoneContactImg} 
                    alt="Phone Content" 
                    className="w-full h-full object-cover rounded-2xl"  
                    style={{
                        background: `radial-gradient(32.31% 27.62% at 50% 46.74%, #1353f2 0%, rgba(35, 70, 157, 0.21) 64.15%, rgba(35, 70, 157, 0.07) 83.94%, rgba(35, 70, 157, 0) 100%), linear-gradient(180deg, #000a1f 0%, #00143c 40.88%, #010118 76.87%)`
                    }}
                />
            </div>

            <div className="text-white mt-[4rem] sm:mt-[5rem] md:mt-[7rem]">
                <h3 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mt-[2rem]" 
                    data-aos="fade-up"
                >
                    Buy Bitcoin, Ethereum, and 350+ <br /> cryptocurrencies with USD
                </h3>
                <p className="mt-4 font-semibold text-lg sm:text-xl" data-aos="fade-up" data-aos-delay="100">
                    <span className='text-blue-400'>Zero-fee USD deposits</span> via ACH, wire, and Apple/Google Pay*
                </p>
                <p className="mt-2 font-semibold text-lg sm:text-xl" data-aos="fade-up" data-aos-delay="200">
                    <span className='text-blue-400'>CFTC-regulated</span> crypto options and derivatives
                </p>
                <p className="mt-2 font-semibold text-lg sm:text-xl" data-aos="fade-up" data-aos-delay="300">
                    Trusted by <span className='text-blue-400'>over 100 million users</span> worldwide
                </p>
            </div>

            <div className='mt-[5rem] pb-5'>
                {/* Placeholder for any future elements */}
                <ImageCarousel />
            </div>    
        </div>
    );
};

export default PhoneContact;
