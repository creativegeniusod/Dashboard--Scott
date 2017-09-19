import React from 'react';

class AlreadyMortgage extends React.Component {
        
  render() {

        return (
               <div id="modal" className="modal is-active opened">
                <div className="modal-background"></div> 
                <div className="modal-content">
                  <div className="btn-wrap">
                    <button className="modal-close is-large" aria-label="close" onClick={this.props.closeTab}></button>
                  </div>  
                  <div className="box">
                    <h2>I already have a mortgage</h2>
                    <p>That's great! You already have one piece of your puzzle covered. If you don’t mind us asking. we’d appreciate some details about your mortgage for our records and to be sure you’re getting the best mortgage for your needs.</p>
                    <div className="responsive-table">
                      <table className="table loan-table">
                        <thead>
                        <tr>
                          <th>Original loan value</th>
                          <th>Interest rate</th>
                          <th>Total mortgage paid</th>
                          <th>Amortization</th> 
                          </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td><span>$</span>470,000</td>
                          <td>4.65<span>%</span></td>
                          <td><span>$</span>46,000</td>
                          <td>35years</td>    
                          </tr>              
                        </tbody>
                      </table>
                    </div>
                    <p className="note-txt">Those don't how: to exact, but as close as possibe will help us,</p>
                    <a href="#" className="add-more">+ Add another mortgage</a>
                    <div className="col pt-20">
                      <a className="button modal-button" data-target="#modal" onClick={this.props.submit}>Submit details</a>
                      <a href="#" className="button inverse-btn"  onClick={this.props.closeTab}>Nevermind</a>
                    </div>
                  </div>
                </div>
              </div>
        );
    }
  
}

export default AlreadyMortgage;
