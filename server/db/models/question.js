const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: String,
  answer: String,
  created: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Questions-Answers", questionSchema);
