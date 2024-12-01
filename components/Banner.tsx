import Image from "next/image";
import SecondaryButton from "./SecondaryButton";

const Banner = () => {
  return (
    <div className="w-full h-[80dvh] md:h-[70dvh]  relative bg-[#E0EFEA] mt-20 flex flex-col md:flex-row">
      {/* image content */}
      <div className="w-full md:w-2/3 h-full relative order-2 md:order-1">
        <Image
          src="/banner-1.webp"
          alt="banner-1"
          fill
          sizes="fill"
          className="object-cover"
        />
      </div>
      {/* text content */}
      <div className="flex flex-col items-center justify-center h-full w-full md:w-1/3 order-1 md:order-2">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold">Make it uncommon</h3>
          <p>
            <strong>Wish You lived Next Door Mug</strong> <br />
            Connect in sprit to your loved ones- <br /> no matter the distance
            between you - <br /> with this handmade stoneware mug
          </p>
          <SecondaryButton
            bgColor="bg-[#e0efea]"
            border
            type="button"
            text="see more"
            link
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
