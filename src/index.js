import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase'
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

var config = {
	apiKey: "AIzaSyC3AlhX86JBMrbzacSx1Hjj__RfIHehVow",
	authDomain: "hackathon-c5036.firebaseapp.com",
	databaseURL: "https://hackathon-c5036.firebaseio.com",
	projectId: "hackathon-c5036",
	storageBucket: "hackathon-c5036.appspot.com",
	messagingSenderId: "631159823326"
};
firebase.initializeApp(config);

ReactDOM.render((
	<Router>
		<App>
			<Switch>
				<Route exact path="/" component={Page1} />
				<Route exact path="/user/" component={Page2} />
			</Switch>
		</App>
	</Router>

), document.getElementById('root'));
registerServiceWorker();
