const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      required: true,
    },
    dept: String,
    sports: [],
  },
  { timestamps: true }
);

const Student = mongoose.model("students", StudentSchema);

module.exports = Student;
