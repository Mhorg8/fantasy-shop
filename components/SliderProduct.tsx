import { generateStar } from "@/app/hooks/generateStar";
import { Product } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  product: Product;
}
const SliderProduct = ({ product }: Props) => {
  return (
    <Link
      href={`/product/${product.id}`}
      className="max-w-[300px] md:max-w-[250px] h-[400px] cursor-grab block"
    >
      <div className="w-full h-2/3 relative">
        {
          <Image
            src={product.image}
            alt={product.productName}
            className="object-cover"
            fill
            sizes="fill"
          />
        }
      </div>
      <div className="w-full h-1/3">
        <h2 className="text-lg font-medium capitalize">
          {product.productName}
        </h2>
        <p className="text-lg">${product.price.toFixed(2)}</p>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {generateStar(product.rate, "text-dark-green", 16)}
          </div>
          <p>{product.rateCount}</p>
        </div>
      </div>
    </Link>
  );
};

export default SliderProduct;
