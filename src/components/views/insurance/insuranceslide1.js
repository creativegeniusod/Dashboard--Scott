import React from 'react';
import { Link } from 'react-router'

class InsuranceSlide1 extends React.Component { 
    componentDidMount() {    
      }          
            
  render() {
        return (
                 <div className="swiper-container">
                  <div className="message is-danger">
                    <div className="message-header">
                    </div>
                    <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                      <a href="#" className="swiper-pagination-bullet"></a><a href="#" className="swiper-pagination-bullet"></a><a href="#" className="swiper-pagination-bullet"></a><a href="#" className="swiper-pagination-bullet"></a><a href="#" className="swiper-pagination-bullet"></a><a href="#" className="swiper-pagination-bullet"></a><a href="#" className="swiper-pagination-bullet"></a>
                    </div>
                  </div>
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <article className="message">
                      <div className="box">
                        <p className="danger-title">
                          Protect yourself
                        </p>
                        <h4>You're seven steps away from being insured.</h4>
                      </div>
                      </article>
                      <div className="col btn-sec pt-0">
                        <a className="button is-danger is-outlined" onClick={this.props.currentTab}><span>Get Started</span></a><span className="pull-right already-mortgage">i already have a insurance</span>
                      </div>
                    </div>
                  </div>
                </div>
        );
    }
  
}

export default InsuranceSlide1;
