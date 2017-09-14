import React from 'react';

class HomeNew extends React.Component {
    constructor(props) {
        super(props);
        this.handleInsurancePopup = this.handleInsurancePopup.bind(this);
        this.handlePopupClose = this.handlePopupClose.bind(this);
        this.state = {
            display: false,
        };
    }
    handleInsurancePopup(type, dashboardtitle,dashboardcontent) {
      if(type == "dashboard")
      {
        $(".modal").css('display','none');
        $(".modal-"+type+" h2 span").html(dashboardtitle);
        $(".modal-"+type+" p span").html(dashboardcontent);
      }
      $(".modal-"+type).css('display','flex');

    } 
    handlePopupClose(type) {
      $(".modal-"+type).css('display','none');
    }
  render() {
        return (
       <div className="main-content">
    <section className="section bg-content level-1">
      <div className="container">
        <div className="columns">
          <div className="column">
              <h1 className="title">
               Your plan isn't implemented yet...
              </h1>
                <p className="subtitle">
                  You retire at age 65 with a monthly income of $42,000, and a surplus of $85,000 at age 90.It starts with a plan.
                </p>
            </div>
            <div className="column">
            </div>
          </div>
      </div>
    </section>
    <section className="section level-2">
        <div className="container">
          <div className="content">
            <div className="columns custom-columns is-variable bd-klmn-columns is-3">
                <div className="column custom-col-3">
                    <div className="box no-padding detialed-box"> 
                      <div className="swiper-container">
                        <div className="message is-info">
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
                                <h6 className="info-title">Be an investor</h6>
                                <h4>Your investments accounts are ready to be funded.</h4>
                                <p>Setup your monthly contributions</p>
                              </div>
                            </article>
                            <div className="col btn-sec pt-0">
                              <a className="button is-info">Fund</a>
                              <div id="modal-3" className="modal is-active modal-fund">
                                <div className="modal-background"></div> 
                                <div className="modal-content ">
                                  <div className="btn-wrap">
                                    <button className="modal-close is-large" aria-label="close" onClick={this.handlePopupClose.bind(this, "fund")}></button>
                                  </div>  
                                  <div className="box bg-img">
                                    <h2 className="align-center">High ﬁve! Your RRSP is funded</h2>
                                    <p className="align-center">We’ll begin a monthly auto-deposit of <strong>$418 from your TD Chequing account to your RRSP</strong>. That monthly contribution will put you on the track to reaching you rgoal of <strong>$48,000 monhtly income</strong> in retirement.</p>  
                                    <div className="col pt-30 align-center">
                                      <a href="#" className="button is-info modal-button" data-target="#modal-3">Fund antoher account</a><br/>
                                      <a href="#" className="button inverse-btn">Back to investments</a>
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
                <div className="column custom-col-3">
                    <div className="box no-padding detialed-box">
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
                              <a className="pull-right" onClick={this.handleInsurancePopup.bind(this, "insurance")}>i already have insurance</a>
                                <div id="modal" className="modal is-active modal-insurance">
                                  <div className="modal-background"></div> 
                                    <div className="modal-content">
                                      <div className="btn-wrap">
                                        <button className="modal-close is-large"  aria-label="close" onClick={this.handlePopupClose.bind(this, "insurance")}></button>
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
                                          <a className="button modal-button" data-target="#modal" onClick={this.handleInsurancePopup.bind(this, "dashboard","insurance","coverage")}>Submit details</a>
                                          <a href="#" className="button inverse-btn" onClick={this.handlePopupClose.bind(this, "insurance")}>Nevermind</a>
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

                <div className="column custom-col-3">
                    <div className="box no-padding detialed-box">
                      <div className="swiper-container">
                        <div className="message is-warning">
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
                                <h6 className="warning-title">Protect Yourself</h6>
                          <h4>You're only seven steps away from a fully funded mortgage.</h4>
                              </div>
                            </article>
                            <div className="col btn-sec pt-0">
                              <a className="button is-warning is-outlined">
                                <span>Get Started</span> 
                              </a>
                              <a className="pull-right" onClick={this.handleInsurancePopup.bind(this, "mortgage")}>i already have a mortgage</a>
                              <div id="modal" className="modal is-active modal-mortgage">
                                <div className="modal-background"></div> 
                                <div className="modal-content">
                                  <div className="btn-wrap">
                                    <button className="modal-close is-large" aria-label="close" onClick={this.handlePopupClose.bind(this, "mortgage")}></button>
                                  </div>  
                                  <div className="box">
                                    <h2>I already have a mortgage</h2>
                                    <p>That's great! You already have one piece of your puzzle covered. If you don’t mind us asking. we’d appreciate some details about your mortgage for our records and to be sure you’re getting the best mortgage for your needs.</p>
                                    <div className="responsive-table">
                                      <table className="table loan-table">
                                        <thead>
                                          <th>Original loan value</th>
                                          <th>Interest rate</th>
                                          <th>Total mortgage paid</th>
                                          <th>Amortization</th> 
                                        </thead>
                                        <tbody>
                                          <td><span>$</span>470,000</td>
                                          <td>4.65<span>%</span></td>
                                          <td><span>$</span>46,000</td>
                                          <td>35years</td>                  
                                        </tbody>
                                      </table>
                                    </div>
                                    <p className="note-txt">Those don't how: to exact, but as close as possibe will help us,</p>
                                    <a href="#" className="add-more">+ Add another mortgage</a>
                                    <div className="col pt-20">
                                      <a className="button modal-button" data-target="#modal" onClick={this.handleInsurancePopup.bind(this, "dashboard","mortgages","mortgage situation")}>Submit details</a>
                                      <a href="#" className="button inverse-btn" onClick={this.handlePopupClose.bind(this, "mortgage")}>Nevermind</a>
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
            </div>

          </div>
        </div>
        <div id="modal-3" className="modal is-active modal-dashboard">
          <div className="modal-background"></div> 
          <div className="modal-content ">
            <div className="btn-wrap">
              <button className="modal-close is-large" aria-label="close" onClick={this.handlePopupClose.bind(this, "dashboard")}></button>
            </div>  
            <div className="box bg-img">
              <h2 className="align-center">You're great! and <span>insurance</span> should be too</h2>
              <p className="align-center">We really appreciate you letting us know your current <span>coverage</span>. If we think we have something better, we'll reach out to you with details.</p>
                <a href="#" className="button modal-button" data-target="#modal-3" onClick={this.handlePopupClose.bind(this, "dashboard")}>Back to dashboard</a>
              </div>    
            </div>
          </div>
    </section>  
  </div>
        );
    }
  
}

export default HomeNew;
