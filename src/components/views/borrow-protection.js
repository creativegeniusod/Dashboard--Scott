import React from 'react';
import { Link } from 'react-router'
import InsuranceSlide1 from './insurance/insuranceslide1.js';
import InsuranceSlide2 from './insurance/insuranceslide2.js';
import InsuranceSlide3 from './insurance/insuranceslide3.js';
import InsuranceSlide4 from './insurance/insuranceslide4.js';
import InsuranceSlide5 from './insurance/insuranceslide5.js';
import InsuranceSlide6 from './insurance/insuranceslide6.js';
import InsuranceSlide7 from './insurance/insuranceslide7.js';
import InsuranceSlide8 from './insurance/insuranceslide8.js';
import InsuranceSlide9 from './insurance/insuranceslide9.js';
import InsuranceSlide10 from './insurance/insuranceslide10.js';
class BorrowProtector extends React.Component {
  constructor(props) {
    super(props);
    this.handelParentTabs = this.handelParentTabs.bind(this);
    this.state = {
          subtab: 0
        };
    }

    handelParentTabs()
    {
      this.setState({subtab:this.state.subtab+1})
    }
  render() {
        const {subtab} = this.state;
        return (
       
        <div className="column">
        <div className="box no-padding message-col detialed-box">
          {
            subtab ==0?
            <div className="swiper-container">
              <article className="message is-danger no-margin">
                <div className="message-header first">
                  <div className="full-width">                    
                    <div className="col">
                        <p className="white no-margin">Protect yourself <i className="fa fa-check pull-right"></i></p>
                      </div>
                  </div>
                    <div className="bd-klmn-columns columns pt-30">
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
                <a className="button is-danger is-outlined first-slide" onClick={e => this.setState({ subtab:1})}>
                    <span>More Details</span>    
                  </a>
               </div>
               </div>:
            subtab==1?
            <InsuranceSlide1 currentTab={this.handelParentTabs}/>:
            subtab==2?
            <InsuranceSlide2 currentTab={this.handelParentTabs}/>:
            subtab==3?
            <InsuranceSlide3 currentTab={this.handelParentTabs}/>:
            subtab==4?
            <InsuranceSlide4 currentTab={this.handelParentTabs}/>:
            subtab==5?
            <InsuranceSlide5 currentTab={this.handelParentTabs}/>:
            subtab==6?
            <InsuranceSlide6 currentTab={this.handelParentTabs}/>:
            subtab==7?
            <InsuranceSlide7 currentTab={this.handelParentTabs}/>:
            subtab==8?
            <InsuranceSlide8 currentTab={this.handelParentTabs}/>:
            subtab==9?
            <InsuranceSlide9 currentTab={this.handelParentTabs}/>:
            subtab==10?
            <InsuranceSlide10 currentTab={this.handelParentTabs}/>:
            null
          }
          </div>
        </div>
        
        );
    }
  
}

export default BorrowProtector;
