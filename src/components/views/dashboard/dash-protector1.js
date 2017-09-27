import React from 'react';
import { Link } from 'react-router'
import ProtectTitle from './protect-title.js';

class DashboardProtector1 extends React.Component {
	
  	render() {
        return (
		      <div className="box no-padding message-col dashboard detialed-box"> 
	              	<article className="message no-margin">
			            <div className="message-header no-padding">
			              <div className="full-width">                    
			                	<ProtectTitle />
			                  	<div className="col">
	                              <h4 className="no-margin">You've requested a call from a specialist to discuss your current coverage.</h4>
	                              <p className="no-margin"><i className="fa fa-mobile is-danger"></i> You should hear from one of our insurance specialist within 1-2 days.</p>
	                            </div>
			              </div>
			            </div>
			        </article>
	            </div>

        );
    }
  
}

export default DashboardProtector1;
