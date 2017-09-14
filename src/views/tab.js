import React from 'react';
import { Link } from 'react-router-dom'

class Tab extends React.Component { 
       
        
        
    componentDidMount() {
      
      }          
            
  render() {
	    
        return (
			       <div id="tab1" className="tab-content">
						<h1 className="title">Chris' account setting </h1>
						<div className="box">
							<div className="columns">
								<div className="column is-4">	      							
									<figure className="pull-left imgbox">
										<img src="images/user-big.png" />
									</figure>
									<div className="grid">
										<h2>Chris Baldesara</h2>
										<h4>25 years old</h4>
									</div>
								</div>
								<div className="column is-4">
									<p>Yearly pre-txt income</p>
									<h4>$65,000</h4>
								</div>
								<div className="column is-4">
									<p>Yearly pre-text income</p>
									<h4>$65,000</h4>
								</div>		
							</div>
							<div className="col pb-10">
								<p>Marital Status</p>
								<h4>Married</h4>
							</div>
							<div className="col pb-10">
								<p>Spouse</p>
								<h4>Kelsey MacKenzie</h4>
							</div>
						</div>		
					</div>
			    );
    }
  
}

export default Tab;
