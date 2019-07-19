var express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//require models for syncing
const db = require('./models');
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.text());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use(routes);

// listen on port 3000
var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
