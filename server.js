/* ================== SERVER ================== */

// DEPENDENCIES
// =============================================================

var express = require("express");
// var mongoose = require("mongoose");
var path = require("path");
var bodyParser = require("body-parser");

// EXPRESS APP
// =============================================================

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// set up static directory 'public'
app.use("/public", express.static("./public"));

// MONGODB CONFIGURATION
// =============================================================

// mongodb local connection
// mongoose.connect("mongodb://localhost/myclubsdb", {
// 	useMongoClient: true});

// heroku mongolab connection
// mongoose.connect("mongodb://heroku_v0vqth9z:64qm5mvk8t6fdqtrgp795icvaa@ds155414.mlab.com:55414/heroku_v0vqth9z");

// var db = mongoose.connection;

// db.on("error", function(err){
// 	console.log("Mongoose Error: ", err);
// });

// db.once("open", function(){
// 	console.log("Mongoose connection successful.");
// });

// EXPRESS APP ROUTES
// =============================================================

require("./routes/api-routes.js")(app);

// START LISTENER
// =============================================================
app.listen(PORT, function(){
	console.log("App listening on PORT " + PORT);
});