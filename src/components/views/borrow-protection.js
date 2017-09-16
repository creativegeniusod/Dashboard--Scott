import React from 'react';
import { Link } from 'react-router'
class BorrowProtector extends React.Component {
 
  render() {
        return (
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
        );
    }
  
}

export default BorrowProtector;
