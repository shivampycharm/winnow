import React, { useState } from "react";
import axios from "axios";

import "./../style/signup.css";
import { Link } from "react-router-dom";

function Signup() {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    username: "",
    dob: "",
    email: "",
    crpassword: "",
    cfpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <section className="signup-sec">
      <div className="signup">
        <div className="name">
          <input
            id="fname"
            type="text"
            name="fname"
            value={user.fname || ""}
            onChange={handleChange}
            placeholder="First Name"
            autoComplete="off"
            required
          />
          <input
            id="lname"
            type="text"
            name="fname"
            value={user.fname || ""}
            onChange={handleChange}
            placeholder="Last Name"
            autoComplete="off"
            required
          />
          <input
            id="username"
            type="text"
            name="lname"
            value={user.lname}
            onChange={handleChange}
            placeholder="Username"
            autoComplete="off"
            required
          />
          <input
            id="dob"
            type="date"
            name="date"
            value={user.date}
            onChange={handleChange}
            dob="Username"
            autoComplete="off"
            required
          />
        </div>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email id"
          autoComplete="off"
          required
        />
        <input
          id="crpassword"
          type="password"
          name="crpassword"
          value={user.crpassword}
          onChange={handleChange}
          placeholder="Create Password"
          autoComplete="off"
          required
        />
        <input
          id="cfpassword"
          type="password"
          name="cfpassword"
          value={user.cfpassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          autoComplete="off"
          required
        />

        <Link to={`/traders`}>
          <button className="signup-btn">Sign up</button>
        </Link>
      </div>
    </section>
  );
}

export default Signup;
