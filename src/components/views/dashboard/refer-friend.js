import React from 'react';
import { Link } from 'react-router'
import Tab from '../tab';
import Tab2 from '../tab2';
import Tab3 from '../tab3';
import Tab4 from '../tab4';
import Tab5 from '../tab5';
import Terms from './terms';
import ReferralCode from './referral-code';

class ReferFriend extends React.Component {
	constructor(props) {
			super(props);
			this.handelTab = this.handelTab.bind(this);
			this.handelTabTerms = this.handelTabTerms.bind(this);
			this.state = {
            tab: 1,
            visible: "refer"
           };
        }
       handelTab()
       {
       		this.setState({visible:"refer"});
       }
       handelTabTerms()
       {
       		this.setState({visible:"terms"});
       }
  render() {
  	const {tab,visible}=this.state;
        	return (
      			<div className="main-content">
					<section className="section bg-content level-1">
						<div className="container">
							<div className="col">
								<nav className="breadcrumb is-small has-succeeds-separator" aria-label="breadcrumbs">
								  <ul>
								    <li><i className="fa fa-arrow-left" aria-hidden="true"></i> &nbsp;&nbsp; <Link to='/'>Home</Link></li>
								    <li className="is-active"><a href="#" aria-current="page">Refer a friend</a></li>
								  </ul>
								</nav>
								
						    </div>
						</div>
					
						<div className="section level-2 mt-10">
						    <div className="container">
							    <div className="content pt-40">
							    	<div className="columns">
							    		<div className="column">
					      					<div className="user-info">
						      					<div id="tab1" className="tab-content">
													<h1 className="title">Refer a friend to Planswell </h1>
													{
														visible=="refer"?
															<div className="box">
																<h1>Get $250 when you refer a friend to Planswell</h1>
																<p>Share your referral friends with your friends, and you and your friend will both receive $250 when they inplement a plan and become a Planswell client.</p>
																<a className="btn button is-small" onClick={e=>this.setState({visible:"code"})} >Get my referral code</a>
																<p><a className="is-underlined" onClick={e=>this.setState({visible:"terms"})}>See the terms and conditions</a></p>
															</div>:
														visible=="code"?
															<div className="box">
																<h1>You've requested a referral code</h1>
																<p>We're generating a personal referral code for you to use. We'll email you to let you know as soon as we have a code for you. For now hang tight.</p>
																<p><a className="is-underlined" onClick={e=>this.setState({visible:"terms"})}>See the terms and conditions</a><a className="button is-small ml-15" onClick={e=>this.setState({visible:"referral-code"})}>Button</a></p>
															</div>:
														visible=="terms"?
															<Terms currentState={this.handelTab} />: 
														visible=="referral-code"?
															<ReferralCode currentState={this.handelTabTerms} />: 
														null
													}
															
												</div>
						
					      					</div>
					      				</div>
							    		<div className="column is-one-third">
					      					<div className="box tabs vertical-align">	      						
					      						<ul>
					      							<li className={ tab==1? "active":"" }><a href="#" rel="tab4" onClick={e => this.setState({ tab: 1 })}>Referral program <i className="fa fa-arrow-right" aria-hidden="true"></i></a></li>
					      							<li className={ tab==2? "active":"" }><a href="#" rel="tab5" onClick={e => this.setState({ tab: 2 })}>Log out <i className="fa fa-arrow-right" aria-hidden="true"></i></a></li>
					      						</ul>
					      					</div>
					      					<div className="box contact-info mt-20 ">
					      						<h6>Contact Planswell</h6>
					      						<div className="p-20">
						      						<p>Have a question about your account? Drop us a line and we’ll get back to you as soon as possible.</p>
						      						<a href="#" className="button">Email us</a> <span>Call us:1-800-PLANSWELL</span>
						      					</div>
					      					</div>
					      				</div>
					      				
					      				
								    </div>
							    </div>
						    </div>
						</div>
					</section>
				</div>
        );
    }
  
}

export default ReferFriend;
