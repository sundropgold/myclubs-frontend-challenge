/* ================== MAIN COMPONENT ==================
*/

// DEPENDENCIES 
// =====================================================
// Include the React library
import React from 'react';
import helpers from "./utils/helpers.js";

// Include child components
import Information from './Information.js';
import ReservationForm from './ReservationForm.js';

// MAIN COMPONENT
// =====================================================
// Creates and exports the Main component
export default class Main extends React.Component {

	constructor(props){
		// Initial state setup
		super(props);

		this.state = {
			courseName:"",
			courseImg:""
		}
	}

	componentDidMount(){
		// method invoked immediately after component is mounted
		// to get JSON object 

		helpers.getCourseInfo().then((data) => {
			// get the course information using helper function

			// set course information data retrieved into current state
			this.setState({
				courseName:data.name.toUpperCase(),
				courseImg:data.img,
			});
		});
	}

	render(){

		return(
			<div className="container">

				<div className="row" id="main-row">

					<div className="main-container col-md-6 col-sm-12 trim">
						<img id="courseimg" src={this.state.courseImg}/>					
					</div>

					{this.props.children}

					<div id="clear"></div>

				</div>

				<div className="row">

					<div className="footer-container col-md-12">
						
						<div id="footer-content">
							<h1>my<span id="clubs">clubs</span></h1>
						</div>

					</div>

				</div>
			</div>
		);
	}
}

