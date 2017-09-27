import React from 'react';
import { Link } from 'react-router'
import PolicySidebar from './policy-sidebar'
class PolicyDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handelParentPolicyTab = this.handelParentPolicyTab.bind(this);
    this.state = {
          tab: 1,
        };
    }
    handelParentPolicyTab(type)
    {
      this.setState({tab: type});
    }
  
  render() {
      const {tab}=this.state;
      return (
        
       <div className="main-content">
        <section className="section bg-content level-1 no-padding banner-bg2">

          <div className="container">
              <div className="col">
                <nav className="breadcrumb is-small has-succeeds-separator" aria-label="breadcrumbs">
                   <ul>
                        <li><i className="fa fa-arrow-left"></i>&nbsp;&nbsp;<Link to='/'>Home</Link></li>
                        <li className=""><a href="#" aria-current="page">Insurance</a></li>
                    </ul>
                </nav>
                
              </div>
               <h1 className="title">Your critical illness policies</h1>
                 <div className="columns custom-flex-wrap">
                    <div className="column custom-flex">
                      <p><small>Total coverage</small></p>
                      <h1><sup>$</sup>650,000</h1>
                    </div>
                    <div className="column custom-flex">
                      <p><small>Premium</small></p>
                      <h4><sup>$</sup>116/month</h4>
                    </div>
                    <div className="column custom-flex">
                      <p><small>Term</small></p>
                      <h4>25years</h4>
                    </div>
                </div>
          </div>
        <section className="section bg-content level-1 borrow-bg1 no-padding">
          <div className="container">
              <div className="columns">
                    <div className="column">
                        <div className="box critical-policy">
                          <h6>About this policy <span>Status</span></h6>
                          <div className="columns">
                            <p className="column policy-text">Critical illness insurance protect you from any serious illness that might crop up and damage your earning potential. The aim with Critical Illness Insurance is to make sure if you can't earb money due to illness and or you incur medical costs that cut into your cash flow, in either case you're covered.</p>
                            <span className="completed-message column"> Active <i className="fa fa-check step7 green-btn"></i></span>
                          </div>
                        </div>

                    </div>
                  <div className="column is-one-third">
                    <div className="box no-padding brand-box">
                        <div className="message message is-danger mb-0">
                          <div className="message-header"></div>
                        </div>
                        <PolicySidebar tabhandle={this.handelParentPolicyTab} currenttabstat={this.state.tab} />
                    </div>
                    <div className="box no-padding brand-box">
                      <div className="box vertical-align contact-info pt-10 risk-tab">
                        <h6>My insurance provider</h6>
                        <div className="columns">
                          <div className="column policy-provider-logo"><img src="static/images/provider.png" /></div>
                          <div className="column">
                            <p>Assumption Life</p>
                            <a>Visit their website</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </section>
    </section>
  </div>

        );
    }
  
}

export default PolicyDetail;
