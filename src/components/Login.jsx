import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [showPass, setshowPass] = useState(false);
  return (
    <div className="login-page">
      <div className="left"></div>
      <div className="right">
        <div className="card">
          <div className="login-details">
            <div className="heading">
              <h1>Login</h1>
            </div>
            <div className="fields">
              <form>
                <label>
                  <h3>Phone Number</h3>
                  <input type="text" placeholder="Enter phone number" />
                </label>
                <label>
                  <h3>Password</h3>
                  <div className="password-field">
                    <input
                      type={showPass ? "text" : "password"}
                      placeholder="Enter password"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setshowPass(!showPass);
                      }}
                    >
                      <img
                        src={
                          showPass
                            ? require("./utils/hide.png")
                            : require("./utils/visibility.png")
                        }
                        alt=""
                      />
                    </button>
                  </div>
                  <div className="options">
                    <a href="/signup">
                      <p>Don't have an account? Sign Up</p>
                    </a>
                    <a href="/forgot">
                      <p>Forgot password ?</p>
                    </a>
                  </div>
                </label>
                <button className="login-btn" type="submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
