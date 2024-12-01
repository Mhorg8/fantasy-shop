"use client";
import { NavLink } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  index: number;
  item: NavLink;
}

const NavItem = ({ item, index }: Props) => {
  const [showDropDown, setDropDown] = useState<number | null>(null);

  const handleMouseEnter = () => setDropDown(index);
  const handleMouseLeave = () => setDropDown(null);

  return (
    <li
      className="relative group"
      key={item.navLink}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Link */}
      <p className="font-semibold cursor-pointer dropdown-item capitalize">
        {item.navLink}
      </p>

      {/* Dropdown */}
      <div
        className={`${
          showDropDown === index ? "block" : "hidden"
        } dropdown flex p-3`}
      >
        <ul className="w-1/2 flex flex-col gap-2">
          {item.subLinks.map((e, index) => (
            <li className="capitalize" key={index}>
              <p className="text-soft-coral font-bold ">{e.subTitle}</p>
              {e.subItems.map((link, index) => (
                <Link
                  className="block hover:scale-105 transition-transform text-gray-700 hover:text-blue-500"
                  href={link.path}
                  key={index}
                >
                  {link.subTitle}
                </Link>
              ))}
            </li>
          ))}
        </ul>

        <div className="relative w-1/2 h-[400px] ">
          <Image
            src={item.image}
            alt={item.navLink}
            fill
            sizes="fill"
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </li>
  );
};

export default NavItem;
