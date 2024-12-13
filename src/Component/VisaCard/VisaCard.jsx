import React from 'react';

const VisaCard = () => {
  return (
    <div className="relative h-screen w-full">
      <video 
        src="https://mkt-site-asset.crypto.com/assets/home-page/card.mp4" 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex items-center justify-center w-full h-full text-center text-white p-4">
        <div className="max-w-4xl px-6">
          <h1 className="text-5xl font-bold mb-4">CRYPTO.COM VISA CARD</h1>
          <p className="text-xl mb-6">
            The only card you need, Enjoy up to 5% back on all spending with your sleek, pure metal card.
            No annual fees. Add funds via fiat or converting crypto.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
