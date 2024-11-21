import mainLogo from "../../assets/app-logo.jpg";
import { useState } from "react";
import * as ReactRouterDOM from "react-router-dom";

// const loggedInUser = () => {
//   // API call to check authentication
//   return false;
// };
console.log(ReactRouterDOM);
const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={mainLogo} />
  </a>
);
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li className="right-margin">
            <ReactRouterDOM.Link to="/">Home</ReactRouterDOM.Link>
          </li>
          <ReactRouterDOM.Link to="/about">
            <li className="right-margin">About</li>
          </ReactRouterDOM.Link>
          <ReactRouterDOM.Link to="/contact">
            <li className="right-margin">Contact</li>
          </ReactRouterDOM.Link>
          <li className="right-margin">Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button className="login-button" onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <button className="login-button" onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      )}
    </div>
  );
};
export default Header;
