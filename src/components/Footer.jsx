import React from "react";
import sponsor01 from '../assets/AI Fest 4.0.png'
import sponsor02 from '../assets/Copy-of-AIC-logo.png'
import sponsor03 from '../assets/ncai logo-01.png'
import sponsor04 from '../assets/SC logo (1)-04.png'

const Footer = () => {
  return (
    <div className="bg-red-700 px-6 md:px-20 py-10">
      <div className="text-center">
        <h3 className="font-bold text-white text-base mb-12">POWERED BY</h3>
        <div className="flex flex-wrap justify-center">
          <img src={sponsor01} alt="" className="w-28 h-16 mx-2 mb-8" />
          <img src={sponsor02} alt="" className="w-28 h-16 mx-2 mb-8" />
          <img src={sponsor03} alt="" className="w-28 h-16 mx-2 mb-8" />
          <img src={sponsor04} alt="" className="w-28 h-16 mx-2 mb-8" />
        </div>
        <div className="text-white text-sm mt-6">
          &copy; {new Date().getFullYear()} MIT Driverless | 265 Massachusetts
          Avenue, Cambridge, MA 02139, USA
        </div>
      </div>
    </div>
  );
};

export default Footer;
 