import React from 'react';

class AlreadyInsurance extends React.Component {
        
  render() {

        return (
               <div id="modal" className="modal is-active opened">
                <div className="modal-background"></div> 
                  <div className="modal-content">
                    <div className="btn-wrap">
                      <button className="modal-close is-large"  aria-label="close" onClick={this.props.closeTab}></button>
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
                        <a className="button modal-button" data-target="#modal" onClick={this.props.submit}>Submit details</a>
                        <a href="#" className="button inverse-btn" onClick={this.props.closeTab}>Nevermind</a>
                      </div>
                    </div>
                </div>
              </div>
        );
    }
  
}

export default AlreadyInsurance;
