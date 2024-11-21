import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    // Create State
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    //console.log("Child - Constructor" + this.props.name);
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sarikaRKshatriya");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did Update");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    //console.log("ComponentWillUnmount");
  }
  render() {
    const { count } = this.state;
    //console.log("Child - render" + this.props.name);
    return (
      <div>
        <h1> User details </h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
      </div>
    );
  }
}
export default ProfileClass;
