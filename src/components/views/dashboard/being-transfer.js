import React from 'react';
import { Link } from 'react-router'
class BeingTransfer extends React.Component {
  render() {
        return (
      			<div id="modal-3" className="modal is-active modal-dashboard opened" >
			          <div className="modal-background align-center"></div> 
			          <div className="modal-content align-center">
			            <div className="btn-wrap">
			              <button className="modal-close is-large" aria-label="close" onClick={this.props.event.bind("slide",0)}></button>
			            </div>  
			            <div className="box bg-img">
			              <h2 className="align-center">Awesome! Your account is being transferred.</h2>
			              <p className="align-center">You've confirmed that you follwed the steps to transfer an investment account to Planswell. Your account should be transferred <strong>within 2-3 weeks.</strong> If anything comes up, we'll let you know by email.</p>
			                <a href="#" className="button modal-button is-info" data-target="#modal-3" onClick={this.props.event.bind("slide","fund")}>Fund another account</a>
			                <br/>
			                <a onClick={this.props.event.bind("slide","backToInvestAfterTransfer")} className="default-color">Back to investments</a>
			              </div>    
			            </div>
			          </div>
        );
    }
  
}

export default BeingTransfer;
