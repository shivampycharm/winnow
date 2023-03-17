const ex = require("express");
const { route } = require("express/lib/application");
const Trader = require("../models/trader");

const router = ex.Router();

// To get the all users

router.get("/", async (req, res) => {
  try {
    const traders = await trader.find();
    res.json(traders);
  } catch (err) {
    res.json(err);
  }
});

// To get the single user

router.get("/:traderid", async (req, res) => {
  const traderid = req.params.traderid;

  try {
    const t = await User.findById(traderid);
    res.json(t);
  } catch (err) {
    res.json(err);
  }
});

// To create the user

router.post("/", async (req, res) => {
  try {
    const trader = await Trader.create(req.body);
    res.json(trader);
  } catch (err) {
    res.json(err);
  }
});

// To delete the user

router.delete("/:traderid", async (req, res) => {
  const traderid = req.params.traderid;
  try {
    const trader = await Trader.deleteOne({
      _id: traderid,
    });
    res.send("Trader has removed");
  } catch (err) {
    res.json(err);
  }
});

// To update the user

router.put("/:userid", async (req, res) => {
  const traderid = req.params.traderid;
  try {
    const trader = await Trader.updateOne({
      _id: traderid,
    });
    req.body;
    res.json(trader);
  } catch (err) {
    res.json(err);
  }
});

// Export the router
module.exports = router;

module.exports = router;
