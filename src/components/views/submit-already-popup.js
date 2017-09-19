import React from 'react';

class SubmitPopup extends React.Component {
        
  render() {

        return (
               <div id="modal-3" className="modal is-active opened">
                <div className="modal-background align-center"></div> 
                <div className="modal-content align-center">
                  <div className="btn-wrap">
                    <button className="modal-close is-large" aria-label="close" onClick={this.props.closeTab}></button>
                  </div>  
                  <div className="box bg-img">
                    <h2 className="align-center">You're great! and <span>{this.props.title}</span> should be too</h2>
                    <p className="align-center">We really appreciate you letting us know your current <span>{this.props.spantext}</span>. If we think we have something better, we'll reach out to you with details.</p>
                      <a href="#" className="button modal-button" data-target="#modal-3" onClick={this.props.closeTab}>Back to dashboard</a>
                    </div>    
                  </div>
                </div>
        );
    }
  
}

export default SubmitPopup;
