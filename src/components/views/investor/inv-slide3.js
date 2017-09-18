import React from 'react';
import { Link } from 'react-router'

class InvestSlide3 extends React.Component { 
       
        
        
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
										<h4>Your account documents are ready to be signed.</h4>
										<p>After signing your account documents we can open your investment accounts for you.</p>
									</div>
									</article>
									<div className="col btn-sec pt-0">
										<a className="button is-info" onClick={this.props.currentTab}><span>Sign your documents</span></a>
									</div>
								</div>
							</div>
						</div>
					</div>
			    );
    }
  
}

export default InvestSlide3;
