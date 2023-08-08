/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

const Grocery = () => {
  const [groceryItems, setGroceryItems] = useState([
    { id: 1, name: "Apples", price: 2.99, quantity: 10 },
    { id: 2, name: "Bananas", price: 1.99, quantity: 8 },
    { id: 3, name: "Oranges", price: 3.49, quantity: 12 },
    { id: 4, name: "Milk", price: 2.49, quantity: 6 },
    { id: 5, name: "Eggs", price: 2.99, quantity: 24 },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Grocery Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groceryItems.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-600">Price: ${item.price}</p>
            <p className="text-gray-600">Quantity: {item.quantity}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="bg-white p-4 rounded-md shadow-md">
            {cartItems.map((item) => (
              <li key={item.id} className="text-gray-600">
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Grocery;
