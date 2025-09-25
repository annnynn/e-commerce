import { XMarkIcon } from "@heroicons/react/24/outline";
const Cart = () => {
  return (
    <>
      <div className="m-auto w-[540px] border border-gray-400 p-10 rounded-md">
        <div className="bg-[#F8F6F7] flex justify-between items-center mb-[63px]">
          <h1 className="text-3xl font-medium text-[20px]">Shopping cart</h1>
          <XMarkIcon className="cursor-pointer w-[18px] h-[18px] text-[#10151F]" />
        </div>

        <div className="flex justify-between items-center">
          <div className="border border-gray-300 w-[100px] h-[134px] rounded-md"></div>
          <div className="flex flex-col">
            <h2>Product Name</h2>
            <span>color</span>
            <span>L</span>
            <span>quantity</span>
          </div>
          <div className="flex flex-col justify-between h-[101px]">
            <span>$ 25</span>
            <button className="text-[#3E424A] text-[12px]">Remove</button>
          </div>
        </div>

        <div className="mt-[331px] mb-[40px]">
            <div>
                <span>Items subtotal</span>
                <span>$25</span>
            </div>
            <div>
                <span>Delivery</span>
                <span>$5</span>
            </div>
            <div>
                <span>Total</span>
                <span>$55</span>
            </div>
            <button className="bg-orange-600 text-[#FFFFFF] text-[18px] font-medium w-full h-[59px] border rounded-[10px] cursor-pointer mt-[102px] items-center flex justify-center">
                <span>Go to checkout</span>
            </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
