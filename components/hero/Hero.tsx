"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import PrimaryButton from "../PrimaryButton";

const HeroContainer = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="mt-[80px] w-full h-[calc(100dvh-100px)] bg-[#093224] relative"
    >
      <div className="w-full h-full flex flex-col md:flex-row ">
        {/* text section in left side */}
        <div className="hero__left-section">
          <div className="text-start space-y-3 z-20">
            <h4 className="text-warm-gold text-3xl uppercase tracking-widest font-bold">
              LET THE HOLYDAYS BEGIN
            </h4>
            <h1 className="text-6xl font-bold text-white">Black Friday</h1>
            <p className="text-5xl text-white">is here.</p>
            <PrimaryButton
              text="shop bestsellers"
              type="button"
              textColor="text-soft-green"
            />
          </div>

          <div className="hero__blob -bottom-20 -left-20 z-10"></div>
          <div className="hero__blob -top-20 -left-20 z-10"></div>
        </div>
        {/* image section */}
        <div className="w-full md:w-2/3 h-full relative">
          <Image
            src="/hero.webp"
            alt=""
            fill
            sizes="fill"
            className="rounded-s-[3%]"
          />
        </div>
      </div>

      {/* circle badge in bottom of page */}
      <div
        className="hidden md:flex w-[200px] h-[200px] rounded-full bg-warm-gold
        items-center justify-center absolute bottom-0 left-1/3 -translate-x-1/3 p-4"
      >
        <p className="text-sm font-semibold text-center">
          Hurry, Limited Time Offers! Catch these deals before they
          disappear-shop now and save big!
        </p>
      </div>
    </motion.section>
  );
};

export default HeroContainer;
