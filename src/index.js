import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase'

var config = {
	apiKey: "AIzaSyC3AlhX86JBMrbzacSx1Hjj__RfIHehVow",
	authDomain: "hackathon-c5036.firebaseapp.com",
	databaseURL: "https://hackathon-c5036.firebaseio.com",
	projectId: "hackathon-c5036",
	storageBucket: "hackathon-c5036.appspot.com",
	messagingSenderId: "631159823326"
};
firebase.initializeApp(config);
  
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
