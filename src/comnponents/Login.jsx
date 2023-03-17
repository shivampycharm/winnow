import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./../style/login.css";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <section className="login-sec">
      <div className="login">
        <input
          id="emailid"
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email Id"
          autoComplete="off"
          required
        />
        <input
          id="password"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Password"
          autoComplete="off"
          required
        />
        <button className="login-btn">Login</button>
        <p>
          If you are not registered, then please
          <span>
            {/* <a href="./Signup" className="signup-btn">
              Sign up
            </a> */}
            <Link to={`/signup`} className="signup-btn">
              Sign Up
            </Link>
          </span>
        </p>
      </div>
    </section>
  );
}

export default Login;
