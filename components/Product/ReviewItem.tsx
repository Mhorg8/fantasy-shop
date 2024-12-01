import React from "react";
import ProductRate from "./ProductRate";

const ReviewItem = () => {
  return (
    <div className="flex flex-col items-start gap-3">
      <div className="flex items-center capitalize">
        <ProductRate rate={5} />
        <p className="border-x border-soft-gray text-dark-gray px-3 ml-3">
          Mom of one
        </p>
        <p className="border-e border-soft-gray text-dark-gray px-3">
          Undisclosed
        </p>
        <p className="px-3 text-dark-gray">
          Submitted as an incentivized review
        </p>
      </div>

      <h2 className="text-2xl font-semibold">
        Kid friendly choose your own adventure
      </h2>
      <p className="text-sm">
        Growing up I loved choose your own adventure novels and this is a take
        on that for a younger age! My child is a little younger than the
        suggested age for this book. We tried rolling the dice but she was more
        interested in just picking a picture that looked the coolest to her and
        that&apos;s what we would choose to move forward in the adventure.
        Worked out great! When she gets a bit older I look forward to using the
        fold out map. Even without following the instructions to a T, we had so
        much fun reading it together. The illustrations are adorable and eye
        catching.
      </p>
    </div>
  );
};

export default ReviewItem;
