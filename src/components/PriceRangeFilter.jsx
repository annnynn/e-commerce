import React, { useEffect, useState } from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import fetchProducts from "./utils/fetchProducts";

const PriceRangeFilter = ({
  filteredPrice,
  setFilteredPrice,
  onApply,
  filterDropdown,
  setFilterDropdown,
}) => {
  const handleFilterBtn = () => {
    setFilterDropdown((prev) => !prev);
  };

  return (
    <>
      <div className="flex items-center gap-2 cursor-pointer">
        <AdjustmentsHorizontalIcon width={20} height={20} />
        <button className="cursor-pointer" onClick={handleFilterBtn}>Filter</button>
      </div>
      {filterDropdown && (
        <div className=" absolute border border-zinc-200 p-4 rounded-md w-80 my-10 mx-[-250px] bg-white shadow-lg">
          <h3 className="my-2">Select price</h3>
          <div className="flex gap-2 mb-4">
            <input
              value={filteredPrice.from}
              onChange={(e) =>
                setFilteredPrice({ ...filteredPrice, from: e.target.value })
              }
              className="border border-zinc-200 p-2 rounded-md w-full"
              type="text"
              placeholder="From"
            />
            <input
              value={filteredPrice.to}
              onChange={(e) =>
                setFilteredPrice({ ...filteredPrice, to: e.target.value })
              }
              className="border border-zinc-200 p-2 rounded-md w-full"
              type="text"
              placeholder="To"
            />
          </div>
          <button
            onClick={onApply}
            className="text-white px-8 py-2 border rounded-md bg-orange-600 cursor-pointer"
          >
            Apply
          </button>
        </div>
      )}
    </>
  );
};

export default PriceRangeFilter;
