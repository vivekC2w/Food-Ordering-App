import logo from "./logo.svg";
import App from "./App.css";
import React from "react";
import Header from "../src/Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

const AppLayout = () => {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default AppLayout;
