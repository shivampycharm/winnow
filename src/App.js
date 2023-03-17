import { Route, Routes } from "react-router-dom";
import Admin from "./comnponents/Admin";
import Login from "./comnponents/Login";
import MyPortfolio from "./comnponents/MyPortfolio";
import Signup from "./comnponents/Signup";
import TraderProfile from "./comnponents/TraderProfile";
import Traders from "./comnponents/Traders";

function App() {
  return (
    <div className="App">
      {/* <TraderProfile /> */}
      {/* <Signup /> */}
      {/* <Traders /> */}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/traders" element={<Traders />} />
        <Route path="/traderprofile" element={<TraderProfile />} />
        <Route path="/myportfolio" element={<MyPortfolio />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
