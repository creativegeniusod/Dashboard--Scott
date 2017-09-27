import React from 'react';
import { Link } from 'react-router'
import PolicySidebar from './policy-sidebar'
class PolicyView extends React.Component {
  constructor(props) {
    super(props);
    var type = props.location.query.type ? props.location.query.type : "";
    this.handelParentPolicyTab = this.handelParentPolicyTab.bind(this);
    this.state = {
          tab: type,
          visible: 0
        };
    }
  handelParentPolicyTab(type)
    {
      this.setState({tab: type});
    }
  render() {
      const {tab}=this.state;
      const {visible}=this.state;
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
               <h1 className="title">Your insurance policies</h1>
             
                 <div className="columns custom-flex-wrap">
                    <div className="column custom-flex">
                      <p><small>Total coverage</small></p>
                      <h1><sup>$</sup>950,000</h1>
                    </div>
                    <div className="column custom-flex">
                      <p><small>Premium</small></p>
                      <h4><sup>$</sup>135/month</h4>
                    </div>
                </div>
          </div>

        
        <section className="section bg-content level-1 borrow-bg1 no-padding">
          <div className="container">
            <div className="columns">
                  <div className="column">
                    <div className="box no-padding">
                    
                      <table className="table is-narrow is-fullwidth mtg-table upload-document-table">
                          <thead>
                              <tr>
                                  <th>Policy type</th>
                                  <th>Total value</th>
                                  <th>Premium</th>
                                  <th>Term</th>
                                  <th></th>
                              </tr>
                          </thead>
                            <tbody>
                              <tr>
                                <td>Critcal illness</td>
                                <td>$650,000</td>
                                <td>$116/month</td>
                                <td>25 years</td>
                                <td><Link to="/policy-detail">Details</Link></td>
                              </tr>
                                <tr>
                                <td>Disability</td>
                                <td>$300,000</td>
                                <td>$19/month</td>
                                <td>15 years</td>
                                <td><Link to="/policy-detail">Details</Link></td>
                              </tr>
                            </tbody>
                        </table>

                    </div>
                  </div>
                  <div className="column is-one-third">
                    <div className="box no-padding brand-box">
                        <div className="message message is-danger mb-0">
                          <div className="message-header"></div>
                        </div>
                        <PolicySidebar currenttabstat={""} tabhandle={this.handelParentPolicyTab} />
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

export default PolicyView;
