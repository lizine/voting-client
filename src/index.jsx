import React from 'react';
import ReactDom from 'react-dom';
import Router, {Route} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
import reducer from './reducer';
import App from './components/App';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';

const store = createStore(reducer);
store.dispatch({
	type: 'SET_STATE',
	state: {
		vote: {
			pair: ['Sunshine,', '28 Days Later'],
			tally:{Sunshine: 2}
		}
	}
});

const socket = io(`${location.protocol}//${location.hostname}:8090`);

const routes = <Route component={App}>
<Route path="/results" component={ResultsContainer} />
<Route path="/" component={VotingContainer}/>
</Route>;


ReactDom.render(
	<Provider store={store}>
	<Router>{routes}</Router>
	</Provider>,
	document.getElementById('app')
);