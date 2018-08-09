const connection = require("./connection");


// selectAll()

let selectAll = (tableName, callback) => {
  connection.query("SELECT * FROM ??", [tableName], (err, data) => {
    if (err) throw err;
    console.log(data);
    callback(data);
  });
};

// insertOne()

let insertOne = (tableName, row, callback) => {
  let columns = Object.keys(row);
  let values = Object.values(row);
  let params = [tableName].concat(columns, values);
  connection.query("INSERT INTO ?? (??, ??) VALUES(?, ?)",
    params, (err, results) => { 
      if (err) throw err; 
      callback(results);
    });
};

// updateOne()

let updateOne = (tableName, colToBeSet, valToBeSet, whereCol, whereVal, callback) => {
  let params = [tableName, colToBeSet].concat(valToBeSet, whereCol, whereVal);
  connection.query("UPDATE ?? SET ?? = ? WHERE ?? = ?", params,
    (err, results) => { 
      if (err) throw err; 
      callback(results);
    });
};

let methods = {
  selectAll: selectAll,
  insertOne: insertOne,
  updateOne: updateOne
};

module.exports = methods;