import "./logo.svg";
import "./App.css";
import Header from "../src/Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="App">
      {/* if path = / */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
