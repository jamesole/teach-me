const mongoose = require("mongoose");

const connectDB = async (url) => {
  try {
    mongoose.connect(url);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = connectDB;
