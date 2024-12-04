"use client";
import Input from "@/components/Input";
import PrimaryButton from "@/components/PrimaryButton";
import axios from "axios";
import { FormEvent } from "react";

const ProfileUpdate = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const searchParams = new URLSearchParams(window.location.search);

    const id = searchParams.get("id");
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);

      const { email, password, username, phoneNumber } =
        Object.fromEntries(formData);
      const response = await axios
        .put("/api/register", {
          id,
          email,
          password,
          username,
          phoneNumber,
          // postCode,
          // address,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.error(err));

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="col-span-12 md:col-span-9 h-full ">
      <form onSubmit={handleSubmit} className="w-full ">
        <div className="flex flex-col md:flex-row gap-10">
          <Input
            type="text"
            name="username"
            label="username"
            placeholder="John Doe"
            containerStyle="col-span-12 md:col-span-4 w-fit"
          />
          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="example@gmail.com"
            containerStyle="col-span-12 md:col-span-4 w-full "
          />
          <Input
            type="text"
            name="password"
            label="Password"
            placeholder="*******"
            containerStyle="col-span-12 md:col-span-4 w-full "
          />
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <Input
            type="text"
            name="phoneNumber"
            label="Phone Number"
            placeholder="+98 933 17 32 825"
            containerStyle="col-span-12 md:col-span-4 w-full "
          />
          <Input
            type="text"
            name="postCode"
            label="Post Code"
            placeholder="+98 933 17 32 825"
            containerStyle="col-span-12 md:col-span-4 w-full "
          />
          <Input
            type="text"
            name="address"
            label="Address"
            placeholder="Tehran-Iran"
            containerStyle="col-span-12 md:col-span-4 w-full "
          />
        </div>
        <PrimaryButton
          type="submit"
          text="Update"
          bgColor="bg-blue"
          textColor="text-white"
          customStyle="mt-10"
        />
      </form>
    </div>
  );
};

export default ProfileUpdate;
