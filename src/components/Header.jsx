import { UserIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2 cursor-pointer">
        <img src="/Vector.svg" />
        <h1>RedSeam Clothing</h1>
      </div>

      <div className="flex items-center gap-1 cursor-pointer">
        <UserIcon className="w-[20px] h-[20px]" />
        <button className="cursor-pointer">Log in</button>
      </div>
    </div>
  );
};

export default Header;
