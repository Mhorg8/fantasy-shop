import { categoryItems } from "@/constants";
import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <div className="container mt-20 w-full max-w-[1300px]">
      <div className="w-full h-full flex flex-col md:flex-row justify-between md:gap-x-20">
        {categoryItems.map((category) => (
          <ul key={category.title} className="w-full ">
            <h3 className="text-lg md:text-xl font-bold py-3">
              {category.title}
            </h3>
            <div className="w-full h-[2px] bg-black"></div>
            <ul className="grid grid-cols-12 gap-3 mt-3">
              {category.items.map((item) => {
                return (
                  <Link
                    className="col-span-6 md:col-span-12 text-lg capitalize text-dark-gray hover:scale-105 transition duration-200"
                    href={`/category${item.path}`}
                    key={item.text}
                  >
                    {item.text}
                  </Link>
                );
              })}
            </ul>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Categories;
