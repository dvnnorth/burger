const orm = require("../config/orm.js");

let getAllBurgers = (callback) => {
  orm.selectAll("burgers", callback);
};

let addBurger = (burgerName) => {
  let burger = {
    burger_name: burgerName,
    devoured: false
  };
  orm.insertOne("burgers", burger);
};

let devour = (burgerName) => {
  orm.updateOne("devoured", true, "burger_name", burgerName);
};

let methods = {
  getAllBurgers: getAllBurgers,
  addBurger: addBurger,
  devour: devour
};

module.exports = methods;