import { registerUser } from "./authServie";
import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkValidData } from "../utils/validate";
import UserContext from "../utils/User";

const Register = () => {

  const {setUser} = useContext(UserContext);

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState({});
  const [avatarPreview, setAvatarPreview] = useState("/avatar.jpg");
  const [avatarFile, setAvatarFile] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const username = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveAvatar = () => {
    setAvatarFile(null);
    setAvatarPreview("/avatar.jpg"); 
  };

  const handleRegister = async () => {
    // Frontend validation
    const message = checkValidData({
      email: email.current.value,
      password: password.current.value,
      confirmPassword: confirmPassword.current.value,
      userName: username.current.value,
      mode: "register",
    });

    setErrorMessage(message || {});
    if (message) return;

    const formData = new FormData();
    if (avatarFile) formData.append("avatar", avatarFile);

    formData.append("email", email.current.value);
    formData.append("username", username.current.value);
    formData.append("password", password.current.value);
    formData.append("password_confirmation", confirmPassword.current.value);

    try {
      const response = await registerUser(formData);
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        localStorage.setItem("token", data.token);
         localStorage.setItem("avatarUrl", avatarPreview);

        if (data.user?.profile_photo) {
          localStorage.setItem("avatarUrl", data.user.profile_photo);
          
        } else {
          localStorage.setItem("avatarUrl", avatarPreview);
        }

        setUser(data.user?.username, avatarFile);

        navigate("/login");
      } else {
        setErrorMessage(data.errors || {});
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex">
      <div>
        <img src="/registerImg.png" alt="Register illustration" />
      </div>

      <div className="ml-[173px] my-[152px]">
        <div className="w-[554px]">
          <form onSubmit={(e) => e.preventDefault()}>
            <h1 className="text-[42px] font-semibold mb-[48px]">
              Registration
            </h1>

            {/* Avatar Upload */}
            <div className="flex items-center text-[#3E424A] mb-[24px]">
              <img
                src={avatarPreview}
                alt="Avatar Preview"
                className="w-[100px] h-[100px] rounded-full object-cover"
              />

              <label htmlFor="avatar" className="mx-[15px] cursor-pointer">
                Upload new
              </label>
              <input
                type="file"
                id="avatar"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />

              <button type="button" onClick={handleRemoveAvatar}>
                Remove
              </button>
            </div>

            <input
              ref={username}
              className={`w-full h-[42px] rounded-[8px] pl-[12px] mb-[6px] border ${
                errorMessage.username ? "border-[#FF4000]" : "border-[#E1DFE1]"
              }`}
              type="text"
              name="username"
              placeholder="Username"
            />
            {errorMessage.username && (
              <p className="text-[10px] text-[#FF4000]">
                {errorMessage.username}
              </p>
            )}

            <input
              ref={email}
              className={`w-full h-[42px] rounded-[8px] pl-[12px] mt-[24px] mb-[6px] border ${
                errorMessage.email ? "border-[#FF4000]" : "border-[#E1DFE1]"
              }`}
              type="email"
              name="email"
              placeholder="Email"
            />
            {errorMessage.email && (
              <p className="text-[10px] text-[#FF4000]">{errorMessage.email}</p>
            )}

            <input
              ref={password}
              className={`w-full h-[42px] rounded-[8px] pl-[12px] mt-[24px] mb-[6px] border ${
                errorMessage.password ? "border-[#FF4000]" : "border-[#E1DFE1]"
              }`}
              type="password"
              name="password"
              placeholder="Password"
            />
            {errorMessage.password && (
              <p className="text-[10px] text-[#FF4000]">
                {errorMessage.password}
              </p>
            )}

            <input
              ref={confirmPassword}
              className={`w-full h-[42px] rounded-[8px] pl-[12px] mt-[24px] mb-[6px] border ${
                errorMessage.confirmPassword
                  ? "border-[#FF4000]"
                  : "border-[#E1DFE1]"
              }`}
              type="password"
              name="password_confirmation"
              id="password_confirmation"
              placeholder="Confirm password"
            />
            {errorMessage.confirmPassword && (
              <p className="text-[10px] text-[#FF4000]">
                {errorMessage.confirmPassword}
              </p>
            )}

            <button
              onClick={handleRegister}
              className="w-full h-[41px] bg-orange-600 text-white rounded-[10px] mt-[46px]"
            >
              Register
            </button>
          </form>

          <div className="mt-[26px] text-center">
            <span className="text-[#3E424A] text-[14px]">Already member?</span>
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
