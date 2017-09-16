import React from 'react';
import { Link } from 'react-router'

class Bslide2 extends React.Component { 
    
  render() {
	    
        return (
			       <div className="swiper-container">
                      <div className="message is-warning">
                          <div className="message-header"></div>
                        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                            <a href="#" className="swiper-pagination-bullet bold"></a>
                            <a href="#" className="swiper-pagination-bullet"></a>
                            <a href="#" className="swiper-pagination-bullet"></a>
                            <a href="#" className="swiper-pagination-bullet"></a>
                            <a href="#" className="swiper-pagination-bullet"></a>
                            <a href="#" className="swiper-pagination-bullet"></a>
                            <a href="#" className="swiper-pagination-bullet"></a>
                        </div>
                      </div>
                      <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <article className="message">
                                <div className="box">
                                  <p className="warning-title">Borrow wisely</p>
                                <h4>Let's start off with few mortgage questions to understand you needs</h4>
                                <p>This should only take 10-15 minutes.</p>
                                </div>
                            </article>
                            <div className="col btn-sec pt-0">
                                <a className="button is-warning" onClick={this.props.currentState} >
                                  <span>Fill out questionnaire</span> 
                                </a>
                            </div>
                          </div>
                      </div>
                  </div>
			    );
    }
  
}

export default Bslide2;
