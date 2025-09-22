import React, { useState } from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

const PriceRangeFilter = () => {
  const [filterDropdown, setFilterDropdown] = useState(false);

  const handleFilterBtn = () => {
    setFilterDropdown((prev) => !prev);
  };
  return (
    <div>
      <div className="flex items-center gap-2 mb-4 cursor-pointer">
        <AdjustmentsHorizontalIcon width={20} height={20} />
        <button onClick={handleFilterBtn}>Filter</button>
      </div>
      {filterDropdown && (
        <div className="border border-zinc-200 p-4 rounded-md w-110">
          <h3 className="my-2">Select price</h3>
          <div className="flex gap-2 mb-4">
            <input className="border border-zinc-200 p-2 rounded-md" type="text" placeholder="From" />
            <input className="border border-zinc-200 p-2 rounded-md" type="text" placeholder="To" />
          </div>
          <button className="text-white px-8 py-2 border rounded-md bg-orange-600">Apply</button>
        </div>
      )}
    </div>
  );
};

export default PriceRangeFilter;
