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
                                  <div className="column  black-color"><strike>Your last T4 statement</strike></div>
                               <label className="column text-right green-text">Uploaded! <i className="fa fa-check green-btn step7"></i></label>
                              </div>
                            <div className="up-doc-row columns no-margin">
                                <div className="column black-color">Personal credit statement</div>
                                   <label className="column text-right warning-color" >personal-credit-2017.pdf <a>change</a></label>
                            </div>
                            <div className="up-doc-row columns no-margin">
                              <label className="error">Looks like this isn't a format we accept. Please upload a .pdf or a .tiff</label>
                                <div className="column black-color">Another document</div>
                                   <label className="column text-right warning-color" onClick= {this.props.borrowtab} >anotha-one.gif <a>change</a></label>
                            </div>
                            <div className="col p-20">
                                    <a className="button is-warning" data-target="#modal">Upload documents</a> 
                              <a href="#" className="button inverse-btn">Nevermind</a>
                            </div>
                          </div>
                      </div>
                  </div>

        );
    }
  
}

export default DashboardBorrow7;
