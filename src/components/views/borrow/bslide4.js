import React from 'react';
import { Link } from 'react-router'

class Bslide4 extends React.Component { 
       
        
        
    componentDidMount() {
      
      }          
            
  render() {
	    
        return (
			       <div className="swiper-container">
                      <div className="message is-warning">
                          <div className="message-header"></div>
                        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                            <a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
                            <a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
                            <a href="#" className="swiper-pagination-bullet bold"></a>
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
                                <h4>We've reviewed your questionnaire and we're finding the best mortgage to suit your needs</h4>
                                <p><a onClick={this.props.currentState} > <i className="fa fa-mobile"></i></a> Expect to a call  to review within 1-2 days.</p>
                                </div>
                            </article>
                          </div>
                      </div>
                  </div>
			    );
    }
  
}

export default Bslide4;
