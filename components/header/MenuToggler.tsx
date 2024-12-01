"use client";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

import MobileMenu from "./MobileMenu";

const MenuToggler = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <>
      {toggleMenu && <MobileMenu />}
      <button
        onClick={() => setToggleMenu((prev) => !prev)}
        className="hover:scale-110 transition duration-200 md:hidden z-50"
      >
        {toggleMenu ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>
    </>
  );
};

export default MenuToggler;
