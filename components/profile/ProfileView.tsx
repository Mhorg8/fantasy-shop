"use client";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import ProfileViewDetail from "./ProfileViewDetail";
import { useState } from "react";

const ProfileView = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const updateProfileImage = () => {
    setShowModal(true);
  };

  return (
    <div className="col-span-12 md:col-span-3 border border-soft-gray rounded-xl flex flex-col justify-between h-[400px] md:h-full">
      <div className="w-full h-[150px] bg-blue rounded-t-xl relative ">
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[80px] h-[80px] ">
          <Image
            src="/banner-1.webp"
            alt="blank-image"
            fill
            sizes="fill"
            className="object-cover rounded-full shadow-white"
          />
          <button
            className="absolute right-0 top-1"
            onClick={updateProfileImage}
          >
            <FaRegEdit size={18} />
          </button>
        </div>

        {/* modal */}
        {showModal && (
          <div className="w-full h-full absolute top-0 left-0 z-50 flex flex-col bg-soft-green p-3 rounded-t-xl ">
            <label htmlFor="">Profile image</label>
            <input type="file" name="image" />
          </div>
        )}
      </div>
      {/* Profile pre-view  */}
      <div className="flex-1 py-5 flex flex-col gap-5 justify-center">
        <ProfileViewDetail title="username" value="mhorg" />
        <ProfileViewDetail
          title="email"
          value="mohammadalirezaie081@gmail.com"
        />
        <ProfileViewDetail title="phone" value="+98 923 22 98 976" />
        <ProfileViewDetail title="address" value="Tehran-Iran" />
      </div>
    </div>
  );
};

export default ProfileView;
