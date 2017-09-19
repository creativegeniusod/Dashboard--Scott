import React from 'react';
import { Link } from 'react-router'

class InvestSlide2 extends React.Component { 
       
        
        
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
										<p className="info-title">
											Be an investor
										</p>
										<h4>Let's get your investment started with a few questions</h4>
										<p>This questionnaire lets us understand your financial situation and only takes 10-15 minutes.</p>
									</div>
									</article>
									<div className="col btn-sec pt-0">
										<a className="button is-info" onClick={this.props.currentTab}><span>Fill out my questionnaire</span></a>
									</div>
								</div>
							</div>
						</div>
					</div>
			    );
    }
  
}

export default InvestSlide2;
