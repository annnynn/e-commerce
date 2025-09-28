import { useRef, useState } from "react";
import { loginUser } from "../auth/authServie";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState({});

  const email = useRef(null);
  const password = useRef(null);

  const handleLogin = async () => {
    try {
      const response = await loginUser(
        email.current.value,
        password.current.value
      );
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate("/");
        setErrorMessage({});
      } else {
        const errors = {};

        if (data.errors) {
          Object.keys(data.errors).forEach((key) => {
            errors[key] = data.errors[key][0];
          });
        }

        if (response.status === 401 && data.message) {
          errors.general = data.message;
        }

        setErrorMessage(errors);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex">
      <div>
        <img src="/registerImg.png" />
      </div>

      <div className="ml-[173px] my-[246px]">
        <div className="w-[554px] h-[240px]">
          <form onSubmit={(e) => e.preventDefault()}>
            <h1 className="text-[42px] font-semibold">Log in</h1>

            <input
              ref={email}
              type="email"
              name="email"
              placeholder="Email"
              className={`w-full h-[42px] rounded-[8px] pl-[12px] border mt-[24px] ${
                errorMessage.email ? "border-[#FF4000]" : "border-[#E1DFE1]"
              }`}
            />
            {errorMessage.email && (
              <p className="text-[10px] text-[#FF4000] mt-[4px] ml-[6px]">
                {errorMessage.email}
              </p>
            )}

            <input
              ref={password}
              type="password"
              name="password"
              placeholder="Password"
              className={`w-full h-[42px] rounded-[8px] pl-[12px] mt-[24px] border ${
                errorMessage.password ? "border-[#FF4000]" : "border-[#E1DFE1]"
              }`}
            />
            {errorMessage.password && (
              <p className="text-[10px] text-[#FF4000] mt-[4px] ml-[6px]">
                {errorMessage.password}
              </p>
            )}

            {email && password == null && errorMessage.general && (
              <p className="text-[10px] text-[#FF4000] mt-[4px] ml-[6px]">
                {errorMessage.general}
              </p>
            )}

            {errorMessage.general && (
              <p className="text-[10px] text-[#FF4000] mt-[4px] ml-[6px]">
                {errorMessage.general}
              </p>
            )}
            <button
              onClick={handleLogin}
              className="w-full h-[41px] bg-orange-600 text-[#FFFFFF] rounded-[10px] mt-[46px]"
            >
              Log in
            </button>
          </form>

          <div className="mt-[26px] text-center">
            <span className="text-[#3E424A] text-[14px] cursor-pointer">
              Not a member?
            </span>
            <Link to="/register" className="text-[#FF4000] ml-[8px]">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
