import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Home from '../components/Home';
import Register from '../components/Register';
import Header from '../components/partials/Header';
import Footer from '../components/partials/Footer';
export const Router = props => {
	const { history } = props;
	
	return (
		<ConnectedRouter history={history}>
		<div>
			<Header/>
			<Switch>
				<Route path="/" exact={true} component={Home} />
				<Route path="/signup" component={Register} />
		  	</Switch>
		  	<Footer/>
		 </div>	 	
		</ConnectedRouter>
	);	
}