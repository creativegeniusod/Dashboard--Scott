import React from 'react';
import { Link } from 'react-router'

class InvestSlide1 extends React.Component { 
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
										<p className="info-title">
											Be an investor
										</p>
										<h4>You're seven steps away from investing in your future.</h4>
									</div>
									</article>
									<div className="col btn-sec pt-0">
										<a className="button is-info is-outlined" onClick={this.props.currentTab}><span>Get Started</span></a>
									</div>
								</div>
							</div>
						</div>
					</div>
			    );
    }
  
}

export default InvestSlide1;
