const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require("./controllers/burgers_controllers"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, () => {
    console.log("Server active on port " + PORT);
});