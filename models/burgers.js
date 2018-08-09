const orm = require("../config/orm.js");

let getAllBurgers = (callback) => {
  orm.selectAll("burgers", callback);
};

let addBurger = (burgerName, callback) => {
  let burger = {
    burger_name: burgerName,
    devoured: false
  };
  orm.insertOne("burgers", burger, /*(results) => callback(results)*/callback);
};

let devour = (id, callback) => {
  orm.updateOne("burgers", "devoured", true, "id", id, callback);
};

let methods = {
  getAllBurgers: getAllBurgers,
  addBurger: addBurger,
  devour: devour
};

module.exports = methods;