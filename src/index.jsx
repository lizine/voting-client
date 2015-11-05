import React from 'react';
import ReactDom from 'react-dom';
import Router, {Route} from 'react-router';
import App from './components/App'
import Voting from './components/Voting';
import Results from './components/Results';

const routes = <Route component={App}>
<Route path="/results" component={Results} />
<Route path="/" component={Voting}/>
</Route>;


ReactDom.render(
	<Router>{routes}</Router>,
	document.getElementById('app')
);