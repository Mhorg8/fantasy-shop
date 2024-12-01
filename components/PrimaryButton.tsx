"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface Props {
  type: "submit" | "button";
  text?: string;
  link?: boolean;
  bgColor?: string;
  textColor?: string;
  path?: string;
  click?: () => void;
  secondary?: boolean;
  customStyle?: string;
}

const PrimaryButton = ({
  type,
  text,
  path,
  textColor,
  bgColor,
  link,
  customStyle,
  click,
}: Props) => {
  // if link props come true this well be Link components
  if (link) {
    return (
      <Link
        href={path ? path : "/"}
        type={type}
        className={`${
          bgColor ? bgColor : "bg-white"
        } primaryButton block w-fit`}
      >
        <span className={`${textColor ? textColor : "text-black"}`}>
          {text}
        </span>
      </Link>
    );
  }

  //   otherwise
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      onClick={click}
      type={type}
      className={`${bgColor ? bgColor : "bg-white"}
       ${customStyle && customStyle} primaryButton`}
    >
      <span className={`${textColor ? textColor : "text-black"}`}>{text}</span>
    </motion.button>
  );
};

export default PrimaryButton;
