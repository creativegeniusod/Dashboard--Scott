import React from 'react';
import { Link } from 'react-router'
	
class Bslide extends React.Component {    

  render() {
  	//console.log(this.props.currentState)
        return (
			       <div className="swiper-container">
                      <div className="message is-warning">
                          <div className="message-header"></div>
                        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                            <a href="#" className="swiper-pagination-bullet"></a>
                            <a href="#" className="swiper-pagination-bullet"></a>
                            <a href="#" className="swiper-pagination-bullet"></a>
                            <a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
                        </div>
                      </div>
                      <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <article className="message">
                                <div className="box">
                                  <p className="warning-title">Borrow wisely</p>
                                <h4>You're seven steps away from a fully funded mortgage.</h4>
                                </div>
                            </article>
                            <div className="col btn-sec pt-0">
                                <a className="button is-warning is-outlined" onClick={this.props.currentState} >
                                  <span>Get Started</span> 
                                </a>
                                <span className="pull-right">i already have a mortgage</span>
                            </div>
                          </div>
                      </div>
                  </div>
			    );
    }
  
}

export default Bslide;
