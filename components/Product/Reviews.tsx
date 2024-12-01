import React from "react";
import ProductRate from "./ProductRate";
import PrimaryButton from "../PrimaryButton";
import ReviewItem from "./ReviewItem";

const Review = () => {
  return (
    <div className="my-10">
      {/* Review Header */}
      <div className="w-full flex justify-between items-center gap-x-20  p-3">
        <div className="flex flex-col items-center justify-center gap-4 ">
          <h1 className="text-8xl font-semibold">5</h1>
          <ProductRate rate={5} />
          <p>based on 1 view</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 ">
          <h1 className="text-8xl font-semibold">100%</h1>

          <p>of respondents would recommend this to a friend</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 ">
          <h1 className="text-8xl font-semibold">1</h1>
          <p>based on 1 commend</p>
        </div>
      </div>

      {/* All Review view */}

      <div className="w-full mt-20 space-y-5">
        <PrimaryButton
          link
          path="/"
          type="button"
          text="write a review"
          bgColor="bg-dark-green"
          textColor="text-white"
        />
        <ReviewItem />
      </div>
    </div>
  );
};

export default Review;
