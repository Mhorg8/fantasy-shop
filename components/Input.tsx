import React, { forwardRef } from "react";

interface Props {
  label: string;
  name: string;
  placeholder: string;
  type: "email" | "password" | "text";
  customStyle?: string;
  haveError?: boolean;
  containerStyle?: string;
}

const Input = forwardRef(
  (
    {
      label,
      name,
      placeholder,
      type,
      customStyle,
      haveError,
      containerStyle,
    }: Props,
    ref
  ) => {
    return (
      <div className={`${containerStyle} flex flex-col gap-1 w-full`}>
        <label className="text-sm font-medium capitalize" htmlFor="">
          {label}
        </label>
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          className={`${customStyle && customStyle} input ${
            haveError && "border-soft-coral"
          }`}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
