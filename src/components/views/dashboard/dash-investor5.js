import React from 'react';
import { Link } from 'react-router'
import InvestTitle from './invest-title.js'
class DashboardInvestor5 extends React.Component {

  	render() {
        return (
        		<div>
       			  <div className="box no-padding message-col dashboard detialed-box"> 
	              	<article className="message no-margin">
			            <div className="message-header no-padding">
			              <div className="full-width">                    
			                	<InvestTitle />
			                  <div className="col">
			                    <p className="no-margin heading">Invest $1,000/month into a TFSA and an RRSP so you'll have $1,256,080 ready for when you retire.</p>
			                    <h4 className="no-margin">Your Investment accounts are open and ready to funded.</h4>
			              </div>
			              <div className="col mt-20">
			                    <div className="columns ml-20 pt-10 top-border">
			                    	<div className="column tfsa-text pt-20">Your TFSA</div>
			                    	<div className="column right-side">
			                    		<span className="green-btn step7">Funded! <i className="fa fa-check step7 green-btn" onClick={this.props.currenttab}></i></span>
			                    	</div>
			                    </div>
			                     <div className="columns ml-20 pt-10 top-border">
			                    	<div className="column tfsa-text pt-20">Your RRSP</div>
			                    	<div className="column right-side"><a className="button is-info" >Fund my RRSP</a></div>
			                    </div>
			                  </div>
		                  </div>
			            </div>
			        </article>
			    </div>
	           </div>
	           
        );
    }
  
}

export default DashboardInvestor5;
