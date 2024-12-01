import ReViews from "@/components/Product/Reviews";
import ProductTextContent from "@/components/Product/ProductTextContent";
import Slider from "@/components/Slider";
import { tempProducts } from "@/constants";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  params: {
    id: number;
  };
}

const SingleProductPage = async ({ params }: Props) => {
  const { id } = params;

  const product = tempProducts.find((item) => item.id === Number(id));

  console.log(product);

  if (!product) {
    return (
      <div className="w-full min-h-screen">
        <div className="flex items-center justify-center w-full h-full">
          <h1>Product not found pls refresh the page</h1>
        </div>
      </div>
    );
  }
  return (
    <div className="mt-[100px] container max-w-[1300px]">
      <div className="flex flex-col md:flex-row items-center justify-between  gap-x-12 w-full h-[100dvh]">
        {/* image content */}
        <div className="w-full md:w-1/2 h-full relative">
          <Image
            src={product.image}
            alt={product.productName}
            fill
            sizes="fill"
            className="object-cover "
          />
          <button className="absolute top-10 right-5">
            <IoHeartOutline size={27} />
          </button>
        </div>
        {/* text content */}
        <ProductTextContent product={product} />
      </div>
      <Slider content={tempProducts} title="customer also bought" />

      <ReViews />
    </div>
  );
};

export default SingleProductPage;
