import React from "react";
import SigninNav from "./SigninNav";

import "./../style/myportfolio.css";

function MyPortfolio() {
  return (
    <section className="myportfolio-sec">
      <SigninNav />
      <h2>My Port-Folio</h2>
      <div className="table">
        <h3>My Traders</h3>
        <table>
          <thead>
            <tr>
              <th>Name of Traders</th>
              <th>Date Started</th>
              <th>Total Profit/Loss</th>
              <th>Status</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="returns">
        <p>My Returns</p>
        <p className="number">66516651</p>
      </div>
      <div className="table">
        <h3>Current Traders</h3>
        <table>
          <thead>
            <tr>
              <th>Name of Traders</th>
              <th>Date Started</th>
              <th>Total Profit/Loss</th>
              <th>Status</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="table">
        <h3>Past Traders</h3>
        <table>
          <thead>
            <tr>
              <th>Name of Stocks</th>
              <th>Name of Trader</th>
              <th>Entry Position</th>
              <th>Loss</th>
            </tr>
          </thead>
        </table>
      </div>
    </section>
  );
}

export default MyPortfolio;
