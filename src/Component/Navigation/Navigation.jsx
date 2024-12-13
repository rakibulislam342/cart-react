import React, { useState } from 'react';
import NavigationImg from "./NavigationImg/NavigationImg.svg"
import { FaGlobe } from 'react-icons/fa';

const Navigation = () => {
  const languages = ['English', 'বাংলা', 'Español', 'Français', 'Deutsch'];

  const menuItems = [
    {
      label: 'Level Up',
      link: '#level-up',
    },
    {
      label: 'Individuals',
      link: '#individuals',
    },
    {
      label: 'Businesses',
      link: '#businesses',
    },
    {
      label: 'Developers',
      link: '#developers',
    },
    {
      label: 'Discover',
      link: '#discover',
    },
    {
      label: 'Company',
      link: '#company',
    },
  ];

  const [isLanguageOpen, setIsLanguageOpen] = useState(false); // State to control language dropdown visibility
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // State for selected language

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setIsLanguageOpen(false); // Close dropdown after selection
  };

  return (
    <div className="text-white" style={{
      background: `radial-gradient(32.31% 27.62% at 50% 46.74%, #010118 0%, rgba(35, 70, 157, 0.1) 64.15%, rgba(35, 70, 157, 0.05) 83.94%, rgba(35, 70, 157, 0) 100%), linear-gradient(180deg, #000a1f 0%, #010118 40.88%, #010118 76.87%)`
    }}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img
            src={NavigationImg}
            alt="Logo"
            className="w-32" // Adjusted size for logo (you can customize this as needed)
          />
        </div>

        {/* Center: Navigation Items */}
        <div className="hidden  md:flex space-x-6"> {/* This will hide the menu on small screens (sm) and show it from medium (md) onwards */}
          {menuItems.map((item) => (
            <div key={item.label}>
              <a href={item.link} className="transition hover:text-gray-300">
                {item.label}
              </a>
            </div>
          ))}
        </div>

        {/* Right: Download App & Language Selector */}
        <div className="flex items-center space-x-6">
          {/* Download Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Download App
          </button>

          {/* Language Selector */}
          <div className="relative">
            <button
              className="bg-gray-500 text-white py-2 px-4 rounded focus:outline-none flex items-center"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)} // Toggle dropdown visibility
            >
              <FaGlobe className="mr-2" /> {/* Globe Icon */}
              {selectedLanguage}
            </button>

            {/* Language Dropdown */}
            {isLanguageOpen && (
              <div className="absolute bg-gray-800 text-white rounded shadow-lg mt-2 w-48">
                {languages.map((lang) => (
                  <div
                    key={lang}
                    className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                    onClick={() => handleLanguageSelect(lang)}
                  >
                    {lang}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
