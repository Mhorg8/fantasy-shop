import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { IoGift } from "react-icons/io5";
import { BsFillShieldLockFill } from "react-icons/bs";
import { SiBitcoincash } from "react-icons/si";

const Features = () => {
  return (
    <div className="container w-full flex flex-wrap items-center justify-center gap-x-14 mt-20 bg-cream-white h-full  md:h-[180px] gap-y-8 py-3">
      <div className="">
        <div className="flex items-center justify-between mb-2">
          <h3 className="features-title">Free Shipping</h3>
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-soft-coral text-white">
            <TbTruckDelivery />
          </div>
        </div>
        <p className="features-text">for Uncommon Perks members. learn more</p>
      </div>
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="features-title">Safe payment</h3>
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-soft-green text-white">
            <BsFillShieldLockFill />
          </div>
        </div>
        <p className="features-text">for Uncommon Perks members. learn more</p>
      </div>
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="features-title">Forever returns</h3>
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-warm-gold text-white">
            <IoGift />
          </div>
        </div>
        <p className="features-text">
          If you don&apos;t love it, return it... any time
        </p>
      </div>
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="features-title">Buy now.pay later</h3>
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue text-white">
            <SiBitcoincash />
          </div>
        </div>
        <p className="features-text">for Uncommon Perks members. learn more</p>
      </div>
    </div>
  );
};

export default Features;
