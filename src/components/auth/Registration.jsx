const Registration = () => {
  return (
    <div>
      <div>
        <img src="/registerImg.png"/>
      </div>

      <div>
        <h1>Registration</h1>
        <div className="flex items-center">
          <img />
          <span>Upload new</span>
          <button>Remove</button>
        </div>

        <div>
            <form>
                <div>
                   <input type="text" name="userName" id="userName" placeholder="Username"/>
                </div>
                <div>
                    <input type="email" name="email" id="email" placeholder="Email"/>
                </div>
                <div>
                    <input type="password" name="password" id="password" placeholder="Password"/>
                </div>
                <div>
                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password"/>
                </div>
                <button>Register</button>
            </form>

            <div>
                <span>Already member? Log in</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;