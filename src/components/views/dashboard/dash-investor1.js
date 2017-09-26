import React from 'react';
import { Link } from 'react-router'
import InvestTitle from './invest-title.js';

class DashboardInvestor1 extends React.Component {
	
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
			                    <h4 className="no-margin">Next step:</h4>
			                     <p className="no-margin">Your account documents are ready to be signed. After signing your documents, we can open your investing accounts.</p>
			                  </div>
			              </div>
			            </div>
			        </article>
	                	
			          <div className="col btn-sec pt-10 pb-10">
			            <a className="button is-info" onClick={this.props.currenttab}>Sign my documents</a>
			          </div>
	            </div>

        );
    }
  
}

export default DashboardInvestor1;
