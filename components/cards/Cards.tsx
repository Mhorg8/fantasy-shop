import { cardDetails } from "@/constants";
import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="container w-full h-full grid grid-cols-12 gap-5 mt-10">
      {cardDetails.map((item) => (
        <Card key={item.title} item={item} />
      ))}
    </div>
  );
};

export default Cards;
