import React from 'react';
import { Link } from 'react-router'
import ProtectTitle from './protect-title.js';

class DashboardProtector3 extends React.Component {
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
			                    	<a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
			                    	<a href="#" className="swiper-pagination-bullet bold"></a>
			                    	<a href="#" className="swiper-pagination-bullet"></a>
			                    </div>
			                    <h4 className="no-margin">Next step:</h4>
			                     
			                    <p className="no-margin"><a onClick={this.props.protecttab}><i className="fa fa-clock-o is-danger" ></i></a> <strong>We've reviewed your questionnaire.</strong> Over the next 2-3 days we'll find the best possible insurance coverage to suit your needs.</p>
			                  </div>
			              </div>
			            </div>
			        </article>
	            </div>

        );
    }
  
}

export default DashboardProtector3;
