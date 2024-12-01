import { generateStar } from "@/app/hooks/generateStar";
import React from "react";

interface Props {
  rate: number;
  rateCount?: number;
}
const ProductRate = ({ rate, rateCount }: Props) => {
  return (
    <div className="flex items-center gap-x-1">
      <div className="flex items-center gap-x-1">
        {generateStar(rate, "text-dark-green", 14)}
      </div>
      {rateCount && <p>({rateCount})</p>}
    </div>
  );
};

export default ProductRate;
