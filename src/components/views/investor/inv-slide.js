import React from 'react';
import { Link } from 'react-router'

class InvestSlide extends React.Component { 
    constructor(props) {
		super(props);
		this.state = {
       	 	visible: 0
       	};
    }     
  render() {
  		const {visible} = this.state;
        return (

			       <div className="box no-padding message-col"> 
	              	<article className="message is-info no-margin">
			            <div className="message-header">
			              <div className="full-width">                    
			                <div className="col">
			                    <p className="white no-margin">Be an investor <i className="fa fa-check pull-right"></i></p>
			                  </div>
			              </div>
			                <div className="columns pt-30">
			                  <div className="column">
			                    <h5 className="white">Your investment accounts are full funded and active.</h5>
			                  </div>
			                </div>
			            </div>
			          </article>
	                <div className="tabs vertical-align no-border">                                  
	                    <ul>
	                        <li className=""><Link to={{ pathname: '/investment-account', query: { type: 'mystate' } }}>My Statements <i className="fa fa-arrow-right" aria-hidden="true"></i></Link></li>

	                        <li><Link to={{ pathname: '/investment-account', query: { type: 'account' } }}>Account History <i className="fa fa-arrow-right" aria-hidden="true"></i></Link></li>

	                        <li><a href="#" onClick={e => this.setState({ visible:1})} >Fund my accounts <i className="fa fa-arrow-right" aria-hidden="true"></i></a></li>

	                        <li><a href="#" onClick={e => this.setState({ visible:2})} >Withdraw funds <i className="fa fa-arrow-right" aria-hidden="true"></i></a></li>

	                    </ul>
	                </div>
			          <div className="col btn-sec pt-10 pb-10">
			            <a className="button is-info is-outlined" onClick={e => this.setState({ intab:1})}>See my accounts</a>
			          </div>
			          {
			            visible==1?
			            <div id="modal" className="modal is-active opened">
							  <div className="modal-background"></div> 
							  <div className="modal-content">
							    <div className="btn-wrap">
							      <button className="modal-close is-large" aria-label="close" onClick={e => this.setState({ visible:0})}></button>
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
							              <a className="button is-info is-small">Set up a PAC</a>
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
							              <a className="button is-info is-outlined is-small">Transfer accounts</a>
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
							</div>:
							visible==2?
							<div id="modal" className="modal is-active opened">
							  <div className="modal-background"></div> 
							  <div className="modal-content">
							    <div className="btn-wrap">
							      <button className="modal-close is-large" aria-label="close" onClick={e => this.setState({ visible:0})}></button>
							    </div>  
							    <div className="box no-padding">
							      <div className="p-30">
							        <h2 className="no-margin">Withdraw funds from Planswell</h2>
							        <p><strong>Pending withdrawals</strong></p>
							        <p className="no-margin">You currently do not have any pending, withdrawals</p>
							      </div>  
							      <ul className="withdraw-hist">
							        <li>
							            <p><strong>Pending withdrawals</strong></p>
							            -$15,000 from Chris' TFSA - <span className="gray-txt">August 2 1.20 17</span>
							        </li>
							        <li>-$18,000 from Chris' RRSP - <span className="gray-txt">August 2 1. 2017</span></li>
							        <li>Make a new withdrawal Nevermind</li>
							      </ul>
							      <div className="col p-20">
							        <a className="button is-primary white">Make a new withdrwal</a>
							        <a href="#" className="button inverse-btn" onClick={e => this.setState({ visible:0})}>Nevermind</a>
							      </div>
							    </div>
							</div>
							</div>:
							null
			            }
	            </div>
			    );
    }
  
}

export default InvestSlide;
