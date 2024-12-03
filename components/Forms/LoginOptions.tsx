"use client";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaGithub } from "react-icons/fa6";
import { IconType } from "react-icons";

const LoginOptions = () => {
  return (
    <div className="flex items-center gap-x-5">
      <LoginOption color="#000" Icon={FcGoogle} bgColor="bg-soft-green" />
      <LoginOption color="#fff" Icon={FaGithub} bgColor="bg-soft-coral" />
      <LoginOption color="#000" Icon={FaApple} bgColor="bg-soft-gray" />
    </div>
  );
};
export default LoginOptions;

const LoginOption = ({
  Icon,
  bgColor,
  color,
}: {
  Icon: IconType;
  bgColor: string;
  color: string;
}) => {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      className={`${
        bgColor ? bgColor : "bg-soft-green"
      } flex-1 flex items-center justify-center py-3 rounded-md cursor-pointer`}
    >
      <Icon color={color ? color : "#000"} size={30} />
    </motion.button>
  );
};
