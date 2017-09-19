import React from 'react';
import { Link } from 'react-router'

class InvestSlide6 extends React.Component { 
       
        
        
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
									<a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
									<a href="#" className="swiper-pagination-bullet bold"></a>
								</div>
							</div>
							<div className="swiper-wrapper">
								<div className="swiper-slide">
									<article className="message">
									<div className="box">
										<p className="info-title">
											Be an investor
										</p>
										<h4>Your accounts are open and awaiting for funding.</h4>
										<p>Funding should arrive in 2-3 weeks.</p>
									</div>
									</article>
									 <table>
			                          <thead>
			                            <tr>
			                              <th>Account</th>
			                              <th>Action</th>
			                            </tr>
			                          </thead>
			                          <tbody>
			                            <tr>
			                                <td>TFSA</td>
			                                <td><span>Auto-deposite pending </span><a onClick={this.props.currentTab}><i className="fa fa-clock-o info-title"></i></a></td>
			                            </tr>
			                            <tr>
			                                <td>RRSP</td>
			                                <td><span>Auto-deposite pending </span><a onClick={this.props.currentTab}><i className="fa fa-clock-o info-title"></i></a></td>
			                            </tr>
			                          </tbody>
			                      </table>
								</div>
							</div>
						</div>
					</div>
			    );
    }
  
}

export default InvestSlide6;
