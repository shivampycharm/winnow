import React from "react";
import { Link } from "react-router-dom";
import me from "./../assets/me.jpeg";

import "./../style/traders.css";
import SigninNav from "./SigninNav";

function Traders() {
  return (
    <>
      <SigninNav />
      <section className="traders-sec">
        <h1>Traders List</h1>
        <div className="traders-btn">
          <button>All Traders</button>
          <button>My Traders</button>
        </div>

        <div className="traders">
          <div className="trader-img">
            <img src={me} alt="Trader" />
          </div>
          <div className="details">
            <h2>Shivam Dubey</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              quasi autem natus error accusamus eum, debitis obcaecati nisi
              vitae! Repellendus.
            </p>
            <Link to={`/traderprofile`}>
              <button>Show more</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Traders;
