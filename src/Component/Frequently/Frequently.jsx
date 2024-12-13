import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Frequently = () => {
    const [showAnswers, setShowAnswers] = useState([false, false, false, false, false, false]);

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: 'ease-in-out', // Animation easing
        });
    }, []);

    const toggleAnswer = (index) => {
        const newShowAnswers = [...showAnswers];
        newShowAnswers[index] = !newShowAnswers[index];
        setShowAnswers(newShowAnswers);
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center pb-10"
            style={{
                background:
                    "radial-gradient(32.31% 27.62% at 50% 46.74%, #010118 0%, rgba(35, 70, 157, 0.1) 64.15%, rgba(35, 70, 157, 0.05) 83.94%, rgba(35, 70, 157, 0) 100%), linear-gradient(180deg, #000a1f 0%, #010118 40.88%, #010118 76.87%)",
            }}
        >
            <div className="p-8 rounded-lg w-3/4 md:w-1/2 mt-[5rem]">
                <h2
                    className="text-3xl font-semibold text-center text-blue-600 mb-6"
                    data-aos="fade-down" // AOS effect for the title
                >
                    Frequently Asked Questions
                </h2>

                {/* FAQ Items */}
                {[
                    {
                        question: "What is crypto?",
                        answer:
                            "Cryptocurrency is a digital or virtual currency...",
                    },
                    {
                        question: "Where to buy crypto?",
                        answer:
                            "There are several ways to buy cryptocurrencies...",
                    },
                    {
                        question: "How to buy crypto?",
                        answer:
                            "To buy crypto, follow these general steps...",
                    },
                    {
                        question: "How to trade crypto?",
                        answer:
                            "To trade cryptocurrency, follow these general steps...",
                    },
                    {
                        question: "How to earn crypto?",
                        answer:
                            "There are several ways to earn cryptocurrency...",
                    },
                    {
                        question: "What is Proof of Stake?",
                        answer:
                            "Users can earn rewards on their cryptocurrency holdings...",
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="mb-6 pb-6 border-b-2 border-gray-700"
                        data-aos="fade-up" // AOS effect for each question-answer block
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-2xl font-semibold text-white">{item.question}</h3>
                            <div
                                onClick={() => toggleAnswer(index)}
                                className="text-2xl cursor-pointer text-white"
                            >
                                {showAnswers[index] ? '-' : '+'}
                            </div>
                        </div>
                        {showAnswers[index] && <p className="text-white text-lg">{item.answer}</p>}
                    </div>
                ))}

                {/* Contact Us Section */}
                <div className="mt-8" data-aos="fade-up">
                    <p className="text-white text-lg">
                        Have more questions?{' '}
                        <a
                            href="mailto:support@yourdomain.com"
                            className="text-blue-500 hover:text-blue-700"
                        >
                            Contact Us
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Frequently;
