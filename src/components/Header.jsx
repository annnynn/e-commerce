import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useContext} from "react";
import UserContext from "./utils/User";
import Cart from "./Cart"
import { useSelector } from "react-redux";

const Header = () => {

const {loggedInUser, avatarUrl, setUser} = useContext(UserContext);
const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

const token = localStorage.getItem("token");
const storedAvatarUrl = localStorage.getItem("avatarUrl");
const [cartSlider, setCartSlider] = useState(false);

 useEffect(() => {
    if (token && !loggedInUser) {
      setUser(token, storedAvatarUrl); 
    }
  
  }, [loggedInUser, token, storedAvatarUrl, setUser]);

  const toggleDropDown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("avatarUrl");

    setUser(null, null);
    setIsDropdownOpen(false);
  }

  const handleCartSlider = () => {
        setCartSlider(prev => !prev);
  }

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-200">
      <div className="flex items-center gap-2 cursor-pointer">
        <img src="/Vector.svg" alt="Logo" />
        <h1>RedSeam Clothing</h1>
      </div>

      <div className="flex items-center gap-4">
        {loggedInUser ?(
          <>
              <ShoppingCartIcon onClick={handleCartSlider} className="w-6 h-6 cursor-pointer text-gray-700" />
            <div className="w-[40px] h-[40px] rounded-full">
              <img
                onClick={toggleDropDown}
                src={avatarUrl || "/avatar.png"}
                alt="User Avatar"
                className="w-full h-full object-cover cursor-pointer rounded-full"
              />
            </div>
            {isDropdownOpen && (
              <div>
                <button onClick={handleLogout}>
                  Log out</button>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-1 cursor-pointer">
            <UserIcon className="w-5 h-5" />
            <Link to="/login">
              <button className="cursor-pointer">Log in</button>
            </Link>
          </div>
        )}
      </div>
      {cartSlider && <Cart handleCartSlider={handleCartSlider} cartItems={cartItems}/>}
      
    </div>
  );
};

export default Header;
