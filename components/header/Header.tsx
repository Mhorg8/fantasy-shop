"use client";
import { useEffect, useState } from "react";
import HeaderActions from "./HeaderActions";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import TopHeader from "./TopHeader";

const Header = () => {
  const [scrollHeight, setScrollHeight] = useState<number>(0);

  function handleScrollSize() {
    setScrollHeight(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollSize);

    return () => window.removeEventListener("scroll", handleScrollSize);
  }, []);
  return (
    <div
      className={`${
        scrollHeight >= 50 ? "bg-white" : "bg-transparent"
      } fixed top-0 right-0 w-full  z-50 shadow-sm`}
    >
      <TopHeader />

      <div className="flex items-center justify-between w-full container py-7 bg-white">
        <div className="flex-1">
          {" "}
          <Logo color="text-black" />
        </div>

        <NavMenu />

        <HeaderActions />
      </div>
    </div>
  );
};

export default Header;
