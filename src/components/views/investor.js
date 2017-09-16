import React from 'react';

class Investor extends React.Component {
    constructor(props) {
        super(props);
    }
    
  render() {

        return (
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
                              <div id="modal-3" className="modal is-active modal-fund" >
                                <div className="modal-background"></div> 
                                <div className="modal-content ">
                                  <div className="btn-wrap">
                                    <button className="modal-close is-large" aria-label="close"></button>
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
        );
    }
  
}

export default Investor;
