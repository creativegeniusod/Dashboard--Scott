import React from 'react';

class Mortgage extends React.Component {
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
                              <a className="pull-right" onClick={this.openPopUp.bind(this, "mortgage")}>i already have a mortgage</a>
                              <div id="modal" className="modal is-active modal-mortgage" style={{ display: `${this.props.modelMortgage ? 'flex' : 'none'}`}}>
                                <div className="modal-background"></div> 
                                <div className="modal-content">
                                  <div className="btn-wrap">
                                    <button className="modal-close is-large" aria-label="close" onClick={this.ClosePop.bind(this, "mortgage")}></button>
                                  </div>  
                                  <div className="box">
                                    <h2>I already have a mortgage</h2>
                                    <p>That's great! You already have one piece of your puzzle covered. If you don’t mind us asking. we’d appreciate some details about your mortgage for our records and to be sure you’re getting the best mortgage for your needs.</p>
                                    <div className="responsive-table">
                                      <table className="table loan-table">
                                        <thead>
                                        <tr>
                                          <th>Original loan value</th>
                                          <th>Interest rate</th>
                                          <th>Total mortgage paid</th>
                                          <th>Amortization</th> 
                                          </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                          <td><span>$</span>470,000</td>
                                          <td>4.65<span>%</span></td>
                                          <td><span>$</span>46,000</td>
                                          <td>35years</td>    
                                          </tr>              
                                        </tbody>
                                      </table>
                                    </div>
                                    <p className="note-txt">Those don't how: to exact, but as close as possibe will help us,</p>
                                    <a href="#" className="add-more">+ Add another mortgage</a>
                                    <div className="col pt-20">
                                      <a className="button modal-button" data-target="#modal" onClick={this.openPopUp.bind(this, "dashboard","mortgages","mortgage situation")}>Submit details</a>
                                      <a href="#" className="button inverse-btn" onClick={this.ClosePop.bind(this, "mortgage")}>Nevermind</a>
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

export default Mortgage;
