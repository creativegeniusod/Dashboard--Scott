import React from 'react';
import { Link } from 'react-router'
class FundTransfer extends React.Component {
  render() {
        return (
      			<div id="modal" className="modal is-active opened">
			      <div className="modal-background"></div> 
			      <div className="modal-content">
			        <div className="btn-wrap">
			          <button className="modal-close is-large" aria-label="close" onClick={this.props.eventclose}></button>
			        </div>  
			        <div className="box no-padding">
			          <div className="p-30">
			            <h2 className="no-margin">Funding > Setting up a trasfer</h2>
			            <p className="no-margin">Pre-authorized contribution is the best way to consistently build wealth and hit your retirement goal. Here's how you do it.</p>
			           
			          </div>  
			          <ul className="withdraw-hist">
			            <li>
				             1. Log in to your online bank account.      
			            </li>
			            <li>
			              2. Navigate to the account page of the account you'd like to transfer funds from. for example, your chequing account.      
			            </li>
			            <li>
			              3. Find the Payments and transfers section for the account you selected.        
			            </li>
			            <li>
			              4. Setup a new payment from your account base on your pllan recommendation.
			             	<p><span>Your recommendation:</span> $418/month to your TFSA</p> 
			            </li>
			            <li>
			              5. Choose the monthly option under "Frequency" for your payment.     
			            </li>
			             <li>
			             	<a className="button modal-button is-info is-small" onClick={this.props.event.bind("slide","follow-transfer")}>I've followed the steps</a>
			        		<a href="#" className="button inverse-btn" onClick={this.props.event.bind("slide","fund")}>Nevermind</a>     
			            </li>
			          </ul>     
			          </div>
			        </div>
			        
			    </div>
        );
    }
  
}

export default FundTransfer;
