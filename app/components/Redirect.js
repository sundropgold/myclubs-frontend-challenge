/* ================== REDIRECT COMPONENT ==================
*/

// DEPENDENCIES 
// =====================================================
// Include the React library
import React from 'react';
import { Link } from 'react-router';

// REDIRECT COMPONENT
// =====================================================
// Creates and exports the Redirect component

export default class Redirect extends React.Component {

	constructor(props) {
		// Initial state setup

		super(props);
	}

	render(){
		return(
			<div className="redirect-container col-md-6">

				<div id="redirect-content">
					<h1>Thank you for registering!</h1>

					<div id="btn-container">
						<Link to="/"><button> RETURN TO COURSE </button></Link>
						<a href="https://www.myclubs.com/at/de"><button> EXPLORE COURSES </button></a>
					</div>
				</div>
			</div>
		);
	}
}
