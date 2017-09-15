import React from 'react';
import { Link } from 'react-router'

class Tab4 extends React.Component { 
       
        
        
    componentDidMount() {
      
      }          
            
  render() {
	    
        return (
      <div id="tab4" className="tab-content">
		      						<h1 className="title">Refer a friend to Planswell </h1>
	      							<div className="box">
	      								<div className="columns">
	      									<div className="column">
	      										<p><strong>Get $500 towards your investment accounts everytime a friend you’ve  referred implements a plan with Planswell</strong></p>

	      										<p>Simply let your friends know to use your referral code when they sign up for Planswell, and you’ll recieve your reward once they've implemented their plan with us. <a href="#" className="modal-button" data-target="#modal-2" >See the terms and conditions.</a></p>
	      									</div>
	      									<div className="column is-one-quarter">
	      										<small> My referral code</small>
	      										<span className="box green-txt">H65A7LL2</span>
	      									</div>
	      								</div>
	      							</div>
	      						</div>
        );
    }
  
}

export default Tab4;
