import React from 'react';
import { Link } from 'react-router'
import BorrowTitle from './borrow-title.js';

class DashboardBorrow7 extends React.Component {
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
                            <a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
                            <a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
                            <a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
                            <a href="#" className="swiper-pagination-bullet bold"></a>
                          </div>
                          <p className="no-margin is-warning critical-text">Home mortgage <i class="fa fa-question question-mark"></i></p>
                          <h4 className="no-margin">Great News, Chris, your mortgage has been successfully funded. Now for a title.</h4>
                          <p className="no-margin" ><a onClick={this.props.borrowtab}  ><i className="fa fa-clock-o is-warning" ></i></a> Next, your mortgage is with FCT to draft an official title ownership for you.</p>
                        </div>
                    </div>
                  </div>
              </article>
              </div>
        );
    }
  
}

export default DashboardBorrow7;
