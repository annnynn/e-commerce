import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="flex items-center">
      <div>
        <img src="/registerImg.png" />
      </div>

      <div className="ml-[173px]">
        <h1 className="text-[42px] font-semibold">Registration</h1>
        <div className="w-[554px] h-[518px]">
          <div className="flex items-center">
            <img />
            <span>Upload new</span>
            <button>Remove</button>
          </div>

          <form>
            <div className="mt-[46px]">
              <div>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="Username"
                  className="w-full h-[42px] border border-[#E1DFE1] rounded-[8px] pl-[12px]"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full h-[42px] border border-[#E1DFE1] rounded-[8px] pl-[12px] my-[24px]"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full h-[42px] border border-[#E1DFE1] rounded-[8px] pl-[12px]"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full h-[42px] border border-[#E1DFE1] rounded-[8px] pl-[12px] mt-[24px] mb-[46px]"
                />
              </div>
            </div>
            <Link to="/">
              <button className="w-full h-[41px] bg-orange-600 text-[#FFFFFF] rounded-[10px]">Register</button>
            </Link>
          </form>
        </div>
        <div className="text-center">
          <span className="text-[#3E424A] text-[14px]">Already member?</span>
          <Link to="/login">
            <button className="cursor-pointer text-[#FF4000] ml-[8px]">Log in</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
