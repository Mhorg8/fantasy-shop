import SectionHeading from "./SectionHeading";
import { smallBoxItem } from "@/constants";
import { SmallBoxItem } from "@/app/types/types";
import Link from "next/link";

const SmallBox = () => {
  return (
    <div className="container w-full h-full mt-10 max-w-[1300px]">
      <SectionHeading text="Shop by interest" />
      <div className="grid grid-cols-12 mt-10 gap-3">
        {smallBoxItem.map((category) => (
          <SmallBoxView category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};

interface CategoryViewProps {
  category: SmallBoxItem;
}

const SmallBoxView = ({ category }: CategoryViewProps) => {
  return (
    <Link href={`/interest${category.path}`} className="category ">
      <p className="text-xl font-bold text-dark-green text-center">
        {category.title}
      </p>
    </Link>
  );
};

export default SmallBox;
