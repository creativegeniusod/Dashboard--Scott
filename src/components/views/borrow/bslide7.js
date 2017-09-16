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
                            <a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
                            <a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
                            <a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
                            <a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
                            <a href="#" className="swiper-pagination-bullet bold"></a>
                            <a href="#" className="swiper-pagination-bullet"></a>
                            <a href="#" className="swiper-pagination-bullet"></a>
                        </div>
                      </div>
                      <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <article className="message">
                                <div className="box">
                                  <p className="warning-title">Borrow wisely</p>
                                <h4>Great news! Your mortgage is in underwriting</h4>
                                 <p><a className="" onClick={this.props.currentState} ><i className="fa fa-clock-o step7" aria-hidden="true"></i>
</a>Underwritting should take 2-3 weeks to fully complete. Then is to funding stage.</p>
                                </div>
                            </article>
                          </div>
                      </div>
                  </div>
			    );
    }
  
}

export default Bslide7;
