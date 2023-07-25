import { useState } from "react";

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

export default Login;
