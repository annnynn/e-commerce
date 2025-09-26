import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex">
      <div>
        <img src="/registerImg.png" />
      </div>
      <div className="ml-[173px] my-[246px]">
        <h1 className="text-[42px] font-semibold">Log in</h1>
        <div className="w-[554px] h-[240px]">
          
          <form>
            <div>
              <div>
                <input
                  className="w-full h-[42px] border border-[#E1DFE1] rounded-[8px] pl-[12px] mt-[48px]"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  className="w-full h-[42px] border border-[#E1DFE1] rounded-[8px] pl-[12px] mt-[24px] mb-[46px]"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <Link to="/">
              <button className="w-full h-[41px] bg-orange-600 text-[#FFFFFF] rounded-[10px]">Log in</button>
            </Link>
          </form>
          <div className="mt-[26px] text-center">
            <span className="text-[#3E424A] text-[14px]">Not a member?</span>
            <Link to="/register">
              <button className="cursor-pointer text-[#FF4000] ml-[8px]">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
