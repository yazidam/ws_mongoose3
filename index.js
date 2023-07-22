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

// User.find()
//   .then((res) => {
//     console.log("data", res);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });

// const deleteUser = async (req, res) => {
//   const user = await User.findById("64bbede6437c89a165d1fb8e");
//   console.log("user", user);
//   if (user) user.deleteOne();
// };

// deleteUser();

const updateUser = async (req, res) => {
  const user = await User.findById("64bbede6437c89a165d1fb8d");

  if (user) {
    console.log("user found", user);
    user.firstName = "updatedname";

    await user.save();
  }
};

updateUser();
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`running on port ${port}`);
});
