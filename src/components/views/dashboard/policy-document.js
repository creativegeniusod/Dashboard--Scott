import React from 'react';
import { Link } from 'react-router'
import PolicySidebar from './policy-sidebar'
class PolicyDocuments extends React.Component {
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
                        <li className=""><a href="#" aria-current="page">Insurance</a></li>
                    </ul>
                </nav>
                
              </div>
               <h1 className="title">Chris' insurance documents</h1>
          </div>
        <section className="section bg-content level-1 borrow-bg1 no-padding">
          <div className="container">
              <div className="columns">
                    <div className="column">
                        <div className="box no-padding">
                          <table className="table is-narrow is-fullwidth mtg-table upload-document-table">
                          <thead>
                              <tr>
                                  <th>Mortgage document</th>
                                  <th>Download link</th>
                              </tr>
                          </thead>
                            <tbody>
                              <tr>
                                <td>Chris Baldesarra's critical illness insurance policy</td>
                                <td><a ><i className="fa fa-download"></i> Download</a></td>
                              </tr>
                               <tr>
                                <td>Chris Baldesarra's disablity insurance policy</td>
                                <td><a ><i className="fa fa-download"></i> Download</a></td>
                              </tr>
                              <tr>
                                <td>Chris Baldesarra's term life insurance policy</td>
                                <td><a ><i className="fa fa-download"></i> Download</a></td>
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
                        <PolicySidebar tabhandle={this.handelParentPolicyTab} currenttabstat={"documents"} />
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

export default PolicyDocuments;
