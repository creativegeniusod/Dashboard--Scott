import React from 'react';
import { Link } from 'react-router'
import PolicySidebar from './policy-sidebar'
class PolicyClaim extends React.Component {
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
        <section className="section bg-content level-1 no-padding">

          <div className="container pt-30">
              <div className="col">
                <nav className="breadcrumb is-small has-succeeds-separator" aria-label="breadcrumbs">
                   <ul>
                        <li><i className="fa fa-arrow-left"></i>&nbsp;&nbsp;<Link to='/'>Home</Link></li>
                        <li><Link to='/'>Insurance</Link></li>
                        <li className=""><a href="#" aria-current="page">How to make a claim</a></li>
                    </ul>
                </nav>
                
              </div>
               <h1 className="title">How to make an insurance claim</h1>
          </div>
        <section className="section bg-content level-1 borrow-bg1 no-padding">
          <div className="container">
              <div className="columns">
                    <div className="column">
                        <div className="box">
                          <ul className="p-20">
                            <li><p>Making an insurance claim is surprisingly easy. Just follow the steps below and you'll be on your way to leveraging your insurance to take care of yourself.</p></li>
                            <li><p>How to make a...</p>
                            <p className="select"><select><option>Critical illness claim </option></select></p></li>
                            <li><h4>1. Gather the necessary documents </h4>
                              <p>The first key to a successful critical illness claim is making sure you have the correct documents. Youll need a copy of your doctor's prognosis in triplicate. </p></li>
                             <li><h4>2. Report your incidence to Assumption Life </h4>
                              <p>Second you'll need to file the claim with Assumption Life. In order to do this, you'll need to upload your doctor's prognosis copy you gathered in step one to Assumption's client portal which you can log into here.</p></li>
                             <li><h4>3. Assumption will provide you a response within 2 weeks </h4>
                              <p>Assumption Life will review your claim and provide you a response as soon as possible. If they require any other documentation, or they have any critical information regarding your claim they'll let you know via phone call or email. Otherwise, they'll provide you a decision and provide you with documentation surrounding your claim coverage. </p></li> 
                          </ul>
                      </div>

                    </div>
                  <div className="column is-one-third">
                    <div className="box no-padding brand-box">
                        <div className="message message is-danger mb-0">
                          <div className="message-header"></div>
                        </div>
                        <PolicySidebar tabhandle={this.handelParentPolicyTab} currenttabstat={"claim"} />
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

export default PolicyClaim;
