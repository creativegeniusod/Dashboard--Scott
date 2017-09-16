import React from 'react';
import { Link } from 'react-router'
import Model from './model';

class Tab3 extends React.Component {  
    constructor(props) {
			super(props);
			this.showModel = this.showModel.bind(this);
			this.hideModel = this.hideModel.bind(this);
			this.state = {
            show: false,
           };
        }
          
    componentDidMount() {    
      
      }      
      showModel() {;
			this.setState({ show: true });
        }
      hideModel() {
			this.setState({ show: false });
        }     
                     
            
  render() {
	    
        return (
      <div id="tab3" className="tab-content">
		      						<h1 className="title">My Notification</h1>
	      							<div className="box no-padding">
	      								<h6>Notification <span className="pull-right">Actions</span></h6>
	      								<ul className="noti-wrap">
	      									<li>Your Augest RRSP report is ready <a href="#">View report</a></li>
	      									<li>Your Augest TFSA report is ready <a href="#">View report</a></li>
	      									<li>Your insurance policies are in underwriting!</li>
	      									<li>Your insurance policies are ready to review and sign<a className="gray-txt" href="#">Review and sign</a></li>
	      									<li>Your investment accounts have been opened!</li>
	      								</ul>
	      							</div>
	  <a className="noti-btn modal-button" data-target="#modal-1" onClick={this.showModel} href="#">Notification settings</a>
	 <Model show={this.state.show} hide={this.hideModel}/>
	 </div>
        );
    }
  
}

export default Tab3;
