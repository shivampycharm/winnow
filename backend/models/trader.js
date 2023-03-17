const mongoose = require("mongoose");

const traderSchema = new mongoose.Schema({
  fname: {
    type: String,
    require: true,
  },
  lname: {
    type: String,
    require: true,
  },
  traderid: {
    type: String,
    require: true,
  },
  dob: {
    type: Date,
    require: true,
  },
  video: {
    type: String,
    require: true,
  },
  information: {
    type: String,
  },
  stategy: {
    type: String,
  },
});

module.exports = mongoose.model("Trader", traderSchema);
