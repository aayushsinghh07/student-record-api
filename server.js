// Importing required modules
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// ========================
// MongoDB Connection Setup
// ========================
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

// ========================
// Schema and Model
// ========================
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  course: {
    type: String,
    required: [true, "Course is required"],
  },
  age: Number,
  city: String,
});

const Student = mongoose.model("Student", studentSchema);

// ========================
// Routes
// ========================

// 1️⃣ Fetch all students
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: "Error fetching students", error: err });
  }
});

// 2️⃣ Add new student
app.post("/students", async (req, res) => {
  try {
    const { name, course, age, city } = req.body;

    // Basic validation
    if (!name || !course) {
      return res.status(400).json({ message: "Name and Course are required" });
    }

    const newStudent = new Student({ name, course, age, city });
    await newStudent.save();

    res.status(201).json({ message: "Student added successfully", newStudent });
  } catch (err) {
    res.status(500).json({ message: "Error adding student", error: err });
  }
});

// 3️⃣ Update student info by ID
app.put("/students/:id", async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res
      .status(200)
      .json({ message: "Student updated successfully", updatedStudent });
  } catch (err) {
    res.status(500).json({ message: "Error updating student", error: err });
  }
});

// 4️⃣ Delete student by ID
app.delete("/students/:id", async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);

    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting student", error: err });
  }
});

// ========================
// Start Server
// ========================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
