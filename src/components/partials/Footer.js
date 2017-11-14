import React, { Component } from 'react';

class Footer extends Component {
  	render() {
    	return (
     		<div className="App">
        		<footer>
					<div className="container">
						<div class="d-flex justify-content-between align-items-center">
							 <div className="">
								 <button type="button" class="btn btn-link">Privacy Policy</button>
								 <button type="button" class="btn btn-link">Terms &amp; Conditions</button>
							 </div>
							 <div>
								 <ul>
								 	<li><a></a></li>
								 </ul>
							 </div>
							 <div>
								<div className="text-uppercase">© 2017 COPYRIGHT pencilink</div>
							 </div>
						</div>
					</div>
				</footer>
      		</div>
    	);
  	}
}

export default Footer;