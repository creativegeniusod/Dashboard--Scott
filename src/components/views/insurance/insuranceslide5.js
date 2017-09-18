import React from 'react';
import { Link } from 'react-router'

class InsurancesSlide5 extends React.Component { 
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
                          <h4>Your insurance plan is ready for review. One of our specialist will reach out.</h4>
                          <p><a href="#" onClick={this.props.currentTab} ><i className="fa fa-mobile danger-title"></i></a>A specialist will give you a call within 1-2 days.</p>
                        </div>
                        </article>
                      </div>
                    </div>
                  </div>
        );
    }
  
}

export default InsurancesSlide5;
