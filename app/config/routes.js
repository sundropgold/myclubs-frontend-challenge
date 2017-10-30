/* ================== REACT ROUTES ================== */

// DEPENDENCIES
// =============================================================
// Include the React library
import React from 'react';

// Include the Route component for displaying individual routes
// Include the Router component to contain all our Routes
// Include the hashHistory prop to handle routing client side without a server
// Include browserHistory - https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
// Include IndexRoute (catch-all route)
import router,{Route, Router, browserHistory, IndexRoute} from "react-router";

// Reference the high-level components
import Main from '../components/Main.js';
import Information from '../components/Information.js';
import ReservationForm from '../components/ReservationForm.js';
import Redirect from '../components/Redirect.js';

/* ================== REACT ROUTES ================== */

export default (

	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<Route path="information" component={Information} />
			<Route path="reservation" component={ReservationForm} />
			<Route path="redirect" component={Redirect} />

			<IndexRoute component={Information} />
		</Route>
	</Router>
);