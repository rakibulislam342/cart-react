import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ImageCarousel = () => {
  const images = [
    {
      url: "https://mkt-site-asset.crypto.com/assets/home-page/crypto-banner/paypal-backrgound-desktop.webp",
      title: "Buy Crypto using Paypal",
      subtitle: "in the Crypto.com App",
      buttonLabel: "Learn More",
    },
    {
      url: "https://mkt-site-asset.crypto.com/assets/home-page/crypto-banner/welcome-bonus-backrgound-desktop.webp",
      title: "Welcome Bonus",
      subtitle: "Earn rewards easily.",
      buttonLabel: "Discover Now",
    },
    {
      url: "https://mkt-site-asset.crypto.com/assets/home-page/rewards/reward-banner-bg-desktop-2.webp",
      title: "Rewards Program",
      subtitle: "Maximize your savings.",
      buttonLabel: "Explore",
    },
    {
      url: "https://mkt-site-asset.crypto.com/assets/home-page/strike-options/banner-bg-desktop.webp",
      title: "STRIKE OPTIONS",
      subtitle: "Trade smarter with Strike Options.",
      buttonLabel: "Get Started",
    },
    {
      url: "https://mkt-site-asset.crypto.com/assets/basket-page/hero-desktop.webp",
      title: "UpDown Options",
      subtitle: "Simple ways to grow your portfolio.",
      buttonLabel: "Try Now",
    },
    {
      url: "https://mkt-site-asset.crypto.com/assets/home-page/updown-options/banner-bg-desktop.webp",
      title: "UpDown Options",
      subtitle: "Simple ways to grow your portfolio.",
      buttonLabel: "Try Now",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: false,
    });

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    AOS.refresh();
  }, [currentImage]);

  return (
    <div className="carousel-container">
      <div className="relative max-w-7xl mx-auto overflow-hidden rounded-lg">
        {/* Display the current image */}
        <div className="relative">
          <img
            src={images[currentImage].url}
            alt={images[currentImage].title}
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            data-aos="fade-up"
          />
          {/* Overlay Content */}
          <div className="absolute top-1/4 left-4 sm:left-8 md:left-12 lg:left-16 text-white">
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
              {images[currentImage].title}
            </h2>
            <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold mt-1 mb-4">
              {images[currentImage].subtitle}
            </h3>
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 transition-colors rounded-md shadow-md text-sm sm:text-base md:text-lg">
              {images[currentImage].buttonLabel}
            </button>
          </div>
        </div>
      </div>

      {/* Dots for navigation */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full mx-1 transition-colors duration-500 ${
              currentImage === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
