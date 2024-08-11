import React from "react";
import paypalIcon from './../../assets/images/Footer/paypal.svg'
import coffeIcon from './../../assets/images/Footer/coffe.svg'
import bitIcon from './../../assets/images/Footer/bitcoin.svg'


const Footer = () => {
  return (
    <div className="w-screen bg-primary text-white py-12 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12 items-center">
        <div className="w-full flex flex-col sm:flex-row gap-8 justify-center">
            <button className="self-center flex gap-2 bg-white text-primary py-2 px-4 rounded-lg items-center"><img className="w-8 h-8" src={paypalIcon} />Donate with PayPal</button>
            <button className="self-center flex gap-2 bg-white text-primary py-2 px-4 rounded-lg items-center"><img className="w-8 h-8" src={coffeIcon} />Donate a coffe</button>
            <button className="self-center flex gap-2 bg-white text-primary py-2 px-4 rounded-lg items-center"><img className="w-8 h-8" src={bitIcon} />Donate Bitcoin</button>

        </div>
        <div className="w-full border-b-2 h-1 border-gray-400"></div>
        <div className="w-full flex flex-col gap-4 sm:flex-row justify-between items-center">
          <div className="flex flex-col gap-1 items-center sm:gap-4">
            <p>Terms of service</p>
            <p>Refund Policy</p>
            <p>Privacy Policy</p>
          </div>

          <div className="flex flex-col gap-1 items-center sm:gap-4">
            <p>Licensing</p>
            <p>Cookie Policy</p>
            <p>DMCA Policy</p>
          </div>
          <div className="flex flex-col gap-1 items-center sm:gap-4">
            <h1 className="text-3xl font-bold">Traffic Expert</h1>
            <p>hotmaster@umar.com</p>
            <p>Abu Dhabi, UAE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
