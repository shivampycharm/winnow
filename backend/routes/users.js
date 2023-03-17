const ex = require("express");
const { route } = require("express/lib/application");
const User = require("../models/user");

const router = ex.Router();

// To get the all users

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json(err);
  }
});

// To get the single user

router.get("/:userid", async (req, res) => {
  const userid = req.params.userid;

  try {
    const u = await User.findById(userid);
    res.json(u);
  } catch (err) {
    res.json(err);
  }
});

// To create the user

router.post("/", async (req, res) => {
  try {
    // console.log(req.body);
    const { fname, lname, username, email, password } = req.body;
    User.findOne({ email: email }, (err, user) => {
      if (user) {
        res.send({ message: "User already registered" });
      } else {
        const user = new User({
          fname,
          lname,
          username,
          email,
          password,
        });
        user.save((err) => {
          if (err) {
            res.send(err);
          } else {
            res.send({ message: "Successfully Registered" });
          }
        });
      }
    });
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});

// To delete the user

router.delete("/:userid", async (req, res) => {
  const userid = req.params.userid;
  try {
    const user = await User.deleteOne({
      _id: userid,
    });
    res.send("User has removed");
  } catch (err) {
    res.json(err);
  }
});

// To update the user

router.put("/:userid", async (req, res) => {
  const userid = req.params.userid;
  try {
    const user = await User.updateOne({
      _id: userid,
    });
    req.body;
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});

// Export the router
module.exports = router;
