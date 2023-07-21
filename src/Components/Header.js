import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  //useEffect(callback Fun, dependecy Array)
  useEffect(() => {
    console.log("useEffect called");
  }, [btnName]);

  const handleLoginClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      setBtnName("Login");
    } else {
      setIsLoginOpen(true);
    }
  };

  const handleLoginClose = () => {
    setIsLoginOpen(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsLoginOpen(false);
    setBtnName("Logout");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="app-logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button className="login-button" onClick={handleLoginClick}>
            {btnName}
          </button>
        </ul>
      </div>
      {isLoginOpen && (
        <Login onClose={handleLoginClose} onLogin={handleLogin} />
      )}
    </div>
  );
};

const Login = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log("Login submitted:", email, password);
    onLogin();
    onClose();
  };

  return (
    <div className="login-modal">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="login-submit">
          Login
        </button>
      </form>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Header;
