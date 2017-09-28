import React from 'react';
import { Link } from 'react-router'
import BorrowTitle from './borrow-title.js';

class DashboardBorrow7 extends React.Component {
  render() {
        return (
       			   <div id="modal" className="modal is-active opened">
                    <div className="modal-background"></div> 
                        <div className="modal-content">
                          <div className="btn-wrap">
                            <button className="modal-close is-large" aria-label="close" onClick= {this.props.borrowprevtab}></button>
                          </div>  
                          <div className="box no-padding">
                            <div className="p-20">
                              <h2>Upload mortgage documents</h2>
                              <p>To complete a mortgage application, there are certain documents that are necessary. We'll onlu ask for essentials when it comes to your information. Our accepted documents formats: .pdf, .tiff</p>
                              <p><b>Please upload the following:</b></p>
                            </div>  
                              <div className="up-doc-row columns no-margin">
                                  <div className="column  black-color">Your last T4 statement</div>
                               <label className="column text-right warning-color">cbaldesarra-t4.pdf <a>change</a></label>
                              </div>
                            <div className="up-doc-row columns no-margin">
                                <div className="column black-color">Personal credit statement</div>
                                  <a className="column text-right warning-color">Choose document</a>
                            </div>
                            <div className="up-doc-row columns no-margin">
                                <div className="column black-color">Another document</div>
                                  <a className="column text-right warning-color" >Choose document</a>
                            </div>
                            <div className="col p-20">
                                    <a className="button is-warning" onClick= {this.props.borrowtab} data-target="#modal">Upload documents</a> 
                              <a href="#" className="button inverse-btn">Nevermind</a>
                            </div>
                          </div>
                      </div>
                  </div>

        );
    }
  
}

export default DashboardBorrow7;
