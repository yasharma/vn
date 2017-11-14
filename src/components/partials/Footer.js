import React, { Component } from 'react';
import facebookIcon from '../../assets/images/svg/facebook-letter-logo.svg';
import googleIcon from '../../assets/images/svg/google-plus-logo.svg';
import twiiterIcon from '../../assets/images/svg/twitter-logo-silhouette.svg';
import linkedinIcon from '../../assets/images/svg/linkedin-logo.svg';

class Footer extends Component {
  	render() {
    	return (
     		<div className="App">
        		<footer className="padding-10">
					<div className="container">
						<div className="d-flex justify-content-between align-items-center">
							 <div className="footer-links">
								 <button type="button" className="btn btn-link">Privacy Policy</button>
								 <button type="button" className="btn btn-link">Terms &amp; Conditions</button>
							 </div>
							 <div className="share-links">
								 <ul>
								 	<li><a className="pointer"><img src={facebookIcon}/></a></li>
									<li><a className="pointer"><img src={googleIcon}/></a></li>
									<li><a className="pointer"><img src={twiiterIcon}/></a></li>
									<li><a className="pointer"><img src={linkedinIcon}/></a></li>
								 </ul>
							 </div>
							 <div>
								<div className="copyright-tag text-uppercase">© 2017 COPYRIGHT pencilink</div>
							 </div>
						</div>
					</div>
				</footer>
      		</div>
    	);
  	}
}

export default Footer;