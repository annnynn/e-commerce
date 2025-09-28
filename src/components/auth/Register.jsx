import { registerUser } from "./authServie";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { checkValidData } from "../utils/validate";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState({});
  const [avatarPreview, setAvatarPreview] = useState("/avatar.jpg");
  const [avatarFile, setAvatarFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveAvatar = () => {
    setAvatarFile(null);
    setAvatarPreview("/avatar.jpg"); // დაააბრუნდება დეფაულთზე
  };

  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const username = useRef(null);

  const handleRegister = async () => {
    const message = checkValidData({
      email: email.current.value,
      password: password.current.value,
      confirmPassword: confirmPassword.current.value,
      userName: username.current.value,
      mode: "register",
    });

    setErrorMessage(message || {});
    if (message) return;

    if (avatarFile) {
      formData.append("avatar", avatarFile); 
    }

    const formData = new FormData();
    formData.append("email", email.current.value);
    formData.append("username", username.current.value);
    formData.append("password", password.current.value);
    formData.append("password_confirmation", confirmPassword.current.value);

    try {
      const response = await registerUser(formData);
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        console.log(data.token);
        navigate("/login");
      } else {
        setErrorMessage(data.errors);
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

      <div className="ml-[173px] my-[152px]">
        <div className="w-[554px] h-[240px]">
          <form onSubmit={(e) => e.preventDefault()}>
            <h1 className="text-[42px] font-semibold mb-[48px]">
              Registration
            </h1>
            {/**ფოტოს ატვირთვა */}
            <div className="flex items-center text-center text-[#3E424A]">
              <div>
                <img
                  src={avatarPreview}
                  alt="Avatar Preview"
                  // ამის მარჯინი მოსაკლები იქნება რეგისტრაიციის მარჯინზე
                  className="w-[100px] h-[100px] rounded-full object-cover"
                />
              </div>
              <div>
                <input
                  type="file"
                  id="avatar"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />

                <label htmlFor="avatar" className="mx-[15px]">
                  Upload new
                </label>
              </div>
              <div>
                <button type="button" onClick={handleRemoveAvatar}>
                  Remove
                </button>
              </div>
            </div>

            <>
              <input
                ref={username}
                className={`w-full h-[42px] rounded-[8px] pl-[12px] mt-[48px] border ${
                  errorMessage.username
                    ? "border-[#FF4000]"
                    : "border-[#E1DFE1]"
                }`}
                type="text"
                name="username"
                id="username"
                placeholder="Username"
              />
              {errorMessage.username && (
                <p className="text-[10px] text-[#FF4000] mt-[4px] ml-[6px]">
                  {errorMessage.username}
                </p>
              )}
            </>

            <>
              <input
                className={`w-full h-[42px] rounded-[8px] pl-[12px] border mt-[24px] ${
                  errorMessage.email ? "border-[#FF4000]" : "border-[#E1DFE1]"
                }`}
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

            <>
              <input
                className={`w-full h-[42px] border rounded-[8px] pl-[12px] mt-[24px] ${
                  errorMessage.confirmPassword
                    ? "border-[#FF4000]"
                    : "border-[#E1DFE1]"
                }`}
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

            <button
              onClick={handleRegister}
              className="w-full h-[41px] bg-orange-600 text-[#FFFFFF] rounded-[10px] mt-[46px]"
            >
              Register
            </button>
          </form>
          <div className="mt-[26px] text-center">
            <span className="text-[#3E424A] text-[14px] cursor-pointer">
              Already member?
            </span>
            <Link to="/login" className="text-[#FF4000] ml-[8px]">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
