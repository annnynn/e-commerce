import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const PriceRangeFilter = () => {
    return(
       <div className='flex items-center gap-2 mb-4 cursor-pointer'>
         <AdjustmentsHorizontalIcon width={20} height={20}/>
        <button>Filter</button>
       </div>
    );
}

export default PriceRangeFilter;