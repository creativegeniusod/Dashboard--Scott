import React from 'react';
import { Link } from 'react-router'

class DashboardTitle extends React.Component { 
   constructor(props) {
    super(props);
    this.state = {
          tab: 0,
        };
    }
      
  render() {
    const {tab} = this.state;
        return (
            <section className="section bg-content level-1">
              <div className="container">
                <div className="columns">
                  <div className="column">
                      <h1 className="title mt-40">
                          Your plan starts with investments
                      </h1>
                        <p className="subtitle">
                         You can retire at <b>age 65</b> with a monthly <b>income of $42,000</b>, and a surplus of <b>$85,000 at age 90</b>. It starts with a plan.
                        </p>
                    </div>
                    <div className="column">
                    { 
                      tab == 0?
                        <div className="box answer-box">
                          <h4>Something not making sense?</h4>
                          <p>Request to have one of our Plan Pros reach out to you to discuss the details and advantages of your plan recommendations.</p>
                          <div className="btn-section">
                            <a className="button is-primary"  onClick={e => this.setState({ tab:1})}>Request a call</a>
                          </div>
                        </div>:
                      tab == 1?
                        <div className="box answer-box">
                          <h4>Thanks  for reaching out, Chris.</h4>
                          <p>One of our Plan Pro will call you as soon as possible to discuss anything that's not making sense. You should receive a call with in a day.</p>
                        </div>:
                        null
                    }
                    </div>
                  </div>
              </div>
            </section>
        );
    }
  
}

export default DashboardTitle;
