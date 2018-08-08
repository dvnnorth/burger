const connection = require("/config/connection.js");


// selectAll()

let selectAll = (tableName, callback) => {
  connection.query("SELECT * FROM ?;", [tableName], (err, data) => {
    if (err) throw err; 
    callback(data);
  });
};

// insertOne()

let insertOne = (tableName, row) => {
  let columns = Object.keys(row);
  let values = Object.entries(row);
  let params = [tableName].concat(columns, values);
  connection.query("INSERT INTO ? (?, ?) VALUES (? ?);", 
    params, (err) => { if (err) throw err });
};

// updateOne()

let updateOne = (colToBeSet, valToBeSet, whereCol, whereVal ) => {
  let params = [colToBeSet].concat(valToBeSet, whereCol, whereVal);
  connection.query("SET ? = ? WHERE ? = ?;", params, 
    (err) => {if (err) throw err });
};

let methods = {
  selectAll: selectAll,
  insertOne: insertOne,
  updateOne: updateOne
};

module.exports = methods;