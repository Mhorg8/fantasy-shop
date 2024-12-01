import React from "react";
import NavItem from "./NavItem";
import { navLinks } from "@/constants";

const NavMenu = () => {
  return (
    <ul className="hidden md:flex flex-1 justify-center items-center gap-3 ">
      {navLinks.map((item, index) => {
        return <NavItem item={item} index={index} key={item.navLink} />;
      })}
    </ul>
  );
};

export default NavMenu;
