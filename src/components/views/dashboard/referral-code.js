import React from 'react';
import { Link } from 'react-router'

class ReferralCode extends React.Component {
  render() {
        	return (
      			<div className="box">
					<h1>Get $250 when you refer a friend to Planswell</h1>
					<p>Share your referral link with your friends, and you and your friend will both receive $250 when they inplement a plan and become a Planswell client.</p>
					<div className="columns">
						<div className="column">
							<span>My referral link:</span>
							<p><input type="name" className="field" value="my.planswell.ca/discovery/REFeokun001" readonly/></p>
							<a className="is-underlined" onClick={this.props.currentState}>See the terms and conditions</a>
						</div>
						<div className="column">
							<span>Share your code:</span>
							<ul className="referral-code-ul">
								<li className="risk-color info-color referral-code">&nbsp;
								</li>
								<li className="risk-color light-blue-color referral-code">&nbsp;
								</li>
								<li className="risk-color green-color referral-code">&nbsp;
								</li>
							</ul>
						</div>
					</div>
				</div>
        );
    }
  
}

export default ReferralCode;
