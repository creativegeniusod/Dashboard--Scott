import React from 'react';
import { Link } from 'react-router'
import ProtectTitle from './protect-title.js';
class DashboardProtector10 extends React.Component {
  render() {
        return (
        		<div>
	        		<div className="box no-padding message-col dashboard detialed-box"> 
		              	<article className="message no-margin">
				            <div className="message-header no-padding">
				              <div className="full-width">                    
				                	<ProtectTitle />
				                  <div className="col">
				                   <p className="no-margin heading">Put <strong>$114/month</strong> towards <strong>$700,000</strong> of insurance coverage.</p>
				                    <div className="is-danger swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
				                    	<a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
				                    	<a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
				                    	<a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
				                    	<a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
				                    	<a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
				                    	<a href="#" className="swiper-pagination-bullet bold"></a>
				                    	<a href="#" className="swiper-pagination-bullet"></a>
				                    	<a href="#" className="swiper-pagination-bullet"></a>
				                    </div>
				                    <p className="no-margin is-danger">Critical illness:</p>
				                     
				                    <h4 className="no-margin">Good news! Your critical illness policy is in underwriting!</h4>
				                    <p className="no-margin"><a onClick={this.props.protecttab}><i className="fa fa-clock-o is-danger"></i></a>We should hear back from your insurance provider in 2-3 weeks.</p>
				                  </div>
				              </div>
				            </div>
				        </article>
		            </div>
		            <div className="box no-padding message-col dashboard detialed-box"> 
		              	<article className="message no-margin">
				            <div className="message-header no-padding">
				              <div className="full-width"> 
				                  <div className="col">
				                    <p className="no-margin is-danger">Disability:</p>
				                     
				                    <h4 className="no-margin">Your disability insurance your policy is ready to review and sign.</h4>
				                  </div>
				              </div>
				            </div>
				        </article>
				        <div className="col btn-sec pt-10 pb-10">
	                  		<a className="button is-danger" onClick={this.props.protecttab}>Review and sign policy</a>
	                  	</div>
		            </div>
		        </div> 
        );
    }
  
}

export default DashboardProtector10;
