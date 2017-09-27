import React from 'react';
import { Link } from 'react-router'
import BorrowTitle from './borrow-title.js';

class DashboardBorrow1 extends React.Component {
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
			                    	<a href="#" className="swiper-pagination-bullet bold"></a>
			                    	<a href="#" className="swiper-pagination-bullet"></a>
			                    	<a href="#" className="swiper-pagination-bullet"></a>
			                    	<a href="#" className="swiper-pagination-bullet"></a>
			                    	<a href="#" className="swiper-pagination-bullet"></a>
			                    	<a href="#" className="swiper-pagination-bullet"></a>
			                    </div>
                                <h4 className="no-margin">Next step:</h4>
                                <p className="no-margin">Answer a few questions to let us know about your mortgage needs.</p>
                              </div>
                        </div>
                      </div>
                  </article>
                  <div className="col btn-sec pt-10 pb-10">
                    <a className="button is-warning is-outlined" onClick= {this.props.borrowtab} >Answer question</a>
                    <a className="align-right" onClick= {this.props.borrowpopup.bind("visible","already")}>i already have mortgage</a>
                  </div>
              </div>

        );
    }
  
}

export default DashboardBorrow1;
