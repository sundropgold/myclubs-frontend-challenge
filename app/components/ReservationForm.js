/* ================== RESERVATION FORM COMPONENT ==================
*/

// DEPENDENCIES 
// =====================================================
// Include the React library
import React from 'react';
import { Link } from 'react-router';
import helpers from './utils/helpers.js';
import router, {browserHistory} from "react-router";

// RESERVATION FORM COMPONENT
// =====================================================
// Creates and exports the ReservationForm component

export default class ReservationForm extends React.Component {

	constructor(props){
		// Initial state setup
		super(props);

		this.state = {
			courseName:"",
			courseInfo:"",
			courseStatus:"",
			reservationEmail:"",
			reservations:[],
			newUserName:"",
			newUserEmail:"",
			reservationMade:null
		}

		// bind functions
		this.clear = this.clear.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleForm = this.handleForm.bind(this);
		this.sendReservation = this.sendReservation.bind(this);
	}

	componentDidMount(){
		// method invoked immediately after component is mounted
		// to get JSON object 

		helpers.getCourseInfo().then((data) => {
			// get the course information using helper function

			// set course information data retrieved into current state
			this.setState({
				courseName:data.name,
				courseInfo:data.info,
				courseStatus:data.status,
				reservationEmail: 'flynnigan.tan@gmail.com'//data.reservationEmail
			});
		});
	}

	clear(){
		// method that clears the form and sets the default state

		this.setState({
			newUserName:"",
			newUserEmail:""
		});

		console.log(this.state);
	}

	handleChange(event){
		// method that handles changes in the form

		var newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	}

	handleSubmit(event){
		// method that handles the form submit

		event.preventDefault();

		var newUser = {};
		newUser.name = this.state.newUserName;
		newUser.email = this.state.newUserEmail;

		// add newUser to reservations array
		this.state.reservations.push(newUser);
		newUser.id = newUser.name[0] + this.state.reservations.indexOf(newUser);

		this.sendReservation();

		// clear input fields and newUser
		this.clear();

	}

	handleForm(event){

		if (event.target.value == "makeReservation") {
			this.setState({
				reservationMade:false
			});
		}

		if (event.target.value == "updateReservation") {
			this.setState({
				reservationMade:true
			});
		}

	}

	sendReservation(){
		// method to send reservation email confirmation to host + user
		// phase 2
	    
		// after the reservation confirmation is sent
		// redirect to confirmation page
		browserHistory.push("/redirect");
	}

	render(){

		if (this.state.reservationMade == false || this.state.reservations.length == 0) {
			return(
				<div className="form-container col-md-6">
					<div id="form-content">
						
						<Link to="/information"><span className="glyphicon glyphicon-arrow-left"></span></Link>
		
						<h2 id="form-title">CREATE RESERVATION</h2>
						
						<ul>
							<li><p className="form-info"> Please fill out this form to make your reservation</p></li>
							<li><p className="form-info"> {this.state.courseInfo}</p></li>
						</ul>

						<form onSubmit={this.handleSubmit}>

							<input
								value={this.state.newUserName}
								type="text"
								id="newUserName"
								placeholder="Name"
								onChange={this.handleChange}
								required
							/>

							<br />

							<input
								value={this.state.newUserEmail}
								type="email"
								id="newUserEmail"
								placeholder="Email"
								onChange={this.handleChange}
								required
							/>

							<br/>
		
							<button className="reserve-btn" type="submit">RESERVE NOW</button>

						</form>

					</div>

				</div>
			);
		}
		
		// phase 2: conditions for updating a pre-existing record

		// else if (this.state.reservationMade == true && this.state.reservations.length > 0) {
			
		// 	return(
		// 		<div className="form-container col-md-6">
		// 			<h2>UPDATE RESERVATION</h2>

		// 			<Link to="/information"><span className="glyphicon glyphicon-arrow-left"></span></Link>

		// 			<h5>Find Reservation</h5>
		// 			<input
		// 				value={this.state.reservationId}
		// 				type="text"
		// 				id="reservationId"
		// 				placeholder= "Reservation ID"
		// 				onChange={this.handleChange}
		// 				required
		// 			/>

		// 			<button type="submit">SEARCH</button>
		// 		</div>
		// 	);
		// }

		// else if(this.state.reservationMade == true && this.state.reservations.length == 0) {
		// 	return(
		// 		<div className="form-container col-md-6">
		// 			<h2>No Reservation Records found.</h2>
		// 			<button onClick={this.handleForm} value="makeReservation">CREATE RESERVATION</button>
		// 		</div>
		// 	);
		// }

		// else {
		// 	return(
		// 		<div className="form-container col-md-6">
		// 			<Link to="/information"><span className="glyphicon glyphicon-arrow-left"></span></Link>
					
		// 			<h2>CREATE/UPDATE COURSE RESERVATION</h2>

		// 			<br/><br/>
		// 			<button onClick={this.handleForm} value="makeReservation">CREATE RESERVATION</button>
		// 			<button onClick={this.handleForm} value="updateReservation">UPDATE RESERVATION</button>
					
		// 		</div>
		// 	);
		// }
	}
}

