import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { registerUser, loginUser } from "../auth/authServie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [isLoginForm, setisLoginForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState({});

  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const userName = useRef(null);

  const handleBtnClick = async () => {
    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = checkValidData({
      email: email.current?.value,
      password: password.current?.value,
      confirmPassword: confirmPassword.current?.value,
      userName: userName.current?.value,
      mode: isLoginForm ? "login" : "register",
    });

    setErrorMessage(message || {});
    console.log(errorMessage);

    if (message) return;

    const formData = new FormData();
    formData.append("email", email.current?.value);
    formData.append("username", userName.current?.value);
    // avatar
    formData.append("password", password.current?.value);
    formData.append("password_confirmation", confirmPassword.current?.value);

    if (!isLoginForm) {
      try {
        const response = await registerUser(formData);
        const data = await response.json();
        if (response.ok) {
          localStorage.setItem("token", data.token);
          console.log(data.token);
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await loginUser(
          email.current?.value,
          password.current?.value
        );

        const data = await response.json();

        if (response.ok) {
          console.log("redirect productlist oage");
        } else {
          setErrorMessage(data.errors || {});
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

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
              <>
                <input
                  ref={userName}
                  className={`w-full h-[42px] rounded-[8px] pl-[12px] mt-[48px] border ${
                    errorMessage.userName
                      ? "border-[#FF4000]"
                      : "border-[#E1DFE1]"
                  }`}
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="Username"
                />
                {errorMessage.userName && (
                  <p className="text-[10px] text-[#FF4000] mt-[4px] ml-[6px]">
                    {errorMessage.userName}
                  </p>
                )}
              </>
            )}

            <>
              <input
                className={`w-full h-[42px] rounded-[8px] pl-[12px] border ${
                  errorMessage.email ? "border-[#FF4000]" : "border-[#E1DFE1]"
                }  
                  ${!isLoginForm ? "mt-[24px]" : "mt-[48px]"}`}
                ref={email}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              {errorMessage.email && (
                <p className="text-[10px] text-[#FF4000] mt-[4px] ml-[6px]">
                  {errorMessage.email}
                </p>
              )}
            </>

            <>
              <input
                ref={password}
                className={`w-full h-[42px] rounded-[8px] pl-[12px] mt-[24px] border ${
                  errorMessage.password
                    ? "border-[#FF4000]"
                    : "border-[#E1DFE1]"
                }`}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              {errorMessage.password && (
                <p className="text-[10px] text-[#FF4000] mt-[4px] ml-[6px]">
                  {errorMessage.password}
                </p>
              )}
            </>

            {!isLoginForm && (
              <>
                <input
                  className={`w-full h-[42px] border rounded-[8px] pl-[12px] mt-[24px] ${
                    errorMessage.confirmPassword
                      ? "border-[#FF4000]"
                      : "border-[#E1DFE1]"
                  }
                    
                    ${!isLoginForm ? "mb-[0px]" : "mb-[46px]"}`}
                  ref={confirmPassword}
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm password"
                />
                {errorMessage.confirmPassword && (
                  <p className="text-[10px] text-[#FF4000] mt-[4px] ml-[6px]">
                    {errorMessage.confirmPassword}
                  </p>
                )}
              </>
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
