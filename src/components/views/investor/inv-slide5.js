import React from 'react';
import { Link } from 'react-router'

class InvestSlide5 extends React.Component { 
       
        
        
    componentDidMount() {
      
      }          
            
  render() {
	    
        return (
			        <div className="box no-padding message-col detialed-box">
						<div className="swiper-container">
							<div className="message is-info">
								<div className="message-header">
								</div>
								<div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
									<a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
									<a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
									<a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
									<a href="#" className="swiper-pagination-bullet bold"></a>
									<a href="#" className="swiper-pagination-bullet"></a>
								</div>
							</div>
							<div className="swiper-wrapper">
								<div className="swiper-slide">
									<article className="message">
									<div className="box">
										<p className="info-title">
											Be an investor
										</p>
										<h4>Good news! Your accounts are being opened as we speak.</h4>
										<p><a onClick={this.props.currentTab}><i className="fa fa-clock-o info-title"></i></a>Your account should take 1-2 weeks to open. We'll be sure to let you know when they do.</p>
									</div>
									</article>
								</div>
							</div>
						</div>
					</div>
			    );
    }
  
}

export default InvestSlide5;
