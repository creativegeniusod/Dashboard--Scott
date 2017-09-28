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
                            <a href="#" className="swiper-pagination-bullet bold"></a>
                            <a href="#" className="swiper-pagination-bullet"></a>
                          </div>
                          <p className="no-margin is-warning critical-text">Home mortgage <i class="fa fa-question question-mark"></i></p>
                          <h4 className="no-margin">We need some more information to complete your mortgage application.</h4>
                          <p className="no-margin" onClick={this.props.borrowtab} >We noticed your mortgage application referrences your credit check from 2016. we'll need your credit check from 2017 so we can update it on your application and get it submitted. One of our Plan Pros will call you in a day or two.</p>
                        </div>
                    </div>
                  </div>
              </article>
              </div>
        );
    }
  
}

export default DashboardBorrow7;
