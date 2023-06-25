var mongoose = require("mongoose");

var playersSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  Innings: {
    type: Number,
  },
  Runs: {
    type: Number,
  },
  Highest: {
    type: Number,
  },
  Average: {
    type: Number,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Players = mongoose.model("Players", playersSchema);
module.exports = Players;
