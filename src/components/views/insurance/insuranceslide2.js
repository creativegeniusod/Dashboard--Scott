import React from 'react';
import { Link } from 'react-router'

class InsurancesSlide2 extends React.Component { 
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
                        <h4>Let's start off with a few insurance questions to understand your needs.</h4>
                        <p>This should only take 10-15 minutes.</p>
                      </div>
                      </article>
                      <div className="col btn-sec pt-0">
                        <a className="button is-danger" onClick={this.props.currentTab}><span>Fill out questionnaire</span></a>
                      </div>
                    </div>
                  </div>
                </div>
        );
    }
  
}

export default InsurancesSlide2;
