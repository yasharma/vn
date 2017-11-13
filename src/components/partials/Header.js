import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends Component {
  	render() {
    	return (
     		<div className="App">
        		Headerpage
        		<Link to="signup">Pilot Form</Link>
      		</div>
    	);
  	}
}


export default connect(null, null, null, {pure:false})(Header);