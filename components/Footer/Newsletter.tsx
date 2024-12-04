import React from "react";

const Newsletter = () => {
  return (
    <div className="max-w-[300px] border border-blue rounded-xl relative bg-white">
      <input
        type="text"
        className="w-full  py-2 flex-1 outline-none px-3 text-lg bg-transparent"
        placeholder="example@gmail.com"
      />
      <button className="absolute right-0 bg-blue h-full rounded-e-xl px-5 text-white font-medium">
        Add
      </button>
    </div>
  );
};

export default Newsletter;
