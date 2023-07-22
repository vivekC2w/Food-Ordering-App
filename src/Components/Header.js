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
    <div className="flex justify-between bg-gray-100 shadow-lg m-2">
      <div className="logo-container">
        <img className="w-28" alt="app-logo" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="px-4 bg-green-400 rounded-lg"
            onClick={handleLoginClick}
          >
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
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 md:p-8 rounded-md shadow-md w-80 md:w-96 max-w-90% z-50">
      <h2 className="text-lg font-bold mt-0">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="mb-4">
          <label htmlFor="email" className="font-bold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="p-2 border rounded-md border-gray-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="font-bold">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="p-2 border rounded-md border-gray-300"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white border-none py-2 px-4 rounded-md cursor-pointer"
        >
          Login
        </button>
      </form>
      <button
        className="bg-red-600 text-white border-none py-2 px-4 rounded-md cursor-pointer mt-4"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default Header;
