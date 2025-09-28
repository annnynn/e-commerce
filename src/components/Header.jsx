import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Header = () => {
  const token = localStorage.getItem("token");
  const avatarUrl = localStorage.getItem("avatarUrl");

  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center gap-2 cursor-pointer">
        <img src="/Vector.svg" alt="Logo" />
        <h1>RedSeam Clothing</h1>
      </div>

      <div className="flex items-center gap-4">
        {token ? (
          <>
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
              <img
                src={avatarUrl || "/avatar.png"}
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>

            <Link to="/cart">
              <ShoppingCartIcon className="w-6 h-6 cursor-pointer text-gray-700" />
            </Link>
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
