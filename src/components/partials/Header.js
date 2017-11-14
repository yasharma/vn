import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Logo from  '../Logo/Logo';

class Header extends Component {
  	render() {
    	return (
     		<div className="App">
				<header>
					<Logo />
				</header>
        		{/* <Link to="signup">Pilot Form</Link> */}
      		</div>
    	);
  	}
}


export default connect(null, null, null, {pure:false})(Header);