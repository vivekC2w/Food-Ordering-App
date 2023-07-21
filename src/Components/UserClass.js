import React from "react";

class UserClass extends React.Component {
  //1.Constructor will be called
  constructor(props) {
    super(props);

    this.state = {
      userInfo: "Dummy",
      location: "Default",
      avatar_url: "http://dummy-photo",
      // console.log("Child Constructor");
    };
  }
  //3. component is mount
  //Use to make an API Call
  async componentDidMount() {
    // console.log("Child Component Did Mount");
    //api calls
    const data = await fetch("https://api.github.com/users/vivekC2w");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  //2. Render will be called
  render() {
    const { login, id, avatar_url } = this.state.userInfo;

    // console.log("Child Render");

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Login: {login}</h2>
        <h3>ID: {id}</h3>
        <h4>Contact: @vivekhiray123</h4>
      </div>
    );
  }
}

export default UserClass;
