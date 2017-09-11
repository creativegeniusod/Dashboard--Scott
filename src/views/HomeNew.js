import React from 'react';

class HomeNew extends React.Component {
 
  render() {
        return (
       <div className="main-content">
    <section className="section bg-content level-1">
      <div className="container">
        <div className="columns">
          <div className="column">
              <h1 className="title">
               <i>   Your plan is'nt implemented yet...</i>
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
                                <h4>Your invest accounts are ready to be funded.</h4>
                                <p>Setup your monthly contributions</p>
                              </div>
                            </article>
                            <div className="col btn-sec pt-0">
                              <a className="button is-info">Fund accounts</a>

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
                                <h4>You're seven steps away from being insured.</h4>
                              </div>
                            </article>
                            <div className="col btn-sec pt-0">
                              <a className="button is-danger is-outlined">
                                <span>Get Started</span> 
                              </a>
                              <span className="pull-right">i already have insurance</span>
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
                          <h4>You're seven steps away from a fully funded mortgage.</h4>
                              </div>
                            </article>
                            <div className="col btn-sec pt-0">
                              <a className="button is-warning is-outlined">
                                <span>Get Started</span> 
                              </a>
                              <span className="pull-right">i already have a mortgage</span>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>

          </div>
        </div>
 

    </section>    
  </div>
        );
    }
  
}

export default HomeNew;
