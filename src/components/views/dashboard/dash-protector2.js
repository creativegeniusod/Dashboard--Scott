import React from 'react';
import { Link } from 'react-router'
import ProtectTitle from './protect-title.js';

class DashboardProtector2 extends React.Component {
  render() {
        return (
		      <div className="box no-padding message-col dashboard detialed-box"> 
	              	<article className="message no-margin">
			            <div className="message-header no-padding">
			              <div className="full-width">                    
			                	<ProtectTitle />
			                  <div className="col">
	                            <p className="no-margin heading">Put <strong>$114/month</strong> towards <strong>$700,000</strong> of insurance coverage.</p>
			                    <div className="is-danger swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
			                    	<a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
			                    	<a href="#" className="swiper-pagination-bullet bold"></a>
			                    	<a href="#" className="swiper-pagination-bullet"></a>
			                    	<a href="#" className="swiper-pagination-bullet"></a>
			                    </div>
			                    <h4 className="no-margin">Next step:</h4>
			                     
			                    <p className="no-margin"><a onClick={this.props.protecttab}><i className="fa fa-mobile is-danger" ></i></a> <strong>You filled out your questionnaire.</strong> Next, a specialist will call you in 1-2 days to review your answers.</p>
			                  </div>
			              </div>
			            </div>
			        </article>
	            </div>

        );
    }
  
}

export default DashboardProtector2;
