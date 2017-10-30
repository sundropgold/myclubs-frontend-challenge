/*
	================== Reservation Model ==================
	for future development
*/

// DEPENDENCIES
// =============================================================

// require mongoose
var mongoose = require("mongoose");

// create Schema class
var Schema = mongoose.Schema;

// RESERVATION SCHEMA
// =============================================================

var ReservationSchema = new Schema({
	name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true
	},
	phone:{
		type:number,
		required:true
	}
});

// create the Reservation model with the ReservationSchema
var Reservation = mongoose.model("Reservation", ReservationSchema);

// export the Reservation model
module.exports = Reservation;