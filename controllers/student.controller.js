const Student = require("../models/student.model.js");

// create a student
const createStudent = async (req, res) => {
  try {
    await Student.create(req.body);
    res.status(201).send("Student created successfully!");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// get all students
const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// get a single student
const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (student === null) {
      return res.status(404).send("Student not found!");
    }
    res.status(200).send(student);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// update a student
const updateStudent = async (req, res) => {
  try {
    const query = req.body.query;
    const student = await Student.find(query);
    if (student === null) {
      return res.status(404).send("Student not found!");
    }

    await Student.findOneAndUpdate(req.body.query, req.body.update, {
      new: true,
    });
    res.status(201).send("Student updated successfully!");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Delete a student
const deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.status(200).send("Student deleted successfully!");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
