import React from "react";

import "./../style/traderProfile.css";
import SigninNav from "./SigninNav";

function TraderProfile() {
  return (
    <>
      <SigninNav />
      <section className="traderprofile-sec">
        <h2>Shivam Dubey</h2>
        <div className="video"></div>
        <div className="info">
          <h2>Personal Information</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Asperiores, magnam. Porro tempore deleniti excepturi, maxime ipsam
            voluptatem libero? Soluta quia quos et ut non, laboriosam tenetur
            explicabo, obcaecati esse similique omnis officia facere, laborum
            incidunt!
          </p>
        </div>
        <div className="strategy">
          <h2>Trading Strategy</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod fuga
            tempore maxime perspiciatis ipsum incidunt architecto minus atque
            quasi qui commodi assumenda, aliquid obcaecati repellendus voluptate
            quas ab, nihil nulla laudantium ex. Labore laboriosam dicta porro
            beatae, quia odit ex! Nobis nam iusto repellendus consequuntur culpa
            beatae accusantium omnis adipisci?
          </p>
        </div>
        <button>Copy Strategy</button>
        <form className="stategy-form">
          <div className="input">
            <input type="text" placeholder="Trader Id" />
            <input type="text" placeholder="Broker" />
            <input type="text" placeholder="User Id" />
            <input type="text" placeholder="Name" />
            <input type="password" placeholder="API Key" />
            <input type="password" placeholder="Password" />
            <div className="date">
              <label htmlFor="date">Date of Birth</label>
              <input type="date" id="date" />
            </div>
            <input type="text" placeholder="Multiplier" />
          </div>
          <div className="conf-btn">
            <button>Confirm Copy</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default TraderProfile;
