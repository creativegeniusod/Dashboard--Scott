import React from 'react';
import { Link } from 'react-router'
import BorrowTitle from './borrow-title.js';

class DashboardBorrow8 extends React.Component {
  render() {
        return (
                <div id="modal-3" className="modal is-active opened">
                  <div className="modal-background"></div> 
                  <div className="modal-content ">
                    <div className="btn-wrap">
                      <button className="modal-close is-large" aria-label="close" onClick={e => this.setState({ visible:0})}></button>
                    </div>  
                    <div className="box bg-img align-center">
                      <h2 className="align-center">Awesome! We've received your documents</h2>  
                      <p className="align-center">Thanks for submitting your documents. We'll get them to your lender as soon as we possibly can. Squirrels can only move so fast. </p>
                        <a href="#" className="button modal-button is-warning" data-target="#modal-3" onClick={this.props.borrowtab}>Upload another document</a>
                        <p><a href="#" className="" data-target="#modal-3">Back to mortgage</a></p>
                      </div>    
                    </div>
                  </div>

        );
    }
  
}

export default DashboardBorrow8;
