const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const usersRouter = require("./routes/users");
// const loginRouter = require("./routes/login");
const tradersRouter = require("./routes/traders");

require("dotenv").config();

const app = express();

// const URL =
//   "mongodb+srv://winnowbiz:Qwerty12345@cluster0.wmpsfsv.mongodb.net/winnow?retryWrites=true&w=majority";

const URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQlDo5I1UJPvQDlrztY0Mq8wB8pRZsLcQCbOV8b4xsKQRJ8d2FF-8HT3WUtkrzJY6ttqLqZAk3LXgAN/pub?gid=1201252444&single=true&output=csv";

async function connect() {
  try {
    await mongoose.connect(URL);
    console.log("connected with database");
  } catch (err) {
    console.log(`Error -> ${err}`);
  }
}

connect();

//=============== Routes ==================

app.use(bodyParser.json());

app.use("/users", usersRouter);
// app.use("/login", loginRouter);
app.use("/traders", tradersRouter);

app.listen(process.env.PORT, () => {
  console.log("server has started");
});
