const express = require("express");

const app = express();
app.use(express.json());

let employees = [];

app.get("/health", (req, res) => {
  res.send("Employee App is running");
});

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.post("/employees", (req, res) => {
  employees.push(req.body);
  res.send("Employee added successfully");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
