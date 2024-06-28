import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-page">
      <div className="left-side"></div>
      <div className="right-side">
        <div className="signin-option">
          <a href="/">
            <p>Already have an account? Sign In.</p>
          </a>
        </div>
        <div className="signup-card">
          <h1>Sign Up</h1>
          <div className="signup-details">
            <form>
              <label>
                <h3>Name</h3>
                <input type="text" placeholder="Enter full name" required />
              </label>
              <label>
                <h3>Phone Number</h3>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  required
                />
              </label>
              <label>
                <h3>Email</h3>
                <input
                  type="text"
                  placeholder="Enter email (if you have any)"
                />
              </label>
              <label>
                <h3>Password</h3>
                <input type="password" placeholder="Enter password" required />
              </label>
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
