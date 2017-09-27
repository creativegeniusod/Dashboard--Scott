import React from 'react';
import { Link } from 'react-router'
import DashboardProtector from './dash-protector.js';
import DashboardProtector1 from './dash-protector1.js';
import DashboardProtector2 from './dash-protector2.js';
import DashboardProtector3 from './dash-protector3.js';
import DashboardProtector4 from './dash-protector4.js';
import DashboardProtector5 from './dash-protector5.js';
import DashboardProtector6 from './dash-protector6.js';
import DashboardProtector7 from './dash-protector7.js';
import DashboardProtector8 from './dash-protector8.js';
import DashboardProtector9 from './dash-protector9.js';
import DashboardProtector10 from './dash-protector10.js';
import DashboardProtector11 from './dash-protector11.js';
import DashboardProtector12 from './dash-protector12.js';
import DashboardProtector13 from './dash-protector13.js';
class Protector extends React.Component {
  constructor(){
    super();
    this.state= { visible: 0,tab:1 };
    this.handelParentTabs = this.handelParentTabs.bind(this);
    this.handelPopup = this.handelPopup.bind(this);
  }
  handelParentTabs(data)
  {
    this.setState({tab:this.state.tab + 1})
  }
  handelPopup(data)
  {
    this.setState({visible:data})
  }
  render() {
      const {visible,tab} = this.state;
        return (
            <div className="column">
             {
                tab==1?
                  <DashboardProtector protecttab ={this.handelParentTabs} popupstatus={this.handelPopup} />:
                tab==2?
                  <DashboardProtector2 protecttab ={this.handelParentTabs} popupstatus={this.handelPopup} />:
                tab==3?
                  <DashboardProtector3 protecttab ={this.handelParentTabs} popupstatus={this.handelPopup} />:
                tab==4?
                  <DashboardProtector4 protecttab ={this.handelParentTabs} popupstatus={this.handelPopup} />:
                tab==5?
                  <DashboardProtector5 protecttab ={this.handelParentTabs} popupstatus={this.handelPopup} />:
                tab==6?
                  <DashboardProtector6 protecttab ={this.handelParentTabs} popupstatus={this.handelPopup} />:
                tab==7?
                  <DashboardProtector7 protecttab ={this.handelParentTabs} popupstatus={this.handelPopup} />:
                tab==8?
                  <DashboardProtector8 protecttab ={this.handelParentTabs} popupstatus={this.handelPopup} />:
                tab==9?
                  <DashboardProtector9 protecttab ={this.handelParentTabs} popupstatus={this.handelPopup} />:
                tab==10?
                  <DashboardProtector10 protecttab ={this.handelParentTabs} popupstatus={this.handelPopup} />:
                tab==11?
                  <DashboardProtector11 protecttab ={this.handelParentTabs} popupstatus={this.handelPopup} />:
                tab==12?
                  <DashboardProtector12 protecttab ={this.handelParentTabs} popupstatus={this.handelPopup} />:
                tab==13?
                  <DashboardProtector13 protecttab ={this.handelParentTabs} popupstatus={this.handelPopup} />:
                tab=="request-call"?
                  <DashboardProtector1 protecttab ={this.handelParentTabs} popupstatus={this.handelPopup} />:
                  null

             }
            {
              visible=="already"?
                <div id="modal" className="modal is-active opened">
                  <div className="modal-background"></div> 
                  <div className="modal-content">
                    <div className="btn-wrap">
                      <button className="modal-close is-large" aria-label="close" onClick={e => this.setState({ visible:0})}></button>
                    </div>  
                    <div className="box no-padding">
                      <div className="p-30">
                        <h2 className="no-margin">I already have insurance</h2>
                        
                        <p>That's great! If you don't mind us asking. we'd appreciate some details about your coverage for our records, and to be sure your investments are keeping you on track to reach your goals. Request a call with one of our specialist to discuss your cYou're getting the best coverage for your needs. Request a call with one of our specialist to discuss your current insurance coverage.</p>
                          <div className="col pt-20"><a className="button modal-button is-small" onClick={e => this.setState({ visible:"call"})} data-target="#modal">Request a call</a><a href="#" onClick={e => this.setState({ visible:0,tab:1})} className="button inverse-btn">Nevermind</a></div>
                      </div>  

                    </div>

                </div>
                </div>:
                visible== "call"?
                  <div id="modal-3" className="modal is-active modal-dashboard opened" >
                    <div className="modal-background align-center"></div> 
                    <div className="modal-content align-center">
                      <div className="btn-wrap">
                        <button className="modal-close is-large" aria-label="close" onClick={e => this.setState({ visible:0})}></button>
                      </div>  
                      <div className="box bg-img">
                        <h2 className="align-center">Great! You've request a call</h2>
                        <p className="align-center">One of our specialist will reach out to you over the phone to discuss your current insurance coverage. You can expect a call in 1-2 days.</p>
                          <a href="#" className="button modal-button" data-target="#modal-3" onClick={e => this.setState({tab:"request-call", visible:0})}>Back to dashboard</a>
                        </div>    
                      </div>
                    </div>:
                    null
            }
        </div>

        );
    }
  
}

export default Protector;
