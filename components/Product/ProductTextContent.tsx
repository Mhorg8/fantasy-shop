import PrimaryButton from "../PrimaryButton";
import Link from "next/link";
import { Product } from "@/app/types/types";
import ProductRate from "./ProductRate";
import ProductQuantity from "./ProductQuantity";

interface Props {
  product: Product;
}

const ProductTextContent = ({ product }: Props) => {
  return (
    <div className="w-full md:w-1/2 h-full flex flex-col gap-3 mt-5 md:mt-0">
      <h2 className="text-2xl font-bold capitalize leading-none">
        {product.productName}
      </h2>
      <p>
        Created by{" "}
        <Link href="/" className="underline">
          Mohammad
        </Link>
      </p>
      <p className="text-dark-gray">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        nobis nisi harum officiis impedit vel necessitatibus ipsum repudiandae?
        Consequuntur, eaque.
      </p>

      {/* generate stars */}
      <ProductRate rate={product.rate} rateCount={product.rateCount} />

      <h2 className="text-xl font-medium">${product.price}</h2>

      <div className="flex items-center gap-x-5">
        <ProductQuantity />

        <PrimaryButton
          type="button"
          text="add to cart"
          bgColor="bg-dark-green"
          textColor="text-white"
          customStyle="w-full"
        />
      </div>
    </div>
  );
};

export default ProductTextContent;
