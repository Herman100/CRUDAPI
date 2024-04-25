const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required!"],
    },
    age: {
      type: Number,
      required: [true, "Age is required!"],
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
