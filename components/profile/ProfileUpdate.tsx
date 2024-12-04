"use client";
import Input from "@/components/Input";
import PrimaryButton from "@/components/PrimaryButton";
import axios from "axios";
import { FormEvent } from "react";

const ProfileUpdate = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);

      const { email, password, username, phoneNumber, postCode, address } =
        Object.fromEntries(formData);
      const response = await axios
        .put("/api/register", {
          email,
          password,
          username,
          phoneNumber,
          postCode,
          address,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="col-span-12 md:col-span-9 h-full w-full ">
      <form onSubmit={handleSubmit} className="w-full grid grid-cols-12 gap-10">
        <Input
          type="text"
          name="username"
          label="username"
          placeholder="John Doe"
          containerStyle="col-span-4 w-full "
        />
        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="example@gmail.com"
          containerStyle="col-span-4 w-full"
        />
        <Input
          type="text"
          name="password"
          label="Password"
          placeholder="*******"
          containerStyle="col-span-4 w-full"
        />
        <Input
          type="text"
          name="phoneNumber"
          label="Phone Number"
          placeholder="+98 933 17 32 825"
          containerStyle="col-span-4 w-full"
        />
        <Input
          type="text"
          name="postCode"
          label="Post Code"
          placeholder="+98 933 17 32 825"
          containerStyle="col-span-4 w-full"
        />
        <Input
          type="text"
          name="address"
          label="Address"
          placeholder="Tehran-Iran"
          containerStyle="col-span-4 w-full"
        />
      </form>
      <PrimaryButton
        type="submit"
        text="Update"
        bgColor="bg-blue"
        textColor="text-white"
        customStyle="mt-10"
      />
    </div>
  );
};

export default ProfileUpdate;
