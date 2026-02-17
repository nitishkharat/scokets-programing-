const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(express.json());

// Create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",   // put your mysql password here
  database: "testdb"  // put your database name here
});

// Connect DB
db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
  } else {
    console.log("✅ Connected to MySQL");
  }
});

// Route
app.get("/students", (req, res) => {
  db.query("SELECT * FROM students", (err, result) => {
    if (err) return res.send(err);
    res.send(result);
  });
});

// Start server
app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
