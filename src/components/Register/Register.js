import React, { Component } from 'react';
import Banner from  './Banner';
import RegisterForm from  './RegisterForm';
import './Register.css';

class Register extends Component {
  	render() {
    	return (
     		<div className="App">
        		<Banner />
				<RegisterForm />
      		</div>
    	);
  	}
}

export default Register;