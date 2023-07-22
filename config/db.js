const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONG_URI);
    console.log("data base contected");
  } catch (error) {
    console.log("errr", error);
  }
};

module.exports = connectDB;
