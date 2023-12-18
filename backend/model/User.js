const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  eposta: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["Mentor", "Mentee"], required: true },
  hakkımda: { type: String },
});

module.exports = mongoose.model("User", userSchema);
