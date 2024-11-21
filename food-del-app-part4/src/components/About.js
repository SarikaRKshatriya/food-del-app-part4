// const About = () => {
//   return (
//     <div>
//       <h1>About Us Page</h1>
//       <p>
//         {" "}
//         This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
//       </p>
//     </div>
//   );
// };

import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./Profileclass";
import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    //console.log("Parent - constructor");
  }
  componentDidMount() {
    // Best place to make an Api call
    //console.log("Parent - componentDidMount");
  }
  render() {
    //console.log("Parent - render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>
          This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
        </p>
        <ProfileClass />
      </div>
    );
  }
}
export default About;
