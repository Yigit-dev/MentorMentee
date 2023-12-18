const mongoose = require("mongoose");

const menteeSchema = new mongoose.Schema({
  lessons: [
    {
      lesson_name: { type: String, required: true },
      lesson_content: { type: String, required: true },
      mentor_id: {
        type: mongoose.Types.ObjectId,
        ref: "Mentor",
        required: true,
      },
    },
  ],
  user_id: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  mentor_id: { type: mongoose.Types.ObjectId, ref: "Mentor", required: true },
  tasks: [
    {
      task_name: { type: String, required: true },
      task_content: { type: String, required: true },
      isDone: { type: Boolean, default: false },
      deadline: { type: Date },
      mentor_id: {
        type: mongoose.Types.ObjectId,
        ref: "Mentor",
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Mentee", menteeSchema);
