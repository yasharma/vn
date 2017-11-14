import React, { Component } from 'react';
import Loginside from  './Loginside';
import Loginform from  './Loginform';
import './Login.css';

class Login extends Component {
  	render() {
    	return (
			<div className="App">
				<div className="d-flex flex-row align-self-stretch no-gutters">
					<div className="col-4"><Loginside /></div>
					<div className="col-8"><Loginform /></div>
				</div>
			</div>
    	);
  	}
}

export default Login;





