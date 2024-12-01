import Banner from "@/components/Banner";
import Cards from "@/components/cards/Cards";
import SmallBox from "@/components/SmallBox";
import HeroContainer from "@/components/hero/Hero";
import Slider from "@/components/Slider";
import { tempProducts } from "@/constants";
import Categories from "@/components/categories/Categories";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroContainer />
      <Cards />
      <SmallBox />
      <Slider content={tempProducts} title="Trending now" />
      <Banner />
      <Slider content={tempProducts} title="Gift under $50" />
      <Categories />
      <Features />
      <Slider content={tempProducts} title="Gift under $50" />
    </div>
  );
}
