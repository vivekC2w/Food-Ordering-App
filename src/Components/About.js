import { Component } from "react";
import UserClass from "./UserClass";

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
        <h2>This is Namaste React Web Series</h2>
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
