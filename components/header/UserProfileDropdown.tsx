"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  IoChevronDown,
  IoChevronUp,
  IoLogOutOutline,
  IoPersonOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const UserProfileDropdown = () => {
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  // when user click on dropdown links they should push to another page and close dropdown
  function handleLinks(path: string) {
    router.push(path);
    setOpenDropdown(false);
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpenDropdown((prev) => !prev)}
        className="flex items-center gap-x-1 cursor-pointer hover:scale-110 transition duration-200"
      >
        <p>Mohammad</p>
        {/* if dropdown was open this will show chevron down otherwise chevron up */}
        {openDropdown ? (
          <IoChevronUp size={14} className="text-black" />
        ) : (
          <IoChevronDown size={14} className="text-black" />
        )}
      </button>
      {openDropdown && <UserProfileOptions handleLinks={handleLinks} />}
    </div>
  );
};

export default UserProfileDropdown;

interface UserProfileProps {
  handleLinks: (path: string) => void;
}

const UserProfileOptions = ({ handleLinks }: UserProfileProps) => {
  return (
    <ul className="absolute top-full right-0 w-full min-w-[150px] bg-cream-white z-40 py-2 px-3 rounded-md flex flex-col gap-2 text-dark-gray font-semibold mt-3">
      <li
        onClick={() => handleLinks("/profile")}
        className="profile__dropdown-item"
      >
        Profile
        <IoPersonOutline />
      </li>
      <li
        onClick={() => handleLinks("/setting")}
        className="profile__dropdown-item"
      >
        setting
        <IoSettingsOutline />
      </li>
      <li
        //   use logout method in Auth js
        onClick={() => {}}
        className="profile__dropdown-item"
      >
        Logout
        <IoLogOutOutline />
      </li>
    </ul>
  );
};
