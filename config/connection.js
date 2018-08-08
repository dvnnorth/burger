const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "burgers_db"
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to database burgers_db with id" + connection.threadId);
});

module.exports = connection;