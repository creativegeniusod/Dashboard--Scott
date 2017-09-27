import React from 'react';
import { Link } from 'react-router'
import BorrowTitle from './borrow-title.js';
class DashboardBorrow3 extends React.Component {

  	render() {
        return (
        		<div className="box no-padding message-col dashboard detialed-box"> 
	              	<article className="message no-margin">
			            <div className="message-header no-padding">
			              <div className="full-width">                    
			                	<BorrowTitle />
			                  <div className="col">
			                    <p className="no-margin heading">Save <strong>$400/month</strong> by replacing your current dept with a new mortgage.</p>
			                    <div className="is-warning swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
			                    	<a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
			                    	<a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
			                    	<a href="#" className="swiper-pagination-bullet bold"></a>
			                    	<a href="#" className="swiper-pagination-bullet"></a>
			                    	<a href="#" className="swiper-pagination-bullet"></a>
			                    	<a href="#" className="swiper-pagination-bullet"></a>
			                    </div>
			                    <p className="no-margin is-warning">Home mortgage</p>
			                    <h4 className="no-margin">You didn't quite like our first mortgage proposal, so we're finding something better.</h4>
			                    <p className="no-margin" ><a onClick={this.props.borrowtab} ><i className="fa fa-mobile is-warning"></i></a>Expect a call to review in 1-2 days.</p>
			                  </div>
			              </div>
			            </div>
			        </article>
	            </div>

	           
        );
    }
  
}

export default DashboardBorrow3;
