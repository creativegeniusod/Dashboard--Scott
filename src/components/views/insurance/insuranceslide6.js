import React from 'react';
import { Link } from 'react-router'

class InsurancesSlide6 extends React.Component { 
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
                          <h4>One of your insurance policies has been approved! The other policy is still being reviewed.</h4>
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
                                <td><a onClick={this.props.currentTab} >Click to sign your policy.</a></td>
                            </tr>
                            <tr>
                                <td>Disablity</td>
                                <td><span>Wait for provider response.</span></td>
                            </tr>
                          </tbody>
                      </table>
                      </div>
                    </div>
                  </div>

        );
    }
  
}

export default InsurancesSlide6;
