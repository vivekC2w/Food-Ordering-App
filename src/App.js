import "./logo.svg";
import "./App.css";
import Header from "../src/Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    //Make an api call and send username and password
    const data = {
      name: "Vivek Hiray",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="App">
          {/* if path = / */}
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

export default AppLayout;
