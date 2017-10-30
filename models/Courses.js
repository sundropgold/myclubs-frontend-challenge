/*
	================== Courses Model ==================
	for future development
*/

// DEPENDENCIES
// =============================================================

// require mongoose
var mongoose = require("mongoose");

// create Schema class
var Schema = mongoose.Schema;

// COURSE SCHEMA
// =============================================================

var CourseSchema = new Schema({
	bookingMinimum:{
		type:Number,
		default:1
	},
	bookingPeriod:{
		type:Number,
		default:4
	},
	cancellationPeriod:{
		type:Number,
		default:4
	},	
	city:{
		type:String,
		required:true
	},
	country:{
		type:String,
		required:true
	},
	description:{
		type:String,
		required:true
	},
	infoBox:{
		type:String,
		required:true
	}
	locationName:{
		type:String,
		required:true
	},
	locationLat:{
		type:Number,
		required:true
	},
	locationLong:{
		type:Number,
		required:true
	},
	street:{
		type:String,
		required:true
	},
	zipcode:{
		type:Number,
		required:true
	},
	region:{
		type:String,
		required:true
	},
	status:{
		type:Boolean,
		default:true
	}
	reservations:[{
		// save an array of cars via ObjectId
		type:Schema.Types.ObjectId,
		ref:"Reservation"
	}]
});

// create the Course model with the CourseSchema
var Course = mongoose.model("Course", CourseSchema);

// export the Course model
module.exports = Course;