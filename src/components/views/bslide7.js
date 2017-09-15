import React from 'react';
import { Link } from 'react-router'

class Bslide7 extends React.Component { 
       
        
        
    componentDidMount() {
      
      }          
            
  render() {
	    
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
                                <h4>You didn't quite like our first mortgage proposals, we're finding something better for you.</h4>
                                 <p><a className="button is-warning is-outlined" onClick={this.props.currentState} >@</a> Expect to a call  to review within 1-2 days.</p>
                                </div>
                            </article>
                          </div>
                          <div className="col btn-sec pt-0">
                              <a className="button is-warning is-outlined" onClick={this.props.currentState} >
                                <span>Fill application</span> 
                              </a>
                              <a className="button is-warning is-outlined" >
                                <span>Upload documents</span> 
                              </a>
                          </div>
                      </div>
                  </div>
			    );
    }
  
}

export default Bslide7;
