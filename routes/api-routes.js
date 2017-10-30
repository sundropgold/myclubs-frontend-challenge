/* ================== API ROUTES ================== */

// DEPENDENCIES
// =============================================================

var path = require("path");
var request = require("request");

// set mongoose to leverage built in JS ES6 Promises
// var mongoose = require("mongoose");
// mongoose.Promise = Promise;

// API ROUTES
// =============================================================

module.exports = function(app){

	// =============== USER + COURSE INFORMATION ===============
	// in phase 2, when there's a database to create and store users
	// and courses, routes will be made accordingly

	// =============== HTML ===============
	// GET - index html page
	app.get("*", function(req,res){
		res.sendFile(path.resolve(__dirname, "../public/index.html"));
	});
}