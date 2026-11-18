
  const express = require("express");
const app = express();
app.use(express.json());
const courses = [];
app.get("/courses", (req, res) => {
  res.json(courses);
});
app.post("/courses", (req, res) => {
  const course = {
    id: courses.length + 1,
    coursename: req.body.coursename,
    coursecode: req.body.coursecode,
    department: req.body.department,
  };
  courses.push(course);
  res.status(201).json(course);
});
app.delete('/courses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = courses.findIndex(c => c.id === id);
  if (index === -1) return res.status(404).json({ message: 'Course not found' });
  courses.splice(index, 1);
  res.status(200).json({ message: 'Deleted successfully' });
});
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
