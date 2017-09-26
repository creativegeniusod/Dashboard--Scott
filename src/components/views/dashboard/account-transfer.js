import React from 'react';
import { Link } from 'react-router'
class AccountTransfer extends React.Component {
  render() {
        return (
      			<div id="modal-3" className="modal is-active modal-dashboard opened" >
			          <div className="modal-background align-center"></div> 
			          <div className="modal-content align-center">
			            <div className="btn-wrap">
			              <button className="modal-close is-large" aria-label="close" onClick={e => this.setState({ visible:0})}></button>
			            </div>  
			            <div className="box bg-img">
			              <h2 className="align-center">High five! Your PAC is on the way</h2>
			              <p className="align-center">We'll let you know as soon as your monthly pre-authorized contribution take effect. For now, sit tight and we'll do the rest.</p>
			                <a href="#" className="button modal-button is-info" data-target="#modal-3" onClick={e => this.setState({ visible:"fund"})}>Fund another acount</a>
			                <br/>
			                <a>Back to investments</a>
			              </div>    
			            </div>
			          </div>
        );
    }
  
}

export default AccountTransfer;
