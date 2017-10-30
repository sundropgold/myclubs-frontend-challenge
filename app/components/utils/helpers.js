/*
	================== HELPERS FILE ==================
*/

// DEPENDENCIES
// ======================================================

// use axios to perform GET/POST requests
var axios = require("axios");

// HELPERS
// ======================================================

var helpers = {

	getCourseInfo:() =>{
		// get the JSON object from the url
		return axios({
			method:'GET',
			url:'https://frontend-challenge-190ff.firebaseio.com/activities/coding-activity.json'
		}).then(response => {
			// save information from the response that we need
			var courseInfo = {};

			courseInfo.name = response.data.categories[0].split("-")[1];
			courseInfo.img = response.data.imageFile.url;
			courseInfo.description = response.data.description;
			courseInfo.info = response.data.infoBox;
			courseInfo.hrs = response.data.trainingHours;
			courseInfo.location = {
				name:response.data.name,
				latitude:response.data.location.latitude,
				longitude:response.data.location.longitude,
				city:response.data.city,
				region:response.data.region,
				country:response.data.country,
				street:response.data.street,
				zipCode:response.data.zipCode
			};
			courseInfo.status = response.data.status;
			courseInfo.reservationEmail = response.data.reservationEmail;
			courseInfo.reservationTypes = response.data.reservationTypes;

			return courseInfo;

		});
	}
};

// export helper
export default helpers;