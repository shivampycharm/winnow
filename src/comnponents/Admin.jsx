import React from "react";

import "./../style/admin.css";
// import SigninNav from "./SigninNav";

function Admin() {
  return (
    <section className="admin-sec">
      {/* <SigninNav /> */}
      <h1>Admin Panel</h1>
      <div className="user">
        <button>Add User</button>
        <button>Remove User</button>
      </div>
      <div className="trade">
        <button>Add Trader</button>
        <button>Remove Trader</button>
      </div>
      <div>
        <button>User Portfolio</button>
      </div>
    </section>
  );
}

export default Admin;
