import Image from "next/image";
import React from "react";

const CardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="cardWrapper bg-white">
      <div className="w-1/2 h-full relative hidden md:block">
        <Image
          src="/navLink-2.jpg"
          alt=""
          fill
          sizes="fill"
          className="object-cover rounded-s-xl"
        />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white  font-bold">
            Welcome
          </h1>
          <p className="text-white leading-none mt-2">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-3   py-7  flex flex-col justify-start h-full ">
        {children}
      </div>
    </div>
  );
};

export default CardWrapper;
