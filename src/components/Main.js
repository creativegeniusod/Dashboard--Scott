import React from 'react';

class Main extends React.Component {
 
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
				    			<a className="button is-primary">Update my</a>
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
											    <p className="white no-margin">Info <i className="fa fa-check pull-right"></i></p>
										    </div>
										</div>
									    <div className="columns pt-30">
									    	<div className="column">
									    		<small>Total value</small>
									    		<h2>$47,148</h2>
									    	</div>
									    	<div className="column">
									    		<small>Time-weighted</small>
									    		<h2>5.6%</h2>
									    	</div>
									    </div>
									</div>
								</article>
					          	<table className="mb-0">
								    <thead>
								      <tr>
								        <th>Account</th>
								        <th>Total Value</th>
								        <th>Growth</th>
								      </tr>
								    </thead>
								    <tbody>
									    <tr>
									        <td>TFSA</td>
									        <td>$23,604</td>
									        <td>5.9%</td>
									    </tr>
								      	<tr>
								         	<td>RRSP</td>
								        	<td>$22,210</td>
								        	<td>5.9%</td>
								      	</tr>
								    </tbody>
								 </table>
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
											    <p className="white no-margin">Info <i className="fa fa-check pull-right"></i></p>
										    </div>
										</div>
									    <div className="columns pt-30">
									    	<div className="column">
									    		<small>Total Coverage</small>
									    		<h2>$47,148</h2>
									    	</div>
									    </div>
									</div>
								</article>
					          	<table>
								    <thead>
								      <tr>
								        <th>Policy Type</th>
								        <th>Total Value</th>
								        <th>Coverage term</th>
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
											    <p className="white no-margin">Info <i className="fa fa-check pull-right"></i></p>
										    </div>
										</div>
									    <div className="columns pt-30">
									    	<div className="column">
									    		<small>Value Owing</small>
									    		<h2>$47,148</h2>
									    	</div>
									    	<div className="column">
									    		<small>Interest rate</small>
									    		<h2>5.6%</h2>
									    	</div>
									    </div>
									</div>
								</article>
					          	<table>
								    <thead>
								      <tr>
								        <th>Debt Type</th>
								        <th>Amount Paid</th>
								        <th>Interest rate</th>
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

export default Main;
