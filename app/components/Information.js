/* ================== INFORMATION COMPONENT ==================
*/

// DEPENDENCIES 
// =====================================================
// Include the React library
import React from 'react';
import { Link } from 'react-router';
import helpers from "./utils/helpers.js";

// INFORMATION COMPONENT
// =====================================================
// Creates and exports the Information component

export default class Information extends React.Component {

	constructor(props){
		// Initial state setup
		super(props);

		this.state = {
			courseName:"",
			courseDesc:"",
			courseHrs:"",
			courseLocation:"",
			courseImg:""
		}
	}

	componentDidMount(){
		// method invoked immediately after component is mounted
		// to get JSON object 

		helpers.getCourseInfo().then((data) => {
			// get the course information using helper function

			if (data.hrs == "" || data.hrs == null) {
				data.hrs = "Training hours have not yet been announced.";
			}

			// set course information data retrieved into current state
			this.setState({
				courseName:data.name.toUpperCase(),
				courseDesc:data.description,
				courseHrs:data.hrs,
				courseLocation:data.location,
				courseImg:data.img
			});
		});
	}

	render(){
		return(
			<div className="information-container col-md-6 col-sm-12">

				<div id="information-content">
					<h1 id="course-title">{this.state.courseName}</h1> 
					
					<div id="information-join">
						<h3>JOIN</h3>					
						<p>{this.state.courseDesc}</p>
					</div>

					<div id="information-hrs">
						<h3>HOURS</h3>
						<p>{this.state.courseHrs}</p>
					</div>
					
					<div id="information-location">	
						<h3>LOCATION</h3> 
						<p>
							{this.state.courseLocation.name}, {this.state.courseLocation.street}<br/>
							{this.state.courseLocation.city}, {this.state.courseLocation.country}, {this.state.courseLocation.zipCode}
							
						</p>
					</div>
					
					<Link to="/reservation"><button className="info-btn">MAKE A RESERVATION</button></Link>

				</div>
			</div>
		);
	}
}

