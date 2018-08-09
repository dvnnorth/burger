const mysql = require("mysql");
require("dotenv").config();
let connection;

if (process.env.JAWSDB_MARIA_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_MARIA_URL);
}
else {
  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "burgers_db"
  });
}

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to database burgers_db with id" + connection.threadId);
});

module.exports = connection;