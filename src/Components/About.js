import React, { useContext } from "react";
import UserContext from "../utils/UserContext";
import { LOGO_URL } from "../utils/constants";

const About = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white py-4 px-6 shadow-md">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Flavour Dash</h1>
            <div>
              {loggedInUser ? (
                <button className="px-4 py-2 bg-red-500 text-white rounded-md">
                  Logout
                </button>
              ) : (
                <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        <div className="flex justify-center items-center h-64">
          <img
            src={LOGO_URL}
            alt="Company Logo"
            className="w-32 h-32 rounded-full"
          />
        </div>
        <div className="text-center my-6">
          <h2 className="text-3xl font-semibold">About Us</h2>
          <p className="text-gray-600">
            We are a leading food delivery platform, connecting customers to
            their favorite restaurants.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 border border-gray-300 rounded-md">
            <h3 className="text-xl font-semibold">Quality Food</h3>
            <p className="text-gray-600">
              We ensure that our partner restaurants serve only the best quality
              food to our customers.
            </p>
          </div>
          <div className="text-center p-4 border border-gray-300 rounded-md">
            <h3 className="text-xl font-semibold">Fast Delivery</h3>
            <p className="text-gray-600">
              Our delivery partners work round the clock to ensure your food
              reaches you in the quickest time possible.
            </p>
          </div>
          <div className="text-center p-4 border border-gray-300 rounded-md">
            <h3 className="text-xl font-semibold">Easy Ordering</h3>
            <p className="text-gray-600">
              With our user-friendly app, ordering food has never been easier.
              Just a few taps and your food is on its way!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
