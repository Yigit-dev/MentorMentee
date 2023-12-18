const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  mentees: [{ type: mongoose.Types.ObjectId, ref: "Mentee" }],
  categories: [{ type: String, required: true }],
  user_id: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Mentor", mentorSchema);
