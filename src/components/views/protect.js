import React from 'react';

class Protect extends React.Component {
    constructor(props) {
        super(props);
        this.openPopUp = this.openPopUp.bind(this);
        this.ClosePop = this.ClosePop.bind(this);
    }
    openPopUp(type,dashboardtitle,dashboardcontent) {
       this.props.handleInsurancePopup(type, dashboardtitle,dashboardcontent);
		
    }
    ClosePop(type) {
      this.props.handlePopupClose(type);
    }
    
    
  render() {

        return (
                  <div className="column custom-col-3">
                    <div className="box no-padding message-col detialed-box">
                      <div className="swiper-container">
                        <div className="message is-danger">
                          <div className="message-header"></div>
                          <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                            <a href="#" className="swiper-pagination-bullet"></a>
                            <a href="#" className="swiper-pagination-bullet"></a>
                            <a href="#" className="swiper-pagination-bullet"></a>
                            <a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
                          </div>
                        </div>
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <article className="message">
                              <div className="box">
                                <h6 className="danger-title">Protect Yourself</h6>
                                <h4>You're only seven steps away from being insured.</h4>
                              </div>
                            </article>
                            <div className="col btn-sec pt-0">
                              <a className="button is-danger is-outlined">
                                <span>Get Started</span> 
                              </a>
                              <a className="pull-right" onClick={this.openPopUp.bind(this, "insurance")}>i already have insurance</a>
                                <div id="modal" className="modal is-active modal-insurance" style={{ display: `${this.props.modelInsurance ? 'flex' : 'none'}`}}>
                                  <div className="modal-background"></div> 
                                    <div className="modal-content">
                                      <div className="btn-wrap">
                                        <button className="modal-close is-large"  aria-label="close" onClick={this.ClosePop.bind(this, "insurance")}></button>
                                      </div>  
                                      <div className="box">
                                        <h2>I already have a insurance</h2>
                                        <p>That's great! You already have one piece of your puzzle covered. If you don’t mind us asking. we’d appreciate some details about your coverage for our records and to be sure you’re getting the best coverage for your needs.</p>
                                        <h3>Check all of the insurance policies you currently have</h3>
                                        <div className="field">
                                          <div className="control">
                                            <label className="radio">
                                              <input type="radio" name="question" />
                                             Critical illness insurance
                                            </label>          
                                          </div>
                                        </div>
                                        <div className="field">
                                          <div className="control">
                                            <label className="radio">
                                              <input type="radio" name="question" />
                                              Disability insurance
                                            </label>          
                                          </div>
                                        </div>
                                        <div className="field">
                                          <div className="control">
                                            <label className="radio">
                                              <input type="radio" name="question" />
                                              Term life insurance
                                            </label>          
                                          </div>
                                        </div>
                                        <div className="field">
                                          <div className="control">
                                            <label className="radio">
                                              <input type="radio" name="question" />
                                              Whole life insurance
                                            </label>          
                                          </div>
                                        </div>
                                        <div className="field">
                                          <div className="control">
                                            <label className="radio">
                                              <input type="radio" name="question" />
                                              Submit details Nevermin
                                            </label>          
                                          </div>
                                        </div>
                                        <div className="col pt-20">
                                          <a className="button modal-button" data-target="#modal" onClick={this.openPopUp.bind(this, "dashboard","insurance","coverage")}>Submit details</a>
                                          <a href="#" className="button inverse-btn" onClick={this.ClosePop.bind(this, "insurance")}>Nevermind</a>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
        );
    }
  
}

export default Protect;
