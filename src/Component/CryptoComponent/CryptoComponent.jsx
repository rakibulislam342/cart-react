import React, { useState } from "react";

const CryptoComponent = () => {
  const [cryptoData, setCryptoData] = useState([
    {
      name: "Bitcoin",
      short: "BTC",
      price: 97432.05,
      change: -1.38,
      marketCap: 1928510223190.19,
      graphData: "0,25 10,18 20,22 30,19 40,21 50,16 60,18 70,17 80,19 90,18 100,22",
      color: "#e64b60",
    },
    {
      name: "Ethereum",
      short: "ETH",
      price: 3689.3,
      change: -0.82,
      marketCap: 470000000000,
      graphData: "0,25 10,18 20,22 30,19 40,21 50,16 60,18 70,17 80,19 90,18 100,22",
      color: "#3c3c3d",
    },
    {
      name: "Cardano",
      short: "ADA",
      price: 0.984753,
      change: 0.5,
      marketCap: 10000000000,
      graphData: "0,10 10,8 20,7 30,6 40,5 50,4 60,3 70,2 80,1 90,1 100,0",
      color: "#c2a700",
    },
    {
      name: "Dogecoin",
      short: "DOGE",
      price: 0.39621,
      change: -0.45,
      marketCap: 8500000000,
      graphData: "0,15 10,12 20,14 30,13 40,12 50,11 60,10 70,9 80,8 90,7 100,6",
      color: "#a9a9a9",
    },
    {
      name: "Polkadot",
      short: "DOT",
      price: 8.34,
      change: 1.2,
      marketCap: 25000000000,
      graphData: "0,20 10,18 20,17 30,16 40,15 50,14 60,13 70,12 80,11 90,10 100,9",
      color: "#0076ff",
    },
  ]);

  const formattedPrice = (price) => new Intl.NumberFormat().format(price);
  const formattedMarketCap = (marketCap) =>
    new Intl.NumberFormat().format(marketCap);

  return (
    <div
      style={{
        background:
          "radial-gradient(32.31% 27.62% at 50% 46.74%, #010118 0%, rgba(35, 70, 157, 0.1) 64.15%, rgba(35, 70, 157, 0.05) 83.94%, rgba(35, 70, 157, 0) 100%), linear-gradient(180deg, #000a1f 0%, #010118 40.88%, #010118 76.87%)",
      }}
      className="pt-[8rem] overflow-x-hidden"
    >
      <div className="flex justify-center items-center px-4">
        <div className="text-center">
          <h2 className="text-xl sm:text-3xl md:text-5xl text-blue-600">
            CRYPTO.COM PRICE
          </h2>
          <h2 className="text-lg sm:text-4xl md:text-6xl text-white mt-[1rem] px-4">
            Buy Bitcoin, Ethereum, and <br /> 350+ cryptocurrencies
          </h2>
          <button className="px-4 py-1 text-sm sm:px-6 sm:py-2 text-white rounded-full border mt-[2rem] hover:bg-blue-600 transition">
            Check Crypto Prices
          </button>
        </div>
      </div>

      <div className="max-w-[60rem] mx-auto mt-[4rem] pb-[8rem] px-4">
        {cryptoData.map((crypto, index) => (
          <div
            key={index}
            className={`flex items-center justify-between flex-wrap gap-4 p-4 mb-4 shadow-lg ${crypto.name === "Bitcoin" || crypto.name === "Ethereum" || crypto.name === "Cardano" || crypto.name === "Dogecoin" || crypto.name === "Polkadot" ? "bg-transparent" : "bg-[#1a1a2e]"} border-b border-gray-600 border-opacity-30 rounded-t-lg`}
          >
            <div className="flex items-center space-x-4">
              <div className="font-semibold text-white text-sm sm:text-lg md:text-xl">
                {crypto.name}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">{crypto.short}</div>
              <div className="text-white text-sm sm:text-lg">
                ${formattedPrice(crypto.price)}
              </div>
              <div
                className={`${crypto.change > 0 ? "text-green-500" : "text-red-500"} text-xs sm:text-sm`}
              >
                {crypto.change}%
              </div>
              <div className="text-white text-xs sm:text-sm">
                ${formattedMarketCap(crypto.marketCap)}
              </div>
            </div>

            <div className="hidden sm:block flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="80" height="20">
                <polyline
                  points={crypto.graphData}
                  stroke={crypto.color}
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  fill="none"
                ></polyline>
              </svg>
            </div>

            <div>
              <button className="px-2 py-1 bg-blue-500 text-white text-xs sm:text-sm rounded-lg hover:bg-blue-700 transition">
                Trade
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoComponent;
