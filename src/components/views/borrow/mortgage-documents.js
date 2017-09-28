import React from 'react';
import { Link } from 'react-router'
class MortgageDocuments extends React.Component {
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
			<section className="section bg-content level-1 banner-bg documents">
				<div className="container">
					<div className="col">
						<nav className="breadcrumb is-small has-succeeds-separator" aria-label="breadcrumbs">
						  <ul>
						    <li><Link to="/">Home</Link></li>
						    <li><Link to="/mortgage">Borrowing</Link></li>
						    <li className="is-active"><a href="#" aria-current="page">My mortgage documents</a></li>
						  </ul>
						</nav>					
				    </div>
				    <h1 className="title">Chris' mortgage documents</h1>
					<div className="columns">
				      	<div className="column">
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
                          	<h5><Link className="active" to="/mortgage-documents">My mortgage documents<i className="fa fa-arrow-right float-right"></i></Link></h5>
                          	<h5><a href="#" onClick={e => this.setState({ visible:1})}>Inquire about reﬁnancing<i className="fa fa-arrow-right float-right"></i></a></h5>
                          
                          	
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
				        <a className="button is-warning" data-target="#modal" onClick={e => this.setState({ visible:2})}>Request refinancing</a>
				        <a href="#" className="button inverse-btn" onClick={e => this.setState({ visible:0})}>Nevermind</a>
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
                        <Link className="button modal-button is-warning" data-target="#modal-3" to="/mortgage">Back to mortgage</Link>
                      </div>    
                    </div>
                  </div>:
                    null
			}
		</div>

        );
    }
  
}

export default MortgageDocuments;
