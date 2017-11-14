import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import LogoBox from '../../assets/images/logo-box.png';
import LogoIcon from '../../assets/images/logo.png';
import './Logo.css';

class Logo extends Component {
  	render() {
    	return (
     		<div className="App">
				<div className="LogoBox text-center">
					<img src={LogoBox}/>
					<a><img src={LogoIcon}/></a>
                </div>
      		</div>
    	);
  	}
}

export default connect(null, null, null, {pure:false})(Logo);