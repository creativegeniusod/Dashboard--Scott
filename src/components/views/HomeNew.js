import React from 'react';
import Investor from './investor';
import Protect from './protect';
import Mortgage from './mortgage';

class HomeNew extends React.Component {
    constructor(props) {
        super(props);
        this.handleInsurancePopup = this.handleInsurancePopup.bind(this);
        this.handlePopupClose = this.handlePopupClose.bind(this);
        this.state = {
            display: false,
            modelDashboard: false,
            modelInsurance: false,
            modelMortgage: false,
            title: 'insurance',
            span: 'coverage',
        };
    }
    handleInsurancePopup(type, dashboardtitle,dashboardcontent) {
      if(type == "dashboard")
      {
        this.setState({
          modelDashboard: true,
          modelInsurance: false,
          modelMortgage: false,
          title: dashboardtitle,
          span: dashboardcontent,
        });
      }
      else if(type == "mortgage"){
		 this.setState({
          modelDashboard: false,
          modelInsurance: false,
          modelMortgage: true,
        }); 
	  }
	 else if(type == "insurance"){
		 this.setState({
          modelDashboard: false,
          modelInsurance: true,
          modelMortgage: false,
        }); 
	  }
    } 
    handlePopupClose(type) {
		this.setState({
          modelDashboard: false,
          modelInsurance: false,
          modelMortgage: false,
        }); 
    }
  render() {
	    const {modelDashboard, modelInsurance, modelMortgage, title, span} = this.state;
	  
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
                  You retire at age 65 with a monthly income of $42,000, and a surplus of $85,000 at age 90.It starts with a plan.
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
            <div className="columns custom-columns is-variable bd-klmn-columns is-3">
                <Investor />
                <Protect modelInsurance={this.state.modelInsurance} handleInsurancePopup={this.handleInsurancePopup} handlePopupClose={this.handlePopupClose}/>
                <Mortgage modelMortgage={this.state.modelMortgage} handleInsurancePopup={this.handleInsurancePopup} handlePopupClose={this.handlePopupClose}/>
          </div>
          </div>
        </div>
        <div id="modal-3" className="modal is-active modal-dashboard" style={{ display: `${modelDashboard ? 'flex' : 'none'}`}}>
          <div className="modal-background align-center"></div> 
          <div className="modal-content align-center">
            <div className="btn-wrap">
              <button className="modal-close is-large" aria-label="close" onClick={this.handlePopupClose.bind(this, "dashboard")}></button>
            </div>  
            <div className="box bg-img">
              <h2 className="align-center">You're great! and <span>{title}</span> should be too</h2>
              <p className="align-center">We really appreciate you letting us know your current <span>{span}</span>. If we think we have something better, we'll reach out to you with details.</p>
                <a href="#" className="button modal-button" data-target="#modal-3" onClick={this.handlePopupClose.bind(this, "dashboard")}>Back to dashboard</a>
              </div>    
            </div>
          </div>
    </section>  
  </div>
        );
    }
  
}

export default HomeNew;
