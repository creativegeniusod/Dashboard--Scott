import React from 'react';
import { Link } from 'react-router'
class FundAccount extends React.Component {
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
			            <h2 className="no-margin">Fund your investment accounts</h2>
			            <p className="no-margin">Your account funding</p>
			           
			          </div>  
			          <ul className="withdraw-hist">
			            <li>
			              <div className="columns">
			                <div className="column">
			                  <span className="green-txt">$525 monthly auto-deposit (PAC) to Chris' TFSA</span>
			                </div>
			                <div className="column is-one-third"></div>
			              </div>          
			            </li>
			            <li>
			              <div className="columns">
			                <div className="column">
			                  <span className="green-txt">5 15,000 lump sum deposit to Chris' RRSP</span>
			                </div>
			                <div className="column is-one-third"></div>
			              </div>          
			            </li>
			            <li>
			              <div className="columns">
			                <div className="column">
			                  <p><strong>Set up a Pre-authorized contribution</strong></p>
			                  <p>Deposit funds directly from your bank account to Planswell on a regular monthly schedule.</p>
			                </div>
			                <div className="column is-one-third">
			                  <a className="button is-info is-small" onClick={this.props.event.bind("slide",1)}>Set up a PAC</a>
			                </div>
			              </div>          
			            </li>
			            <li>
			              <div className="columns">
			                <div className="column">
			                  <p><strong>Transfer existing accounts</strong></p>
			                  <p>If you have a TFSA, an RRSP or even a savings account you'd like to invest with Planswell, you can trasfer them directly. We'll even pay the fees.</p>
			                </div>
			                <div className="column is-one-third">
			                  <a className="button is-info is-outlined is-small" onClick={this.props.event.bind("slide","transfer")}>Transfer accounts</a>
			                </div>
			              </div>          
			            </li>
			            <li>
			              <div className="columns">
			                <div className="column">
			                  <p><strong>Make a lump sum deposit</strong></p>
			                  <p>Deposit funds directly from your bank account to Planswell just once.</p>
			                </div>
			                <div className="column is-one-third">
			                   <a className="button is-info is-outlined is-small">Make deposit</a>
			                </div>
			              </div>          
			            </li>
			          </ul>     
			        </div>
			    </div>
			    </div>
        );
    }
  
}

export default FundAccount;
