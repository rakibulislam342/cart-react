import React from 'react';
import { BitcoinComponent } from './../Bitcoin/BitcoinComponent';

const CryptoPrice = () => {
    return (
        <div>
            <div>
            <h2>CRYPTO.COM PRICE</h2>
            <h2>Buy Bitcoin, Ethereum, and <br /> 350+ cryptocurrencies</h2>
            <button>Check Crypto Price</button>
            </div>


            <div>
               <BitcoinComponent></BitcoinComponent>
            </div>
            
        </div>
    );
};

export default CryptoPrice;