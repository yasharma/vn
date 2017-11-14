import React, { Component } from 'react';
import BannerImg from '../../assets/images/profile-banner.png';
import './Register.css';

class Banner extends Component {
  	render() {
    	return (
     		<div className="App">
        		<div className="Banner">
					<div className="Banner-tags text-center color-white">
						<h2 className="text-uppercase">Become A Pilot School</h2>
						<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
					</div>	
				</div>
      		</div>
    	);
  	}
}

export default Banner;