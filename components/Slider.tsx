"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SliderProduct from "./SliderProduct";
import { Product } from "@/app/types/types";
// interface

interface Props {
  content: Product[];
  title: string;
}

const Slider = ({ content, title }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="max-w-[1300px] container"
    >
      <div className="w-full text-center mt-20 mb-5 text-2xl font-bold">
        {title}
      </div>

      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView="auto"
        draggable
        navigation
        pagination={{
          dynamicBullets: true,
        }}
      >
        {content.map((product) => (
          <SwiperSlide
            key={product.id}
            className="max-w-[300px] md:max-w-[250px]"
          >
            <SliderProduct product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Slider;
