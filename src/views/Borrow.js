import React from 'react';
import { Link } from 'react-router-dom'
class Borrow extends React.Component {
 
  render() {
        return (
       <div className="main-content">
       <section className="section bg-content level-1">
			<div className="container">
				<div className="col">
					<nav className="breadcrumb is-small has-succeeds-separator" aria-label="breadcrumbs">
					  <ul>
					    <li><Link to='/'>home</Link></li>
					    <li className="is-active"><a href="#" aria-current="page">Account setting</a></li>
					  </ul>
					</nav>
					
			    </div>
			    <h1 className="title">Chris' investment statements</h1>
			</div>

		
		<section className="section bg-content level-1 borrow-bg1">
			<div className="container">
				<div className="columns">
			      	<div className="column">
			        	<div className="box no-padding">
			        		<table className="table is-narrow is-fullwidth mtg-table upload-document-table">
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
								    <tr>
								    	<td>
								    		<button className="button is-primary is-outlined"><i className="fa fa-upload"></i> &nbsp;&nbsp; Uploads Documents</button>
								    	</td>
								    	<td></td>
								    </tr>
							  	</tbody>
							</table>
			        	</div>
			      	</div>
			      	<div className="column is-one-third">
			        	<div className="box no-padding brand-box">
			        		<div className="message is-warning mb-0">
                          		<div className="message-header"></div>
                          	</div>
                          	<h5 className="warning-color">My mortgage lender</h5>
                          	<div className="box tabs vertical-align">                                  

                                  <ul>

                                      <li className=""><a href="javascript:void(0)" rel="tab1">Account settings <i className="fa fa-arrow-right" aria-hidden="true"></i></a></li>

                                      <li><a href="javascript:void(0)" rel="tab2">Update your plan <i className="fa fa-arrow-right" aria-hidden="true"></i></a></li>

                                      <li><a href="javascript:void(0)" rel="tab3">Notification centre <i className="fa fa-arrow-right" aria-hidden="true"></i></a></li>

                                      <li><a href="javascript:void(0)" rel="tab4">Referral program <i className="fa fa-arrow-right" aria-hidden="true"></i></a></li>

                                      <li><a href="javascript:void(0)" rel="tab5">Log out <i className="fa fa-arrow-right" aria-hidden="true"></i></a></li>

                                  </ul>

                              </div>
			        	</div>
			      	</div>
			    </div>
			</div>
		</section>
		</section>
	</div>

        );
    }
  
}

export default Borrow;
