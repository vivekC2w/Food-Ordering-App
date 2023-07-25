import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import Login from "./Login";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [btnName, setBtnName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);

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
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
      {isLoginOpen && (
        <Login onClose={handleLoginClose} onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Header;
