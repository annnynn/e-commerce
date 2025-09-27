import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isLoginForm, setisLoginForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const userName = useRef(null);

  const handleBtnClick = () => {
    //აქ ინება ვალიდაცია
    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(
      email.current?.value,
      password.current?.value,
      confirmPassword.current?.value,
      userName.current?.value
    );

    setErrorMessage(message);

    // tu validuri ikenba log in / registration
  };

  console.log(isLoginForm);
  const toggleRegisterForm = () => {
    setisLoginForm(!isLoginForm);
    console.log(isLoginForm);
  };

  return (
    <div className="flex">
      <div>
        <img src="/registerImg.png" />
      </div>

      <div className="ml-[173px] my-[246px]">
        <div className="w-[554px] h-[240px]">
          <form onSubmit={(e) => e.preventDefault()}>
            <h1 className="text-[42px] font-semibold">
              {!isLoginForm ? "Register" : "Log in"}
            </h1>

            {!isLoginForm && (
              <input
                ref={userName}
                className="w-full h-[42px] border border-[#E1DFE1] rounded-[8px] pl-[12px] mt-[48px]"
                type="text"
                name="userName"
                id="userName"
                placeholder="Username"
              />
            )}

            <input
              className={`w-full h-[42px] border border-[#E1DFE1] rounded-[8px] pl-[12px] ${
                !isLoginForm ? "mt-[24px]" : "mt-[48px]"
              }`}
              ref={email}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />

            <input
              ref={password}
              className="w-full h-[42px] border border-[#E1DFE1] rounded-[8px] pl-[12px] mt-[24px]"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />

            <p className="text-[10px] text-[#FF4000] mt-[4px] ml-[6px]">
              {errorMessage}
            </p>

            {!isLoginForm && (
              <input
                className={`w-full h-[42px] border border-[#E1DFE1] rounded-[8px] pl-[12px] mt-[24px] ${
                  !isLoginForm ? "mb-[0px]" : "mb-[46px]"
                }`}
                ref={confirmPassword}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm password"
              />
            )}
            <button
              onClick={handleBtnClick}
              className="w-full h-[41px] bg-orange-600 text-[#FFFFFF] rounded-[10px] mt-[46px]"
            >
              {!isLoginForm ? "Register" : "Log in"}
            </button>
          </form>
          <div className="mt-[26px] text-center">
            <p
              className="text-[#3E424A] text-[14px] cursor-pointer"
              onClick={toggleRegisterForm}
            >
              {!isLoginForm ? (
                <>
                  <span>Already member?</span>
                  <span className="text-[#FF4000] ml-[8px]">Log in</span>
                </>
              ) : (
                <>
                  <span>Not a member?</span>
                  <span className="text-[#FF4000] ml-[8px]">Register</span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
