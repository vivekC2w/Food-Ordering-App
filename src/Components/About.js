import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component did mount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About</h1>
        <h2>This is AboutUs Page</h2>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-lg font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        {/* <User name={"Vivek Hiray (functional Component)"} /> */}
        <UserClass
          name={"Vivek Hiray (Class Based Component)"}
          location={"Pune, Hadapsar"}
        />
      </div>
    );
  }
}

export default About;
