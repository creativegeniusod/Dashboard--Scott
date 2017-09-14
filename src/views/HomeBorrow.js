import React from 'react';
import { Link } from 'react-router-dom'

class HomeBorrow extends React.Component {
  render() {
        return (
       <div className="main-content">

		<section className="section bg-content level-1">
			<div className="container">
				<div className="columns">
					<div className="column">
					    <h1 className="title">
					        Your plan needs an update <i className="fa fa-exclamation-triangle" style={{color:"#ffbd47"}}></i>
					    </h1>
				      	<p className="subtitle">
				        	Update your plan and keep on track to retire at age 65 with a monthly income of $42,000, and a surplus of $85,000 at age 90.
				      	</p>
				    </div>
				    <div className="column">
				    	<div className="box answer-box">
				    		<h4>it's that time of the year again</h4>
				    		<p>Answer a few key questions to ensure your plan is on track.</p>
				    		<div className="btn-section">
				    			<a className="button is-primary">Update my plan</a>
				    			<a className="button is-primary is-outlined">I've seen this</a>
				    		</div>
				    	</div>
				    </div>
			    </div>
			</div>
		</section>
		<section className="section level-2">
		    <div className="container">
			    <div className="content">
			    	<div className="columns is-variable bd-klmn-columns is-3">
	      				<div className="column">
					        <div className="box no-padding message-col">
					        	<article className="message is-info">
									<div className="message-header">
										<div className="full-width">										
											<div className="col">
											    <p className="white no-margin">Be an investor <i className="fa fa-check pull-right"></i></p>
										    </div>
										</div>
									    <div className="columns pt-30">
									    	<div className="">
									    		<h2>Your investment accounts are fully funded and active.</h2>
									    	</div>
									    </div>
									</div>
								</article>
					       <ul>
                  <li><Link to='/borrow'>My statements</Link></li>
                  <li><Link to='/borrow'>Account history</Link></li>
                  <li><Link to='/borrow'>Fund my accounts</Link></li>
                  <li><Link to='/borrow'>Withdrawal funds</Link></li>
                 </ul>
								 <div className="col btn-sec pt-10 pb-10">
								 	<a className="button is-info is-outlined">More Details</a>
								 </div>
					        </div>
	  					</div>
					    <div className="column">
					        <div className="box no-padding message-col">
					        	<article className="message is-danger">
									<div className="message-header">
										<div className="full-width">										
											<div className="col">
											    <p className="white no-margin">Perfect yourself	 <i className="fa fa-check pull-right"></i></p>
										    </div>
										</div>
									    <div className="columns pt-30">
									    	<div className="column">
									    		<small>Total Coverage</small>
									    		<h2><div className="icon-currency">$</div>650,000</h2>
									    	</div>
									    </div>
									</div>
								</article>
					          	<table>
								    <thead>
								      <tr>
								        <td>Policy Type</td>
								        <td>Total Value</td>
								        <td>Coverage term</td>
								      </tr>
								    </thead>
								    <tbody>
									    <tr>
									        <td>Critical illness</td>
									        <td>$650,000</td>
									        <td>25years</td>
									    </tr>
								    </tbody>
								</table>
								 <div className="col btn-sec pt-10 pb-10">
								 	<a className="button is-danger is-outlined">
	    								<span>More Details</span>    
	  								</a>
								 </div>
					        </div>
					    </div>
				      	<div className="column">
					        <div className="box no-padding message-col">
					        	<article className="message is-warning">
									<div className="message-header">
										<div className="full-width">										
											<div className="col">
											    <p className="white no-margin">Borrow wisely <i className="fa fa-check pull-right"></i></p>
										    </div>
										</div>
									    <div className="columns pt-30">
									    	<div className="column">
									    		<small>Value Owing</small>
									    		<h2><div className="icon-currency">$</div>714,000</h2>
									    	</div>
									    	<div className="column">
									    		<small>Interest rate</small>
									    		<h2>4.65<div className="icon-currency">%</div></h2>
									    	</div>
									    </div>
									</div>
								</article>
					          	<table>
								    <thead>
								      <tr>
								        <td>Debt Type</td>
								        <td>Amount Paid</td>
								        <td>Interest rate</td>
								      </tr>
								    </thead>
								    <tbody>
									    <tr>
									        <td>Home mortgage</td>
									        <td>$26,000</td>
									        <td>4.5%</td>
									    </tr>
								    </tbody>
								</table>
								 <div className="col btn-sec pt-10 pb-10">
								 	<a className="button is-warning is-outlined">
	    								<span>More Details</span>    
	  								</a>
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

export default HomeBorrow;
