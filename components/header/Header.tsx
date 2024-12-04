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
        scrollHeight >= 50 ? "bg-white" : "bg-transparent left-0"
      } fixed top-0 left-0 w-[100dvw] z-50 shadow-sm`}
    >
      <TopHeader />

      <div className="flex items-center justify-between w-full container py-7 bg-white">
        <div className="">
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
