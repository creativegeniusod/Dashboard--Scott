import React from 'react';
import { Link } from 'react-router'
import ProtectTitle from './protect-title.js';
class DashboardProtector extends React.Component {
  render() {
        return (
       			 <div className="box no-padding message-col dashboard detialed-box"> 
                  <article className="message no-margin">
	                  <div className="message-header no-padding">
	                  	<ProtectTitle />
	                    <div className="full-width">         
	                           <div className="col">
	                              <p className="no-margin heading">Put <strong>$114/month</strong> towards <strong>$700,000</strong> of insurance coverage.</p>
	                              <div className="is-danger swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
			                    	<a href="#" className="swiper-pagination-bullet bold"></a>
			                    	<a href="#" className="swiper-pagination-bullet"></a>
			                    	<a href="#" className="swiper-pagination-bullet"></a>
			                    	<a href="#" className="swiper-pagination-bullet"></a>
			                      </div>
	                                <h4 className="no-margin">Next step:</h4>
	                                <p className="no-margin">Answer a few questions to make sure you qualify.</p>
	                            </div>	                       
	                    </div>
	                  </div>
	              </article>
                  <div className="col btn-sec pt-10 pb-10">
                  	<a className="button is-danger" onClick={this.props.protecttab}>See if qualify</a>
                  	<a className="align-right" onClick={this.props.popupstatus.bind("visible","already")}>i already have insurance</a>
                  </div>
	           </div>

        );
    }
  
}

export default DashboardProtector;
