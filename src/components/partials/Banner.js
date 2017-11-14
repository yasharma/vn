import React, { Component } from 'react';
import {connect} from 'react-redux';

class Banner extends Component {
  	render() {
    	return (
     		<div className="App">
        		Banner
      		</div>
    	);
  	}
}


export default connect(null, null, null, {pure:false})(Banner);