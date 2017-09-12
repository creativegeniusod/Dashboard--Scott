import React from 'react';
import { Link } from 'react-router-dom'
import Tab from './tab';
import Tab2 from './tab2';
import Tab3 from './tab3';
import Tab4 from './tab4';
import Tab5 from './tab5';

class Account extends React.Component { 
        constructor(props) {
			super(props);
			this.handleHide = this.handleHide.bind(this);
			this.state = {
            tab: 1,
           };
        }
        
        
        handleHide() {
			$(".right-nav").animate({width: 'toggle'});
            $("body").animate({right: "0"}, 400);
            $('.show-sidebar').css({'opacity':'1'});
            $('body').removeClass('add-overlay');
            $('body').css({'overflow':'visible'});
            $('.show-sidebar').removeClass('sidebar-active').next('.fa').removeClass('fa-chevron-left').addClass('fa-chevron-right');
        }
        
        
        
    componentDidMount() {
        this.handleHide();
      }          
            
  render() {
	    const {tab}=this.state;
        return (
       <div className="main-content">
		<section className="section bg-content level-1">
			<div className="container">
				<div className="col">
					<nav className="breadcrumb is-small has-succeeds-separator" aria-label="breadcrumbs">
					  <ul>
					    <li><Link to='/'>home</Link></li>
					    <li className="is-active"><a href="#" aria-current="page">Account setting</a></li>
					  </ul>
					</nav>
					
			    </div>
			</div>
		</section>
		<section className="section level-3">
		    <div className="container">
			    <div className="content">
			    	<div className="columns">
			    		<div className="column">
	      					<div className="user-info">
	      					{
						    tab==1 ?
						    <Tab/>:
						    tab==2 ?
						    <Tab2/>:
						    tab==3 ?
						   <Tab3/>:
						    tab==4 ?
						    <Tab4/>:
						    tab==4 ?
						    <Tab5/>:
						    null	
						    }
		
	      					</div>
	      				</div>
			    		<div className="column is-one-quarter">
	      					<div className="box tabs vertical-align">	      						
	      						<ul>
	      							<li><a href="#" rel="tab1" onClick={e => this.setState({ tab: 1 })} >Account settings <i className="fa fa-arrow-right" aria-hidden="true"></i></a></li>
	      							<li><a href="#" rel="tab2" onClick={e => this.setState({ tab: 2 })}>Update your plan <i className="fa fa-arrow-right" aria-hidden="true"></i></a></li>
	      							<li><a href="#" rel="tab3" onClick={e => this.setState({ tab: 3})} >Notification centre <i className="fa fa-arrow-right" aria-hidden="true"></i></a></li>
	      							<li><a href="#" rel="tab4" onClick={e => this.setState({ tab: 4 })}>Referral program <i className="fa fa-arrow-right" aria-hidden="true"></i></a></li>
	      							<li><a href="#" rel="tab5" onClick={e => this.setState({ tab: 5 })}>Log out <i className="fa fa-arrow-right" aria-hidden="true"></i></a></li>
	      						</ul>
	      					</div>
	      					<div className="box contact-info mt-20 ">
	      						<h6>Contact Planswell</h6>
	      						<div className="p-20">
		      						<p>Have a question about your account? Drop us a line and we’ll get back to you as soon as possible.</p>
		      						<a href="#" className="button">Email us</a> <span><strong>Call us:</strong>1-800-PLANSWELL</span>
		      					</div>
	      					</div>
	      				</div>
	      				
	      				
				    </div>
			    </div>
		    </div>
		</section>
	</div>
        );
    }
  
}

export default Account;
