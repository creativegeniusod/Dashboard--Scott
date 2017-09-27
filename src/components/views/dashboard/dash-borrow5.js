import React from 'react';
import { Link } from 'react-router'
import BorrowTitle from './borrow-title.js';
class DashboardBorrow5 extends React.Component {
  render() {
        return (
       <div className="column">
       		{
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
			                    	<a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
			                    	<a href="#" className="swiper-pagination-bullet bold"></a>
			                    	<a href="#" className="swiper-pagination-bullet"></a>
			                    	<a href="#" className="swiper-pagination-bullet"></a>
			                    </div>
			                    <p className="no-margin is-warning">Home mortgage</p>
			                    <h4 className="no-margin">Your mortgage application is ready to be completed, and we'll need a few documents from you as well</h4>
			                    <p className="no-margin" >Filling out your application should only take 10-15 minutes, and we'll need [this document] [that document], and [this document]. Be sure to get them ready before starting your application.</p>
			                  </div>
			              </div>
			            </div>
			        </article>
			        <div className="col btn-sec pt-10 pb-10">
                    	<a className="button is-warning" >Upload document</a>
                    	<span className="app-done">Application filled <i className="fa fa-check green-btn step7"></i></span>
                 	</div>
	            </div>
       		}
           
        </div>

        );
    }
  
}

export default DashboardBorrow5;
