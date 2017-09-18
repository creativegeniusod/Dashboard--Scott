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
        return (
       <div className="main-content">
          <section className="section bg-content level-1 no-padding banner-bg1">

      <div className="container">
        <div className="col">
          <nav className="breadcrumb is-small has-succeeds-separator" aria-label="breadcrumbs">
            <ul>
              <li><Link to='/'>home</Link></li>
              {
                       tab== "mystate" || tab== "account"?
                <li className="is-active"><a href="#" aria-current="page">Account setting</a></li>:
               tab== "" ?
                <li className="is-active"><a href="#" aria-current="page">Investments</a></li>:
                null
              }
            </ul>
          </nav>
          
          </div>
          {
                 tab== "mystate" || tab== "account" ?
            <h1 className="title">Chris' investment statements</h1>:
            tab== ""?
             <h1 className="title">Your investment accounts</h1>:
             null
          }
          {
            tab== ""?
             <div className="columns">
                          <div className="column custom-flex">
                            <p><small>Total Owing</small></p>
                            <h1>$47,648</h1>
                          </div>
                          <div className="column custom-flex mt-25">
                            <p><small>Total Owing</small></p>
                            <h4>$2,148</h4>
                          </div>
                          <div className="column custom-flex mt-25">
                            <p><small>Time-weighted</small></p>
                            <h4>5.6%</h4>
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
                      tab== "mystate" || tab== "account"?
                  <table className="table is-narrow is-fullwidth mtg-table upload-document-table">
                <thead>
                    <tr>
                        <th>Mortgage document</th>
                        <th>Download link</th>
                    </tr>
                </thead>
                  <tbody>
                    <tr>
                      <td>Chris Baldesarra's home mortgage underwriting document</td>
                      <td><a href="#"><i className="fa fa-download"></i>Download</a></td>
                    </tr>
                    <tr>
                      <td>Chris Baldesarra's home mortgage funding document</td>
                      <td><a href="#"><i className="fa fa-download"></i>Download</a></td>
                    </tr>
                    <tr>
                      <td>Chris Baldesarra's home mortgage underwriting document</td>
                      <td><a href="#"><i className="fa fa-download"></i>Download</a></td>
                    </tr>
                    <tr>
                      <td>Chris Baldesarra's home mortgage funding document</td>
                      <td><a href="#"><i className="fa fa-download"></i>Download</a></td>
                    </tr>
                    <tr>
                      <td>
                        <button className="button is-primary is-outlined is-small"><i className="fa fa-upload"></i> &nbsp;&nbsp; Uploads Documents</button>
                      </td>
                      <td></td>
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
                        <td><a href="javascript:void(0)" onClick={e => this.setState({ tab: "fund",visible:1 })} rel="tab3">Auto-deposit active</a></td>
                        <td>Details</td>
                      </tr>
                       <tr>
                        <td>Chris' RRSP</td>
                        <td>$23,044</td>
                        <td>$1,089</td>
                        <td>5.6%</td>
                        <td><a href="javascript:void(0)" onClick={e => this.setState({ tab: "fund",visible:1 })} rel="tab3">Auto-deposit active</a></td>
                        <td>Details</td>
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

                                      <li className=""><a href="javascript:void(0)" onClick={e => this.setState({ tab: "mystate" })} rel="tab1">Manage statements <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                          {
                                            tab== "mystate" ?
                          <ul className="" ><li><i className="fa fa-check green-btn"></i>Account performance report</li><li><i className="fa fa-check green-btn"></i>Account agreement document</li><li><i className="fa custom-icon"></i>Transfer document</li></ul>:
                          null
                                        }
                                      
                                      </li>

                                      <li><a href="javascript:void(0)" onClick={e => this.setState({ tab: "account" })} rel="tab2">Account history <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                          {
                                            tab== "account" ?
                          <ul className="" ><li><i className="fa fa-check green-btn"></i>Deposite</li><li><i className="fa fa-check green-btn"></i>Transfer</li><li><i className="fa fa-check green-btn"></i>Dividends</li></ul>:
                          null
                                          }
                                      </li>

                                      <li><a href="javascript:void(0)" onClick={e => this.setState({ tab: "fund",visible:1 })} rel="tab3">Fund my account <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                          
                                      </li>

                                      <li><a href="javascript:void(0)" onClick={e => this.setState({ tab: "withdrawal",visible:1 })} rel="tab4">Withdrawal funds <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                                          
                                      </li>
                                  </ul>

                              </div>
                </div>
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
