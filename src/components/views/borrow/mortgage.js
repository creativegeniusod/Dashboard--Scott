import React from 'react';
import { Link } from 'react-router'
class Mortgage extends React.Component {
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
					    <li><Link to='/'>home</Link></li>
					    <li className="is-active"><a href="#" aria-current="page">Borrowing</a></li>
					  </ul>
					</nav>					
			    </div>
			    <h1 className="title">Your mortgage information</h1>
				<div className="columns">
					<div className="column custom-flex">
						<p><small>Total Owing</small></p>
						<h1>$805,350</h1>
					</div>
					<div className="column custom-flex mt-25">
						<p><small>Total Owing</small></p>
						<h4>$14,650</h4>
					</div>
					<div className="column custom-flex mt-25">
						<p><small>Total Owing</small></p>
						<h4>35years</h4>
					</div>
				</div>
				<div className="columns">
			      	<div className="column">
			        	<div className="box no-padding">
			        		<table className="table is-narrow is-fullwidth mtg-table">
								<thead>
							    	<tr>
								      	<th>Debt type</th>
								      	<th>Total value</th>
								      	<th>Payment</th>
								      	<th>Interest</th>
								      	<th></th>
								    </tr>
								</thead>
							  	<tbody>
								    <tr>
									    <td>Home mortgage</td>
									    <td>$470,000</td>
									    <td>$1,750/<span className="gray-txt">month</span></td>
									    <td>4.65<span className="gray-txt">%</span></td>
									    <td><Link to="/mortgage-info">Details</Link></td>
								    </tr>
								    <tr>
									    <td>Cottage mortgage</td>
									    <td>$350,000</td>
									    <td>$1,200/<span className="gray-txt">month</span></td>
									    <td>4.15<span className="gray-txt">%</span></td>
									    <td><Link to="/mortgage-info">Details</Link></td>
								    </tr>
							  	</tbody>
							</table>
							<div className="col btn-sec pb-50 align-center">
							 	<a className="button is-warning is-outlined is-small">
    								<span>Apply for another mortgage</span>    
  								</a>
							 </div>
			        	</div>
			        	
			      	</div>
			      	<div className="column is-one-third">
			        	<div className="box no-padding brand-box document-type">
			        		<div className="message is-warning mb-0">
                          		<div className="message-header"></div>
                          	</div>
                          	<h5><Link to="/mortgage-documents">My mortgage documents</Link></h5>
                          	<h5><a href="#" onClick={e => this.setState({ visible:1})}>Inquire about reﬁnancing</a></h5>
                          
                          	
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
				      <p>Great news! As od August 17, 2017 your mortgage is elligible for refinancing. Before we get started we'll need a few key details from you.</p>
				      <p className="mt-20"><b>Mortgage to refinance</b></p>
				      <div className="columns no-margin">
				          <div className="column black no-padding">
				              <div className="control">
				                <div className="select full-width">
				                  <select>
				                    <option>Home Mortgage</option>
				                    <option>Home Mortgage</option>
				                    <option>Home Mortgage</option>
				                  </select>
				                </div>
				              </div>
				          </div>
				          <div className="column text-right warning-color"></div>
				      </div>
				      <div className="col pt-30">
				        <a className="button is-warning" data-target="#modal"  onClick={e => this.setState({ visible:2})}>Submit details</a>
				        <a href="#" onClick={e => this.setState({ visible:0})} className="button inverse-btn">Nevermind</a>
				      </div>
				    </div>
				</div>
				</div>:
				visible==2?
                  <div id="modal-3" className="modal is-active opened">
                  <div className="modal-background"></div> 
                  <div className="modal-content ">
                    <div className="btn-wrap">
                      <button className="modal-close is-large" aria-label="close" onClick={e => this.setState({ visible:0})}></button>
                    </div>  
                    <div className="box bg-img align-center">
                      <h2 className="align-center">We've received your refinancing request.</h2>  
                      <p className="align-center">One of our plan pros will reach out to you within a day or so. In the mean time, make sure you have all of your mortgage documents together for the review.</p>
                        <Link className="button modal-button is-warning" data-target="#modal-3" onClick={e => this.setState({ visible:0})}>Back to mortgage</Link>
                      </div>    
                    </div>
                  </div>:
                    null
		}
	</div>

        );
    }
  
}

export default Mortgage;
