import React from 'react';
import { Link } from 'react-router'
class Mortgage extends React.Component {
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
									    <td><a href="#">Dlails</a></td>
								    </tr>
								    <tr>
									    <td>Cottage mortgage</td>
									    <td>$350,000</td>
									    <td>$1,200/<span className="gray-txt">month</span></td>
									    <td>4.15<span className="gray-txt">%</span></td>
									    <td><a href="#">Dlails</a></td>
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
			        	<div className="box no-padding brand-box">
			        		<div className="message is-warning mb-0">
                          		<div className="message-header"></div>
                          	</div>
                          	<h5>My mortgage documents</h5>
                          	<h5>Inquire about reﬁnancing</h5>
                          
                          	
			        	</div>
			      	</div>
			    </div>
			</div>
		</section>
	</div>

        );
    }
  
}

export default Mortgage;
