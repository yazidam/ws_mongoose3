const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const User = require("./models/User");
const app = express();
connectDB();
const port = 5000;

// User.create([
//   { firstName: "Ahmed", lastName: "Mejri", age: 24 },
//   { firstName: "Ali", lastName: "hamed", age: 29 },
//   { firstName: "Mohamed", lastName: "nahdi", age: 34 },
// ])
//   .then((res) => {
//     console.log("data", res);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });

User.find()
  .then((res) => {
    console.log("data", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`running on port ${port}`);
});
