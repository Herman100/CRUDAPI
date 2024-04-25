const express = require("express");
const router = express.Router();
const {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/student.controller");

// create a student
router.post("/", createStudent);

//get all students
router.get("/", getStudents);

//get a single student
router.get("/:id", getStudentById);

//update a student
router.put("/", updateStudent);

//delete a student
router.delete("/:id", deleteStudent);

module.exports = router;
