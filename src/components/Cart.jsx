import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity, removeItem } from "./utils/cartSlice";
import { useEffect, useState } from "react";

const Cart = ({handleCartSlider}) => {

  const cartItems = useSelector((store) => store.cart.items)
  const dispatch = useDispatch();

  const [itemsSubtotal, setItemsSubtotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const delivery = Number(5);

  
  useEffect(() => {
    const subtotal = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity; // jami titoeulis
    }, 0)
    setItemsSubtotal(subtotal);
    setTotalPrice(subtotal + delivery);
  }, [cartItems])

  return (
    <>
      <div className="m-auto w-[540px] h-full border border-gray-400 p-10 rounded-md">
        <div className="bg-[#F8F6F7] flex justify-between items-center mb-[63px]">
          <h1 className="text-3xl font-medium text-[20px]">Shopping cart ({cartItems.length})</h1>
          <XMarkIcon onClick={handleCartSlider} className="cursor-pointer w-[18px] h-[18px] text-[#10151F]" />
        </div>

       <div>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex"
                >
                  <div className="flex justify-between gap-4 w-[460px]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[100px] h-[134px] border border-[#E1DFE1] rounded-md"
                    />
                    <div className="mt-[20px]">
                      <div className="flex justify-between">
                      <h3 className="font-semibold">{item.name}</h3>
                          <p className="font-semibold ml-[52px]">${item.price}</p>
                      </div>
                      <p className="text-sm text-gray-500">{item.color}</p>
                      <p className="text-sm text-gray-500">{item.size}</p>
                      <div className="flex justify-between">
                     <div className="flex">
                        <button
                          onClick={() => dispatch(decrementQuantity(item.id))}
                          className="text-sm bg-[#E1DFE1] px-2 py-1 rounded-l-md"
                        >
                          -
                        </button>
                        <p className="mx-2">{item.quantity}</p>
                        <button
                          onClick={() => dispatch(incrementQuantity(item.id))}
                          className="text-sm bg-[#E1DFE1] px-2 py-1 rounded-r-md"
                        >
                          +
                        </button>
                     </div>
                      <button onClick={() => { 
                         console.log(item.id);
                        dispatch(removeItem(item.id))
                        
                        }}>Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          </div>
          
        <div className="mt-[200px] mb-[40px]">
            <div className="flex justify-between">
                <span>Items subtotal</span>
                <span> ${itemsSubtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
                <span>Delivery</span>
                <span> ${delivery}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-[20px] font-bold">Total</span>
                <span> ${totalPrice.toFixed(2)}</span>
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
