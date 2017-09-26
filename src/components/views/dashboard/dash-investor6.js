import React from 'react';
import { Link } from 'react-router'
class DashboardInvestor6 extends React.Component {
  render() {
        return (
       <div className="column">
       		{
       			  <div className="box no-padding message-col dashboard detialed-box"> 
	              	<article className="message no-margin">
			            <div className="message-header no-padding">
			              <div className="full-width">                    
			                <div className="col is-info col-heading">
			                    <p className="no-margin">Be an investor </p>
			                  </div>
			                  <div className="col">
			                    <p className="no-margin"><h1>You've requested a call from a specialist to discuss your current investments.</h1></p>
			                    <p className="no-margin"><i className="fa fa-mobile is-info" ></i> Design your portfolio and start your monthly investment plan.</p>
			                  </div>
			              </div>
			            </div>
			        </article>
	            </div>
       		}
           
        </div>

        );
    }
  
}

export default DashboardInvestor6;
