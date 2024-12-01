import { CardItem } from "@/app/types/types";
import Image from "next/image";
import React from "react";

import SecondaryButton from "../SecondaryButton";

interface Props {
  item: CardItem;
}

const Card = ({ item }: Props) => {
  return (
    <div className="col-span-12 md:col-span-4 lg:col-span-3 md:min-w-[320px] h-[420px]">
      <div className="w-full h-2/3 relative">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="fill"
          className="object-cover"
        />
      </div>
      <div className="w-full h-1/3">
        <h3 className="text-lg mb-3 font-semibold">{item.title}</h3>
        <SecondaryButton
          link
          path={item.path}
          text={item.btnText}
          type="button"
          border
        />
      </div>
    </div>
  );
};

export default Card;
