import React from 'react';
import { Link } from 'react-router'
import Bslide from './bslide';
import Bslide2 from './bslide2';
import Bslide3 from './bslide3';
import Bslide4 from './bslide4';
import Bslide5 from './bslide5';
import Bslide6 from './bslide6';

class HomeBorrow extends React.Component {
	constructor(props) {
		super(props);
		this.handelParentTabs = this.handelParentTabs.bind(this);
		this.state = {
       	 	tab: 1,
       	};
    }

    handelParentTabs()
    {
    	this.setState({tab:this.state.tab+1})
    }
  render() {
  		const {tab}=this.state;
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
                     You can retire at age 65 with a monthly income of $42,000, and a surplus of $85,000 at age 90. It starts with a plan.
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
              <div className="columns is-variable bd-klmn-columns is-3">
                  <div className="column">
                    <div className="box no-padding message-col"> 
                      <article className="message is-info no-margin">
                    <div className="message-header">
                      <div className="full-width">                    
                        <div className="col">
                            <p className="white no-margin">Be an investor <i className="fa fa-check pull-right"></i></p>
                          </div>
                      </div>
                        <div className="columns pt-30">
                          <div className="column">
                            <h5 className="white">Your investment accounts are full funded and active.</h5>
                          </div>
                        </div>
                    </div>
                  </article>
                        <div className="tabs vertical-align no-border">                                  
                            <ul>
                                <li className=""><Link to={{ pathname: '/borrow', query: { type: 'mystate' } }}>My Statements <i className="fa fa-arrow-right" aria-hidden="true"></i></Link></li>

                                <li><Link to={{ pathname: '/borrow', query: { type: 'account' } }}>Account History <i className="fa fa-arrow-right" aria-hidden="true"></i></Link></li>

                                <li><Link to={{ pathname: '/borrow', query: { type: 'fund' } }}>Fund my accounts <i className="fa fa-arrow-right" aria-hidden="true"></i></Link></li>

                                <li><Link to={{ pathname: '/borrow', query: { type: 'withdrawal' } }}>Withdraw funds <i className="fa fa-arrow-right" aria-hidden="true"></i></Link></li>

                            </ul>
                        </div>
                  <div className="col btn-sec pt-10 pb-10">
                    <a className="button is-info is-outlined">More Details</a>
                  </div>
                    </div>
                </div>
                <div className="column">
                    <div className="box no-padding message-col">
                      <article className="message is-danger no-margin">
                    <div className="message-header">
                      <div className="full-width">                    
                        <div className="col">
                            <p className="white no-margin">Protect yourself <i className="fa fa-check pull-right"></i></p>
                          </div>
                      </div>
                        <div className="bd-klmn-columns pt-30">
                          <div className="column">
                            <small>Total Coverage</small>
                            <h2>$47,148</h2>
                          </div>
                        </div>
                    </div>
                  </article>
                        <table>
                      <thead>
                        <tr>
                          <th>Policy Type</th>
                          <th>Total Value</th>
                          <th>Coverage term</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                            <td>Critical illness</td>
                            <td>$650,000</td>
                            <td>25years</td>
                        </tr>
                      </tbody>
                  </table>
                   <div className="col btn-sec pt-10 pb-10">
                    <a className="button is-danger is-outlined">
                        <span>More Details</span>    
                      </a>
                   </div>
                    </div>
                </div>
                  <div className="column custom-col-3">
                          <div className="box no-padding detialed-box">
                              {
                              	tab==1?
                              	<Bslide currentState={this.handelParentTabs} />:
                              	tab==2?
                              	<Bslide2 currentState={this.handelParentTabs}/>:
                              	tab==3?
                              	<Bslide3 currentState={this.handelParentTabs}/>:
                              	tab==4?
                              	<Bslide4 currentState={this.handelParentTabs}/>:
                              	tab==5?
                              	<Bslide5 currentState={this.handelParentTabs}/>:
                              	tab==6?
                              	<Bslide6 currentState={this.handelParentTabs} currentTab={this.state.tab} />:
                              	tab==7?
                              	<Bslide6 currentState={this.handelParentTabs}  currentTab={this.state.tab} />:
                              	null
                              }
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

export default HomeBorrow;
