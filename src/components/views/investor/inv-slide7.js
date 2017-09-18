import React from 'react';
import { Link } from 'react-router'

class InvestSlide7 extends React.Component { 
       
        
        
    componentDidMount() {
      
      }          
            
  render() {
	    
        return (
			      <div className="box no-padding detialed-box">
						<div className="swiper-container">
							<div className="message is-info">
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
										<p className="info-title">
											Be an investor
										</p>
										<h4>Congratulations! Chris, you're an investor!</h4>
										<p>Be investor you're putting yourself on track to meet your monthly retirement income goals.</p>
									</div>
									</article>
									<div className="col btn-sec pt-0">
										<Link className="button is-info" to="/investment-account" ><span>See my investments</span></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
			    );
    }
  
}

export default InvestSlide7;
