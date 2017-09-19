import React from 'react';
import { Link } from 'react-router'
import AlreadyMortgage from '../already-mortgage.js'
import SubmitPopup from '../submit-already-popup.js'
	
class Bslide extends React.Component {    
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
  	//console.log(this.props.currentState)
    const {display} = this.state;
        return (
			       <div className="swiper-container">
                      <div className="message is-warning">
                          <div className="message-header"></div>
                        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                            <a href="#" className="swiper-pagination-bullet"></a>
                            <a href="#" className="swiper-pagination-bullet"></a>
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
                                  <p className="warning-title">Borrow wisely</p>
                                <h4>You're seven steps away from a fully funded mortgage.</h4>
                                </div>
                            </article>
                            <div className="col btn-sec pt-0">
                                <a className="button is-warning is-outlined" onClick={this.props.currentState} >
                                  <span>Get Started</span> 
                                </a>
                                <a className="pull-right already-mortgage" onClick={e => this.setState({ display:1})}>i already have a mortgage</a>
                            </div>
                          </div>
                      </div>
                      {
                          display==1?
                          <AlreadyMortgage closeTab= {this.handelClosePopup} submit={this.handelSubmit} />:
                          display==2?
                          <SubmitPopup closeTab= {this.handelClosePopup} title="mortgages" spantext="mortgage situation" />:
                          null
                      }
                  </div>
			    );
    }
  
}

export default Bslide;
