import React from 'react';
import { Link } from 'react-router'
import BorrowTitle from './borrow-title.js';
class DashboardBorrow9 extends React.Component {
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
                            <a href="#" className="swiper-pagination-bullet bold"></a>
                            <a href="#" className="swiper-pagination-bullet"></a>
                            <a href="#" className="swiper-pagination-bullet"></a>
                          </div>
                          <p className="no-margin is-warning critical-text">Home mortgage <i class="fa fa-question question-mark"></i></p>
                          <h4 className="no-margin">You've filled out your application. Now it's time to upload the following documents.</h4>
                          <p className="no-margin" ><strike>Your 2017 T4</strike> <span className="float-right green-text">uploaded <i className="fa fa-check green-btn step7" ></i></span></p>
                          <p className="no-margin" >The important doc name</p>
                          <p className="no-margin" >Doc name here</p>
                        </div>
                    </div>
                  </div>
              </article>
                  <div className="col btn-sec pt-10 pb-10">
                      <a className="button is-warning"  onClick= {this.props.borrowtab} >Upload document</a>
                      <span className="app-done">Application filled <i className="fa fa-check green-btn step7"></i></span>
                  </div>
              </div>

        );
    }
  
}

export default DashboardBorrow9;
