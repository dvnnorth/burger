const express = require("express");
const burgers = require("../models/burgers.js");

const router = express.Router();

router.get("/", (req, res) => {
    burgers.getAllBurgers((data) => {
        let burgers = data.filter((burger) => !burger.devoured);
        let devoured = data.filter((burger) => burger.devoured);
        res.render("index", { burgers: burgers, devoured: devoured });
    });
});

router.post("/api/burgers", (req, res) => {
    burgers.addBurger(req.body.burgerName, (result) => res.json({ id: result.insertId }));
});

router.put("/api/burgers/:id", (req, res) => {
    burgers.devour(req.params.id, (results) => {
        if (results.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
});

module.exports = router;