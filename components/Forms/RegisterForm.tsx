"use client";

import { FormEvent } from "react";
import Input from "../Input";
import LoginOptions from "./LoginOptions";
import PrimaryButton from "../PrimaryButton";

const RegisterForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        name="password"
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
