import React from 'react';
import { Link } from 'react-router'
import AlreadyInsurance from '../already-insurance.js'
import SubmitPopup from '../submit-already-popup.js'
  
class InsuranceSlide1 extends React.Component {    
  constructor(props) {
    super(props);
    this.handelClosePopup = this.handelClosePopup.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
    this.state = {
          display: 0
        };
    }
  handelClosePopup()
  {
    this.setState({display: 0});
  }
  handelSubmit()
  {
    this.setState({display: this.state.display + 1});
  }
      
  render() {
    const {display} = this.state;
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
                        <h4>You're seven steps away from being insured.</h4>
                      </div>
                      </article>
                      <div className="col btn-sec pt-0">
                        <a className="button is-danger is-outlined" onClick={this.props.currentTab}><span>Get Started</span></a><a className="pull-right already-mortgage" onClick={e => this.setState({ display:1})}>i already have a insurance</a>
                      </div>
                    </div>
                  </div>
                  {
                      display==1?
                      <AlreadyInsurance closeTab= {this.handelClosePopup} submit={this.handelSubmit} />:
                      display==2?
                      <SubmitPopup closeTab= {this.handelClosePopup} title="insurance" spantext="coverage" />:
                      null
                  }
                </div>
        );
    }
  
}

export default InsuranceSlide1;
