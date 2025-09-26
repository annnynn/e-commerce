import { UserIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between py-[29px] px-[100px] text-center">
      <div className="flex items-center gap-2 cursor-pointer">
        <img src="/Vector.svg" />
        <h1>RedSeam Clothing</h1>
      </div>

      <div className="flex cursor-pointer">
        <UserIcon className="w-[13.23px] h-[16px] mt-[2px]"/>
        <Link to="/login">
          <button className="cursor-pointer text-[12px] ml-[8px]">Log in</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
