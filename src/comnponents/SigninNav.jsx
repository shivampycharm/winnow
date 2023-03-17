import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/logo.png";

import "./../style/signupnav.css";

function SigninNav() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/traders">Traders</Link>
          </li>
          <li>
            <Link to="/myportfolio">My Portfolio</Link>
          </li>
          <li>
            <Link to="/login">Log Out</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SigninNav;
