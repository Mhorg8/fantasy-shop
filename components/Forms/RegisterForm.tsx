"use client";

import { FormEvent } from "react";
import Input from "../Input";
import LoginOptions from "./LoginOptions";
import PrimaryButton from "../PrimaryButton";
import axios from "axios";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const { username, password, confirmPassword, email } =
      Object.fromEntries(formData);

    console.log(username);

    const response = await axios
      .post("/api/register", {
        username: username,
        password: password,
        email: email,
        confirmPassword: confirmPassword,
      })
      .then((res) => {
        router.push("/sign-up/update-profile");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <Input
        name="email"
        label="email"
        placeholder="example@gmail.com"
        type="email"
      />
      <Input
        name="username"
        label="username"
        placeholder="John Doe"
        type="text"
      />
      <Input
        name="password"
        label="password"
        placeholder="******"
        type="password"
      />
      <Input
        name="confirmPassword"
        label="confirm password"
        placeholder="******"
        type="password"
      />
      <hr className="" />

      <LoginOptions />

      <PrimaryButton
        type="submit"
        text="Register"
        customStyle="w-full"
        bgColor="bg-dark-green"
        textColor="text-white"
      />
    </form>
  );
};

export default RegisterForm;
