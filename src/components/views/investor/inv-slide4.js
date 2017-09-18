import React from 'react';
import { Link } from 'react-router'

class InvestSlide4 extends React.Component { 
       
        
        
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
										<h4>we've recieved your account agreements. Next we'll need your final approval.</h4>
										<p>At this stage, you'll be approving the final account we intend to open for you.</p>
									</div>
									</article>
									<div className="col btn-sec pt-0">
										<a className="button is-info" onClick={this.props.currentTab}><span>Approve my account</span></a>
									</div>
								</div>
							</div>
						</div>
					</div>
			    );
    }
  
}

export default InvestSlide4;
