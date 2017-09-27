import React from 'react';
import { Link } from 'react-router'
import ProtectTitle from './protect-title.js';
class DashboardProtector13 extends React.Component {
  render() {
        return (
        		<div>
	        		<div className="box no-padding message-col dashboard detialed-box"> 
		              	<article className="message no-margin">
				            <div className="message-header no-padding">
				              <div className="full-width">                    
				                	<ProtectTitle />
				                  <div className="col">
				                   <p className="no-margin heading">Put <strong>$114/month</strong> towards <strong>$700,000</strong> of insurance coverage.</p>
				                    <div className="is-danger swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
				                    	<p className="completed-message">Completed <i className="fa fa-check green-btn step7"></i></p>
				                    </div>
				                    <p className="no-margin is-danger">Critical illness:</p>
				                     
				                    <h4 className="no-margin">Congratulations, Chris, you're insured.</h4>
				                    <p className="no-margin">Your critical illness insurance policy is completed and will take effect in next 2-3 business days.</p>
				                  </div>
				              </div>
				            </div>
				        </article>
				        <div className="col btn-sec pt-10 pb-10">
	                  		<Link to="/policy-view" className="button is-danger">See my policy</Link>
	                  	</div>
		            </div>
		            <div className="box no-padding message-col dashboard detialed-box"> 
		              	<article className="message no-margin">
				            <div className="message-header no-padding">
				              <div className="full-width"> 
				                  <div className="col">
				                    <p className="no-margin is-danger">Disability:</p>
				                     
				                    <h4 className="no-margin">Your disability insurance your policy is ready to review and sign.</h4>
				                  </div>
				              </div>
				            </div>
				        </article>
				        <div className="col btn-sec pt-10 pb-10">
	                  		<a className="button is-danger" onClick={this.props.protecttab}>Review and sign policy</a>
	                  	</div>
		            </div>
		        </div> 
        );
    }
  
}

export default DashboardProtector13;
