import React from 'react';
import { Link } from 'react-router'
class InvestmentAccount extends React.Component {
  constructor(props) {
    super(props);
    var type = props.location.query.type ? props.location.query.type : "";
    this.state = {
          tab: type,
          visible: 0
        };
    }
  
  render() {
      const {tab}=this.state;
      const {visible}=this.state;
      let backgroundImage=""
      if(tab=="" || tab=="detail")
      {
         backgroundImage = "section bg-content level-1 no-padding banner-bg2";
      }
      else
      {
         backgroundImage = "section bg-content level-1 no-padding"
      }
      return (
        
       <div className="main-content">
        <section className={backgroundImage}>

          <div className="container">
            <div className="col">
              <nav className="breadcrumb is-small has-succeeds-separator" aria-label="breadcrumbs">
                  {
                    tab!=""?
                    <ul>
                      <li><Link to='/'>home</Link></li>
                      <li className=""><a href="#" aria-current="page">Investments</a></li>
                      <li className="is-active"><a href="#" aria-current="page">TFSA</a></li>
                    </ul>:
                   tab== "" ?
                    <ul>
                      <li><Link to='/'>home</Link></li>
                      <li className=""><a href="#" aria-current="page">Investments</a></li>
                    </ul> :
                    null
                  }
              </nav>
              
              </div>
              {
                tab== "mystate"?
                <h1 className="title">Chris' investment statements</h1>:
                tab== "account"?
                <h1 className="title">Chris' investment account history</h1>:
                tab== "detail"?
                <h1 className="title">Christopher's TFSA</h1>:
                tab== ""?
                 <h1 className="title">Your investment accounts</h1>:
                 null
              }
              {
                tab== ""?
                 <div className="columns custom-flex-wrap">
                    <div className="column custom-flex">
                      <p><small>Total Owing</small></p>
                      <h1><sup>$</sup>47,648</h1>
                    </div>
                    <div className="column custom-flex">
                      <p><small>Total Owing</small></p>
                      <h4><sup>$</sup>2,148</h4>
                    </div>
                    <div className="column custom-flex">
                      <p><small>Time-weighted</small></p>
                      <h4>5.6<sup>%</sup></h4>
                    </div>
                </div>:
                tab=="detail"?
                <div className="columns custom-flex-wrap">
                  <div className="column custom-flex">
                    <p><small>Total value</small></p>
                    <h1><sup>$</sup>24,504</h1>
                  </div>
                  <div className="column custom-flex">
                    <p><small>Net deposite</small></p>
                    <h4><sup>$</sup>22,000</h4>
                  </div>
                  <div className="column custom-flex">
                    <p><small>Total growth</small></p>
                    <h4><sup>$</sup>2,504</h4>
                  </div>
                  <div className="column custom-flex">
                    <p><small>Time-weighted</small></p>
                    <h4>5.6<sup>%</sup></h4>
                  </div>
                  <div className="column custom-flex">
                    <p><small>YTD fees</small></p>
                    <h4><sup>$</sup>46.54</h4>
                  </div>
                </div>:
                 null
              }
          </div>

        
        <section className="section bg-content level-1 borrow-bg1 no-padding">
          <div className="container">
            <div className="columns">
                  <div className="column">
                    <div className="box no-padding">
                    {
                      tab== "mystate"?
                      <table className="table is-narrow is-fullwidth mtg-table upload-document-table">
                        <thead>
                            <tr>
                                <th>Statement title</th>
                                <th>Statement date</th>
                                <th>Download link</th>
                            </tr>
                        </thead>
                          <tbody>
                            <tr>
                              <td>TFSA performance report</td>
                              <td>August 2017</td>
                              <td><a href="#"><i className="fa fa-download"></i>Download</a></td>
                            </tr>
                            <tr>
                              <td>RRSP performance report</td>
                              <td>August 2017</td>
                              <td><a href="#"><i className="fa fa-download"></i>Download</a></td>
                            </tr>
                            <tr>
                              <td>TFSA performance report</td>
                              <td>July 2017</td>
                              <td><a href="#"><i className="fa fa-download"></i>Download</a></td>
                            </tr>
                            <tr>
                              <td>RRSP performance report</td>
                              <td>July 2017</td>
                              <td><a href="#"><i className="fa fa-download"></i>Download</a></td>
                            </tr>
                            <tr>
                              <td>RRSP PAC agreement</td>
                              <td>June 2017</td>
                              <td><a href="#"><i className="fa fa-download"></i>Download</a></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td>
                                <button className="button is-outlined is-small is-info">More statements</button>
                              </td>
                              <td></td>
                            </tr>
                          </tbody>
                      </table>:
                      tab== "account"?
                         <table className="table is-narrow is-fullwidth mtg-table upload-document-table">
                          <thead>
                              <tr>
                                  <th>Activity</th>
                                  <th>Account active</th>
                                  <th>Activity date</th>
                              </tr>
                          </thead>
                            <tbody>
                              <tr>
                                <td>$525 Deposit (auto-deposit)</td>
                                <td>Chris' TFSA</td>
                                <td>August 1, 2017</td>
                              </tr>
                              <tr>
                                <td>$418 Deposit (auto-deposit)</td>
                                <td>Chris' RRSP</td>
                                <td>August 1, 2017</td>
                              </tr>
                              <tr>
                                <td>$525 Deposit (auto-deposit)</td>
                                <td>Chris' TFSA</td>
                                <td>July 1, 2017</td>
                              </tr>
                              <tr>
                                <td>$418 Deposit (auto-deposit)</td>
                                <td>Chris' RRSP</td>
                                <td>July 1, 2017</td>
                              </tr>
                              <tr>
                                <td>$525 Deposit (auto-deposit)</td>
                                <td>Chris' TFSA</td>
                                <td>June 1, 2017</td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>
                                  <button className="button is-outlined is-small is-info">More statements</button>
                                </td>
                                <td></td>
                              </tr>
                            </tbody>
                        </table>:
                      tab=="detail"?
                        <table className="table is-narrow is-fullwidth mtg-table align-right-td">
                          <thead>
                              <tr>
                                  <th>Fund Name</th>
                                  <th>Market value</th>
                                  <th>Performance</th>
                                  <th>Allocation</th>
                              </tr>
                          </thead>
                            <tbody>
                              <tr>
                                <td><span className="risk-color info-color"></span>VSC - Canadian Corporation Bonds</td>
                                <td>$2,104</td>
                                <td className="green-txt">+1.2%</td>
                                <td className="gray-txt">30%</td>
                              </tr>
                               <tr>
                                <td><span className="risk-color green-color"></span>VSB - Canadian Corporation Bonds</td>
                                <td>$1,089</td>
                                <td>-0.6%</td>
                                <td className="gray-txt">25%</td>
                              </tr>
                               <tr>
                                <td><span className="risk-color black-risk-color"></span>XIC - Canadian Stocks</td>
                                <td>$2,104</td>
                                <td className="green-txt">+1.2%</td>
                                <td className="gray-txt">15%</td>
                              </tr>
                               <tr>
                                <td><span className="risk-color light-blue-color"></span>ZCS - US Stocks</td>
                                <td>$2,104</td>
                                <td className="green-txt">+10.5%</td>
                                <td className="gray-txt">10%</td>
                              </tr>
                               <tr>
                                <td><span className="risk-color red-color"></span>IWN - US small Cap Stocks</td>
                                <td>$2,104</td>
                                <td className="green-txt">+3.5%</td>
                                <td className="gray-txt">10%</td>
                              </tr>
                            </tbody>
                        </table>:
                      tab==""?
                      <table className="table is-narrow is-fullwidth mtg-table upload-document-table">
                          <thead>
                              <tr>
                                  <th>Account</th>
                                  <th>Total value</th>
                                  <th>Total growth</th>
                                  <th>Time-weighted</th>
                                  <th>Funding</th>
                                  <th></th>
                              </tr>
                          </thead>
                            <tbody>
                              <tr>
                                <td>Chris' TFSA</td>
                                <td>$24,504</td>
                                <td>$2,104</td>
                                <td>5.6%</td>
                                <td><a className="gray-txt" href="javascript:void(0)" onClick={e => this.setState({ tab: "fund",visible:1 })} rel="tab3">Auto-deposit active</a></td>
                                <td><a href="javascript:void(0)" onClick={e => this.setState({ tab: "detail" })}>Details</a></td>
                              </tr>
                               <tr>
                                <td>Chris' RRSP</td>
                                <td>$23,044</td>
                                <td>$1,089</td>
                                <td>5.6%</td>
                                <td><a className="gray-txt" href="javascript:void(0)" onClick={e => this.setState({ tab: "fund",visible:1 })} rel="tab3">Auto-deposit active</a></td>
                                <td><a href="javascript:void(0)" onClick={e => this.setState({ tab: "detail" })}>Details</a></td>
                              </tr>
                            </tbody>
                        </table>:
                        null
                }


                    </div>
                  </div>
                  <div className="column is-one-third">
                    <div className="box no-padding brand-box">
                        <div className="message message is-info mb-0">
                          <div className="message-header"></div>
                        </div>
                        <div className="box tabs vertical-align">  
                              <ul>

                                  <li><a className={ tab=='mystate'? "active":""} href="javascript:void(0)" onClick={e => this.setState({ tab: "mystate" })} rel="tab1">Manage statements <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                      {
                                        tab== "mystate" ?
                                          <ul className="" ><li><i className="fa fa-check green-btn"></i>Account performance report</li><li><i className="fa fa-check green-btn"></i>Account agreement document</li><li><i className="fa custom-icon"></i>Transfer document</li></ul>:
                                            null
                                    }
                                  
                                  </li>

                                  <li><a className={ tab=='account'? "active":""} href="javascript:void(0)" onClick={e => this.setState({ tab: "account" })} rel="tab2">Account history <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                      {
                                        tab== "account" ?
                                          <ul className="" ><li><i className="fa fa-check green-btn"></i>Deposite</li><li><i className="fa fa-check green-btn"></i>Transfer</li><li><i className="fa fa-check green-btn"></i>Dividends</li></ul>:
                                          null
                                      }
                                  </li>

                                  <li><a href="javascript:void(0)" onClick={e => this.setState({ tab: "fund",visible:1 })} rel="tab3">Fund my account <i className="fa fa-arrow-right" aria-hidden="true"></i></a></li>

                                  <li><a href="javascript:void(0)" onClick={e => this.setState({ tab: "withdrawal",visible:1 })} rel="tab4">Withdrawal funds <i className="fa fa-arrow-right" aria-hidden="true"></i></a></li>
                              </ul>
                              
                          </div>

                    </div>
                    {
                    tab== "detail"?
                    <div className="box no-padding brand-box">
                        <div className="box tabs vertical-align contact-info pt-10 risk-tab">
                            <h6>My portfolio profile</h6>  
                            <p><b>Risk level</b>: Low-mid <b>Time horizon</b>:Short</p>
                            <ul className="risk-color-set">
                              <li className="info-set info-color">&nbsp;</li>
                              <li className="green-set green-color">&nbsp;</li>
                              <li className="black-set black-risk-color">&nbsp;</li>
                              <li className="light-blue-set light-blue-color">&nbsp;</li>
                              <li className="grey-set grey-color">&nbsp;</li>
                              <li className="red-set red-color">&nbsp;</li>
                            </ul>
                          </div>
                      </div>:null
                    }
                  </div>
              </div>
          </div>
      </section>
    </section>
    {
      tab== "fund" && visible==1?
      <div id="modal" className="modal is-active opened">
      <div className="modal-background"></div> 
      <div className="modal-content">
        <div className="btn-wrap">
          <button className="modal-close is-large" aria-label="close" onClick={e => this.setState({ visible:0,tab: ""})}></button>
        </div>  
        <div className="box no-padding">
          <div className="p-30">
            <h2 className="no-margin">Fund your investment accounts</h2>
            <p className="no-margin">Your account funding</p>
           
          </div>  
          <ul className="withdraw-hist">
            <li>
              <div className="columns">
                <div className="column">
                  <span className="green-txt">$525 monthly auto-deposit (PAC) to Chris' TFSA</span>
                </div>
                <div className="column is-one-third"></div>
              </div>          
            </li>
            <li>
              <div className="columns">
                <div className="column">
                  <span className="green-txt">5 15,000 lump sum deposit to Chris' RRSP</span>
                </div>
                <div className="column is-one-third"></div>
              </div>          
            </li>
            <li>
              <div className="columns">
                <div className="column">
                  <p><strong>Set up a Pre-authorized contribution</strong></p>
                  <p>Deposit funds directly from your bank account to Planswell on a regular monthly schedule.</p>
                </div>
                <div className="column is-one-third">
                  <a className="button is-info is-small">Set up a PAC</a>
                </div>
              </div>          
            </li>
            <li>
              <div className="columns">
                <div className="column">
                  <p><strong>Transfer existing accounts</strong></p>
                  <p>If you have a TFSA, an RRSP or even a savings account you'd like to invest with Planswell, you can trasfer them directly. We'll even pay the fees.</p>
                </div>
                <div className="column is-one-third">
                  <a className="button is-info is-outlined is-small">Transfer accounts</a>
                </div>
              </div>          
            </li>
            <li>
              <div className="columns">
                <div className="column">
                  <p><strong>Make a lump sum deposit</strong></p>
                  <p>Deposit funds directly from your bank account to Planswell just once.</p>
                </div>
                <div className="column is-one-third">
                   <a className="button is-info is-outlined is-small">Make deposit</a>
                </div>
              </div>          
            </li>
          </ul>     
        </div>
    </div>
    </div>:
      null
    }
    {
      tab== "withdrawal" && visible==1 ?
        <div id="modal" className="modal is-active opened">
        <div className="modal-background"></div> 
        <div className="modal-content">
          <div className="btn-wrap">
            <button className="modal-close is-large" aria-label="close" onClick={e => this.setState({ visible:0,tab: ""})}></button>
          </div>  
          <div className="box no-padding">
            <div className="p-30">
              <h2 className="no-margin">Withdraw funds from Planswell</h2>
              <p><strong>Pending withdrawals</strong></p>
              <p className="no-margin">You currently do not have any pending, withdrawals</p>
            </div>  
            <ul className="withdraw-hist">
              <li>
                  <p><strong>Pending withdrawals</strong></p>
                  -$15,000 from Chris' TFSA - <span className="gray-txt">August 2 1.20 17</span>
              </li>
              <li>-$18,000 from Chris' RRSP - <span className="gray-txt">August 2 1. 2017</span></li>
              <li>Make a new withdrawal Nevermind</li>
            </ul>
            <div className="col p-20">
              <a className="button is-primary white">Make a new withdrwal</a>
              <a href="#" className="button inverse-btn" onClick={e => this.setState({ visible:0,tab: ""})}>Nevermind</a>
            </div>
          </div>
      </div>
      </div>:
      null
      }
  </div>

        );
    }
  
}

export default InvestmentAccount;
