import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <div className="heading">
            <a href="">
              <h1>OneFinance</h1>
            </a>
          </div>
        </li>
        <div className="links">
          <a href="">
            <li>Home</li>
          </a>
          <a href="">
            <li>Accounts</li>
          </a>
          <a href="">
            <li>Budget</li>
          </a>
          <a href="">
            <li>Market</li>
          </a>
          <a href="">
            <li>Logout</li>
          </a>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
