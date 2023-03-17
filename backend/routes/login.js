const ex = require("express");
const { route } = require("express/lib/application");
const Trader = require("../models/trader");

const router = ex.Router();

router.post("/", async (req, res) => {
  try {
    // console.log(req.body);
    const { email, password } = req.body;
    User.findOne({ email: email }, (err, user) => {
      if (user) {
        if (password === user.password) {
          res.send({ message: "Login successful", user: user });
        } else {
          res.send({ message: "Invalid password", user: user });
        }
      } else {
        res.send({ message: "User is not registered" });
      }
    });
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});
