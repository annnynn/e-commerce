import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [avatarUrl, setAvatarUrl] = useState(localStorage.getItem("avatarUrl"));
  const location = useLocation();

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
      setAvatarUrl(localStorage.getItem("avatarUrl"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-200">
      <div className="flex items-center gap-2 cursor-pointer">
        <img src="/Vector.svg" alt="Logo" />
        <h1>RedSeam Clothing</h1>
      </div>

      <div className="flex items-center gap-4">
        {token ? (
          <>
            <Link to="/cart">
              <ShoppingCartIcon className="w-6 h-6 cursor-pointer text-gray-700" />
            </Link>

            <div className="w-[40px] h-[40px] rounded-full">
              <img
                src={avatarUrl || "/avatar.png"}
                alt="User Avatar"
                className="w-full h-full object-cover cursor-pointer rounded-full"
              />
            </div>
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
    </div>
  );
};

export default Header;
