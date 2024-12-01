import Link from "next/link";
import React from "react";

interface Props {
  click?: () => void;
  text: string;
  textColor?: string;
  bgColor?: string;
  type: "submit" | "button";
  link?: boolean;
  customStyle?: string;
  border?: boolean;
  borderColor?: string;
  path?: string;
}

const SecondaryButton = ({
  click,
  text,
  type,
  textColor,
  bgColor,
  link,
  customStyle,
  border,
  borderColor,
  path,
}: Props) => {
  if (link) {
    return (
      <Link
        href={path ? path : "/"}
        type={type}
        onClick={click}
        className={`${customStyle} secondary__btn group block w-fit 
        ${bgColor ? bgColor : "bg-white"}
        ${border && "border-2"}
        ${
          borderColor
            ? borderColor
            : "border-soft-green hover:border-dark-green"
        }

        `}
      >
        <span
          className={`${
            textColor
              ? textColor
              : "text-dark-green font-bold text-lg group-hover:text-white"
          }`}
        >
          {text}
        </span>
      </Link>
    );
  }
  return (
    <button
      type={type}
      onClick={click}
      className={`${customStyle} secondary__btn group 
        ${bgColor ? bgColor : "bg-white"}
        ${border && "border-2"}
        ${borderColor ? borderColor : "border-blue"}

        `}
    >
      <span
        className={`${
          textColor
            ? textColor
            : "text-blue font-bold text-lg group-hover:text-white"
        }`}
      >
        {text}
      </span>
    </button>
  );
};

export default SecondaryButton;
