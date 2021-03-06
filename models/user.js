const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  // date: { type: Date, default: Date.now }
  stocks:{ type: Array},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
