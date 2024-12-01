import Link from "next/link";
import React from "react";

interface Props {
  color: string;
}

const Logo = ({ color }: Props) => {
  return (
    <Link href="/">
      <h2
        className={`${
          color ? color : " text-dark-gray"
        } text-2xl font-bold italic`}
      >
        Prisma
      </h2>
    </Link>
  );
};

export default Logo;
