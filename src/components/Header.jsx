import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [token, setToken] = useState();
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    const avatarUrl = localStorage.getItem("avatarUrl");

    setToken(userToken);
    setAvatar(avatarUrl);
  }, [token, avatar]);
  const logout = () => {
    if (token) {
      localStorage.removeItem("token");
    }
  };

  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center gap-2 cursor-pointer">
        <img src="/Vector.svg" alt="Logo" />
        <h1>RedSeam Clothing</h1>
      </div>

      <div className="flex items-center gap-4">
        {token !== null ? (
          <>
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
              <img
                src={avatar || "/avatar.jpg"}
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>

            <Link to="/cart">
              <ShoppingCartIcon className="w-6 h-6 cursor-pointer text-gray-700" />
            </Link>

            <button onClick={logout}>logout</button>
          </>
        ) : (
          <div className="flex items-center gap-1 cursor-pointer">
            <UserIcon className="w-[20px] h-[20px]" />

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
