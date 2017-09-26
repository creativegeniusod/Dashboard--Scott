import React from 'react';
import { Link } from 'react-router'

class Borrow extends React.Component {
   constructor(){
    super();
    this.state= { visible: 0,tab:1 };
  }
  render() {
        const {visible,tab} = this.state;
        return (
            <div className="column">
              <div className="box no-padding message-col dashboard detialed-box"> 
                  <article className="message no-margin">
                      <div className="message-header no-padding">
                        <div className="full-width">                    
                            <div className="col is-warning col-heading"><p className="no-margin">Borrow Wisely</p></div>
                            {
                              tab == 1?
                              <div className="col">
                                <p className="no-margin heading">Save <strong>$400/month</strong> by replacing your current dept with a new mortgage.</p>
                                <h4 className="no-margin">Next step:</h4>
                                <p className="no-margin">Answer a few questions to let us know about your mortgage needs.</p>
                              </div>:
                              tab == 2?
                               <div className="col">
                                  <h4 className="no-margin">You've requested a call from a specialist to discuss your current mortgage.</h4>
                                  <p className="no-margin"><i className="fa fa-mobile"></i> You should hear from one of our insurance specialist within 1-2 days.</p>
                                </div>:
                              null
                            }
                           
                        </div>
                      </div>
                  </article>
                     {
                      tab == 1?   
                      <div className="col btn-sec pt-10 pb-10">
                        <a className="button is-warning is-outlined" >Answer question</a>
                        <a className="align-right"  onClick={e => this.setState({ visible:"already"})}>i already have mortgage</a>
                      </div>:
                      null
                    }
              </div>
              {
              visible=="already"?
                <div id="modal" className="modal is-active opened">
                  <div className="modal-background"></div> 
                  <div className="modal-content">
                    <div className="btn-wrap">
                      <button className="modal-close is-large" aria-label="close" onClick={e => this.setState({ visible:0})}></button>
                    </div>  
                    <div className="box no-padding">
                      <div className="p-30">
                        <h2 className="no-margin">I already have mortgage</h2>
                        
                        <p>That's great! If you don't mind us asking. we'd appreciate some details about your current mortgage for our records, and to be sure your investments are keeping you on track to reach your goals. Request a call with one of our specialist to discuss your cYou're getting the best possible mortgage for your needs. Request a call with one of our specialist to discuss your current mortgage.</p>
                          <div className="col pt-20"><a className="button modal-button is-small" onClick={e => this.setState({ visible:"call"})} data-target="#modal">Request a call</a><a href="#" className="button inverse-btn">Nevermind</a></div>
                      </div>  

                    </div>

                </div>
                </div>:
                visible== "call"?
                  <div id="modal-3" className="modal is-active modal-dashboard opened" >
                    <div className="modal-background align-center"></div> 
                    <div className="modal-content align-center">
                      <div className="btn-wrap">
                        <button className="modal-close is-large" aria-label="close" onClick={e => this.setState({ visible:0})}></button>
                      </div>  
                      <div className="box bg-img">
                        <h2 className="align-center">Great! You've request a call</h2>
                        <p className="align-center">One of our specialist will reach out to you over the phone to discuss your current mortgage details. You can expect a call in 1-2 days.</p>
                          <a href="#" className="button modal-button" data-target="#modal-3" onClick={e => this.setState({tab:2, visible:0})}>Back to dashboard</a>
                        </div>    
                      </div>
                    </div>:
                    null
            }
            </div>
        );
    }
  
}

export default Borrow;
