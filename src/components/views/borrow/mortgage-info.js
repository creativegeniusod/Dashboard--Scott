import React from 'react';
import { Link } from 'react-router'
class MortgageInfo extends React.Component {
	constructor(props) {
		super(props);
		var type = props.location.query.type ? props.location.query.type : "mystate";
		this.state = {
       	 	tab: type,
       	 	visible:0
       	};
    }
 	
  render() {
  		const {tab}=this.state;
  		const {visible}=this.state;
        return (
	       <div className="main-content">
			<section className="section bg-content level-1 banner-bg1">
				<div className="container">
					<div className="col">
						<nav className="breadcrumb is-small has-succeeds-separator" aria-label="breadcrumbs">
						  <ul>
						    <li><Link to="/">Home</Link></li>
						    <li><Link to="/mortgage">Borrowing</Link></li>
						    <li className="is-active"><a href="#" aria-current="page">Chris' home mortgage</a></li>
						  </ul>
						</nav>					
				    </div>
				    <h1 className="title">Chris' home mortgage</h1>
					<div className="columns custom-flex-wrap">
						<div className="column custom-flex">
							<p><small>Total Owing</small></p>
							<h1>$452,350</h1>
						</div>
						<div className="column custom-flex">
							<p><small>Total Owing</small></p>
							<h4>$452,350</h4>
						</div>
						<div className="column custom-flex">
							<p><small>Total Owing</small></p>
							<h4>$452,350</h4>
						</div>
					</div>
					<div className="columns">
				      	<div className="column">
				        	<div className="box no-padding">
				        		<table className="table is-narrow is-fullwidth mtg-table">
									<thead>
								    	<tr>
									      	<th>Original Loan</th>
									      	<th>Monthly Payment</th>
									      	<th>Amortization Period</th>
									      	<th>Renewal Date</th>
									      	<th>Refinancing</th>
									    </tr>
									</thead>
								  	<tbody>
									    <tr>
										    <td>$470,000</td>
										    <td>$1,750/month</td>
										    <td>35 Years</td>
										    <td>August 2020</td>
										    <td><a href="#" onClick={e => this.setState({ visible:1})} >inquire about refinancing</a></td>
									    </tr>
								  	</tbody>
								</table>
				        	</div>
				        	<div className="box no-padding">
				        		<table className="table is-narrow is-fullwidth mtg-table">
									<thead>
								    	<tr>
									      	<th>Mortgage document</th>
									      	<th>Download link</th>
									    </tr>
									</thead>
								  	<tbody>
									    <tr>
										    <td>Chris Baldesarra's home mortgage underwriting document</td>
										    <td><a href="#"><i className="fa fa-download"></i>Download</a></td>
									    </tr>
									    <tr>
										    <td>Chris Baldesarra's home mortgage funding document</td>
										    <td><a href="#"><i className="fa fa-download"></i>Download</a></td>
									    </tr>
								  	</tbody>
								</table>
				        	</div>
				      	</div>
				      	<div className="column is-one-third">
				      		<div className="box no-padding brand-box document-type">
				        		<div className="message is-warning mb-0">
	                          		<div className="message-header"></div>
	                          	</div>
	                          	<h5><Link to="/mortgage-documents">My mortgage documents<i className="fa fa-arrow-right float-right"></i></Link></h5>
	                          	<h5><a href="#" onClick={e => this.setState({ visible:1})}>Inquire about reﬁnancing<i className="fa fa-arrow-right float-right"></i></a></h5>
	                          
	                          	
				        	</div>
				        	<div className="box no-padding brand-box">
	                          	<h5>My mortgage lender</h5>
	                          	<div className="product-row columns">
	                          		<div className="product-thumb column is-one-quarter">
	                          			<img src="/static/images/rbc.png" />
	                          		</div>
	                          		<div className="product-description column">
	                          			<p><strong>RBC Mortgages</strong></p>
	                          			<a href="">Visit their website</a>
	                          		</div>
	                          	</div>
				        	</div>
				      	</div>
				    </div>
				</div>
			</section>
			{
				visible==1?
				<div id="modal" className="modal is-active opened">
				  <div className="modal-background"></div> 
				  <div className="modal-content">
				    <div className="btn-wrap">
				      <button className="modal-close is-large" aria-label="close" onClick={e => this.setState({ visible:0})}></button>
				    </div>  
				    <div className="box">
				      <h2>Refinance your mortgage</h2>
				      <p>Unfortunately you aren't eligible to refinance your mortgage quite yet. Your mortgage becomes available for renewable on or after yoyr renewal date.</p>
				      <p className="mt-20"><b>Home mortgage renewal date:</b> August 19,2020</p>
				      
				      <div className="col pt-10">
				        <a className="button is-warning" data-target="#modal">Got it</a>
				      </div>
				    </div>
				</div>
			</div>:null
			}
		</div>

        );
    }
  
}

export default MortgageInfo;
