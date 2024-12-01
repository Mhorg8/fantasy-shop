"use client";
import React, { useState } from "react";
import { SearchIcon } from "lucide-react";
import { motion } from "framer-motion";

const Search = () => {
  const [openSearchbar, setOpenSearchbar] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ width: "32px", height: "32px", opacity: 0 }} // Initial width is 32px for the search icon size
      animate={{ width: openSearchbar ? "250px" : "32px", opacity: 1 }} // Animate to 250px when search is open, 32px when closed
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 150,
        damping: 30,
      }} // Smooth animation
      className="bg-cream-white  py-1.5 rounded-full flex items-center justify-between px-2 shadow-md"
    >
      {openSearchbar && (
        <input
          type="text"
          className="flex-1 focus:outline-none bg-transparent placeholder:text-sm placeholder:text-dark-gray"
          placeholder="Search..."
        />
      )}

      <button onClick={() => setOpenSearchbar((prev) => !prev)}>
        <SearchIcon className="text-dark-gray" size={16} />
      </button>
    </motion.div>
  );
};

export default Search;
