"use client";
import { navLinks } from "@/constants";
import { motion } from "framer-motion";

import Link from "next/link";
import Search from "./Search";

const MobileMenu = () => {
  return (
    <motion.div
      initial={{ x: 2000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 60 }}
      className="w-[75%] h-[100dvh] absolute top-0 right-0 bg-soft-green flex items-center justify-center z-40"
    >
      <ul className="flex flex-col items-center justify-center h-full w-full gap-3 ">
        {navLinks.map((item) => (
          <Link
            className="nav__link-mobile"
            key={item.navLink}
            href={`/${item.navLink}`}
          >
            {item.navLink}
          </Link>
        ))}
        <Link href="/sign-in" className="nav__link-mobile">
          Logout
        </Link>
        <Search />
      </ul>
    </motion.div>
  );
};

export default MobileMenu;
