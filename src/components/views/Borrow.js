import React from 'react';
import { Link } from 'react-router'
class Borrow extends React.Component {
	constructor(props) {
		super(props);
		var type = props.location.query.type ? props.location.query.type : "mystate";
		this.state = {
       	 	tab: type,
       	};
    }
 	
  render() {
  		const {tab}=this.state;
        return (
       <div className="main-content">
       <section className="section bg-content level-1 no-padding">
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

		
		<section className="section bg-content level-1 borrow-bg1 no-padding">
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
								    		<button className="button is-primary is-outlined is-small"><i className="fa fa-upload"></i> &nbsp;&nbsp; Uploads Documents</button>
								    	</td>
								    	<td></td>
								    </tr>
							  	</tbody>
							</table>
			        	</div>
			      	</div>
			      	<div className="column is-one-third">
			        	<div className="box no-padding brand-box">
			        		<div className="message message is-info mb-0">
                          		<div className="message-header"></div>
                          	</div>
                          	<div className="box tabs vertical-align">                                  

                                  <ul>

                                      <li className=""><a href="javascript:void(0)" onClick={e => this.setState({ tab: "mystate" })} rel="tab1">Manage statements <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
	                                      	{
	                                      	 	tab== "mystate" ?
							   					<ul className="" ><li><i className="fa fa-check green-btn"></i>Account performance report</li><li><i className="fa fa-check green-btn"></i>Account agreement document</li><li><i className="fa custom-icon"></i>Transfer document</li></ul>:
							   					null
	                                     	}
                                    	
                                      </li>

                                      <li><a href="javascript:void(0)" onClick={e => this.setState({ tab: "account" })} rel="tab2">Account history <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                      		{
	                                      		tab== "account" ?
							   					<ul className="" ><li><i className="fa fa-check green-btn"></i>Deposite</li><li><i className="fa fa-check green-btn"></i>Transfer</li><li><i className="fa fa-check green-btn"></i>Dividends</li></ul>:
							   					null
	                                      	}
                                      </li>

                                      <li><a href="javascript:void(0)" onClick={e => this.setState({ tab: "fund" })} rel="tab3">Fund my account <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                      		{
	                                      	 	tab== "fund" ?
							   					<div className="" >tab1</div>:
							   					null
	                                      	}
                                      </li>

                                      <li><a href="javascript:void(0)" onClick={e => this.setState({ tab: "withdrawal" })} rel="tab4">Withdrawal funds <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                      		{
		                                      	tab== "withdrawal" ?
								   				<div className="" >tab1</div>:
								   				null
		                                    }
                                      </li>
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
