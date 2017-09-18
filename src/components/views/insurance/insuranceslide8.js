import React from 'react';
import { Link } from 'react-router'

class InsurancesSlide8 extends React.Component { 
    componentDidMount() {    
      }          
            
  render() {
        return (
                  <div className="swiper-container">
                    <div className="message is-danger">
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
                          <p className="danger-title">
                            Protect yourself
                          </p>
                          <h4>Your insurance provider might need a nurse visit to confirm your health</h4>
                          <p>If you need a nurse visit, you should hear from your provider to book a visit.</p>
                        </div>
                        </article>
                        <table>
                          <thead>
                            <tr>
                              <th>Policy</th>
                              <th>Action required</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                                <td>Critical illness</td>
                                <td><span>Expect call for nurse visit.</span><i className="fa fa-clock-o danger-title"></i></td>
                            </tr>
                            <tr>
                                <td>Disablity</td>
                                <td><span>Expect call for nurse visit.</span><i className="fa fa-clock-o danger-title"></i></td>
                            </tr>
                          </tbody>
                      </table>
                      </div>
                    </div>
                  </div>
        );
    }
  
}

export default InsurancesSlide8;
