import React from 'react'

import ApplicationBar from './ApplicationBar';
import WelcomeView from './WelcomeView';
import TechDomainsHome from './techDomains';

import { HashRouter as Router, Route, Redirect } from 'react-router-dom';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ApplicationBar/>
				<Router>
					<div>
						<Route exact path="/" render={() => <Redirect to="/welcome" />} />
						<Route exact path="/welcome" component={WelcomeView} />
						<Route exact path="/techdomains/new" component={TechDomainsHome} />
					</div>
				</Router>
			</div>
		)
	}
}