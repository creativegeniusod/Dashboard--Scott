import React from 'react';
import { Link } from 'react-router'
import InvestTitle from './invest-title.js';

class DashboardInvestor3 extends React.Component {
  render() {
        return (
       			  <div className="box no-padding message-col dashboard detialed-box"> 
	              	<article className="message no-margin">
			            <div className="message-header no-padding">
			              <div className="full-width">                    
			                	<InvestTitle />
			                  <div className="col">
			                    <p className="no-margin heading">Invest <strong>$1,000/month</strong> into a TFSA and an RRSP so you'll have <strong>$1,256,080</strong> ready for when you retire.</p>
			                    <div className="is-info swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
			                    	<a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
			                    	<a href="#" className="swiper-pagination-bullet bold"></a>
			                    	<a href="#" className="swiper-pagination-bullet"></a>
			                    </div>
			                    <h4 className="no-margin">We need some more information.</h4>
			                    <p className="no-margin" onClick={this.props.currenttab}>It looks like your account applications was missing line 24 from your latest T4. Check your email inbox for an email from us. That email will contain followup instructions.</p>
			                  </div>
			              </div>
			            </div>
			        </article>
	            </div>

        );
    }
  
}

export default DashboardInvestor3;
