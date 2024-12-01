import React from "react";

const ProductQuantity = () => {
  return (
    <div className="border border-soft-gray px-2 rounded-md">
      <label htmlFor="qty" className="text-sm text-dark-gray">
        Qty
      </label>
      <input
        type="number"
        name="qty"
        id="qty"
        className=" w-full outline-none"
        min={1}
        placeholder="1"
      />
    </div>
  );
};

export default ProductQuantity;
