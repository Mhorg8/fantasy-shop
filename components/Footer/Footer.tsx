import React from "react";
import Logo from "../header/Logo";
import Newsletter from "./Newsletter";
import SocialMediaLinks from "./SocialMediaLinks";
import { footerLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container mt-10 w-full bg-cream-white py-3">
      <div className="w-full grid grid-cols-12 gap-x-10">
        {/* logo and newsletter */}
        <div className="col-span-12 md:col-span-3 flex flex-col gap-3">
          <Logo color="text-black" />
          <p className="text-neutral-600">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <SocialMediaLinks />
          <Newsletter />
        </div>
        {/* footer links */}
        <div className="col-span-12 md:col-span-9 gap-x-10 flex flex-wrap flex-col md:flex-row w-full justify-between">
          {footerLinks.map((item) => {
            return (
              <ul className="" key={item.id}>
                <h2 className="text-xl text-dark-gray font-bold italic capitalize">
                  {item.title}
                </h2>

                <ul className="flex flex-col mt-5 gap-2">
                  {item.links.map((link) => (
                    <Link
                      className="hover:scale-105 transition duration-200 "
                      href={link.path}
                      key={link.title}
                    >
                      {link.title}
                    </Link>
                  ))}
                </ul>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
