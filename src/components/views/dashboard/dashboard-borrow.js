import React from 'react';
import { Link } from 'react-router'
import DashboardBorrow from './dash-borrow'
import DashboardBorrow1 from './dash-borrow1'
import DashboardBorrow2 from './dash-borrow2'
import DashboardBorrow3 from './dash-borrow3'
import DashboardBorrow4 from './dash-borrow4'
import DashboardBorrow5 from './dash-borrow5'
import DashboardBorrow6 from './dash-borrow6'
class Borrow extends React.Component {
   constructor(){
    super();
    this.handelBorrowTabs = this.handelBorrowTabs.bind(this);
    this.handelBorrowPopup = this.handelBorrowPopup.bind(this);
    this.state= { visible: 0,tab:1 };
  }
  handelBorrowTabs(type)
  {
      this.setState({tab: this.state.tab + 1});
  } 
  handelBorrowPopup(type)
  {
      this.setState({visible: type});
  }
  render() {
        const {visible,tab} = this.state;
        return (
            <div className="column">
              {
                tab == "backTo"?
                  <DashboardBorrow  borrowtab={this.handelBorrowTabs} />:
                tab == 1?
                  <DashboardBorrow1  borrowtab={this.handelBorrowTabs} borrowpopup={this.handelBorrowPopup} />:
                tab == 2?
                  <DashboardBorrow2  borrowtab={this.handelBorrowTabs} />:
                tab == 3?
                  <DashboardBorrow3  borrowtab={this.handelBorrowTabs} />:
                tab == 4?
                  <DashboardBorrow4  borrowtab={this.handelBorrowTabs} />:
                tab == 5?
                  <DashboardBorrow5  borrowtab={this.handelBorrowTabs} />:
                tab == 6?
                  <DashboardBorrow6  borrowtab={this.handelBorrowTabs} />:
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
                        <h2 className="no-margin">I already have mortgage</h2>
                        
                        <p>That's great! If you don't mind us asking. we'd appreciate some details about your current mortgage for our records, and to be sure your investments are keeping you on track to reach your goals. Request a call with one of our specialist to discuss your cYou're getting the best possible mortgage for your needs. Request a call with one of our specialist to discuss your current mortgage.</p>
                          <div className="col pt-20"><a className="button modal-button is-small" onClick={e => this.setState({ visible:"call"})} data-target="#modal">Request a call</a><a href="#" className="button inverse-btn">Nevermind</a></div>
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
                        <p className="align-center">One of our specialist will reach out to you over the phone to discuss your current mortgage details. You can expect a call in 1-2 days.</p>
                          <a href="#" className="button modal-button" data-target="#modal-3" onClick={e => this.setState({tab:"backTo", visible:0})}>Back to dashboard</a>
                        </div>    
                      </div>
                    </div>:
                    null
            }
            </div>
        );
    }
  
}

export default Borrow;
