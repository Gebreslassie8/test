
const express = require("express"); // Web framework
const cors = require("cors"); // Handle CORS policy
const mysql = require("mysql2"); // MySQL database integration
const dotenv = require("dotenv"); // Manage environment variables

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "crud"
    //process.env.DB_HOST allows you to use environment variables to configure the host dynamically
});

// Establish a database connection
db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        process.exit(1); // Terminate if connection fails to avoid further issues
    }
    console.log("Connected to MySQL");
});

// GET route to retrieve all students
app.get("/student", (req, res) => {
  const sql = "SELECT * FROM student";
  db.query(sql, (err, data) => {
    if (err) { 
      console.error("Error while fetching students:", err);
      return res.status(500).json({ error: err.message });
    }
    return res.json(data);
  });
});

// POST route to add/create a new student
app.post("/create", (req, res) => {
  const { name, email } = req.body;
  const sql = "INSERT INTO student (Name, Email) VALUES (?, ?)";
  db.query(sql, [name, email], (err, result) => {
    if (err) {
      console.error("Error while adding a student:", err);
      return res.status(500).json({ error: err.message });
    }
    return res.json({ message: "Student added successfully!", data: result});
  });
});
 // Put route to update a new student
app.put("/Update/:id", (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params; // Correctly extract id from req.params
  const sql = "UPDATE student SET Name = ?, Email = ? WHERE Id = ?"; // Removed quotes around column names
  db.query(sql, [name, email, id], (err, result) => {
    if (err) {
      console.error("Error while updating a student:", err); // Updated error message
      return res.status(500).json({ error: err.message });
    }
    return res.json({ message: "Student updated successfully!", data: result });
  });
});

// GET route to read  student
app.get("/read/:id", (req, res) => {
  const sql = "SELECT * FROM student WHERE Id = ?";
  const id  = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) { 
      console.error("Error while fetching students:", err);
      return res.status(500).json({ error: err.message });
    }
    return res.json(data);
  });
});


 //to delete a student
app.delete("http://localhost:5000/delete/:id", (req, res) => {
  const { id } = req.params.id;
  const sql = "DELETE FROM student WHERE Id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error while deleting a student:", err);
      return res.status(500).json({ error: err.message });
    }
    return res.json({ message: "Student deleted successfully!", data: result });
  });
})

// Server listens on the specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));






