import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
	
	 constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
        this.state = {
            display: false,
        };
    }
    handleShow() {
		$('.show-sidebar').addClass('sidebar-active').next('.fa').removeClass('fa-chevron-right').addClass('fa-chevron-left');
		$(".right-nav").animate({width: 'toggle'});
		$('body').addClass('add-overlay');
		$('body').animate({right: "400px"}, 400).css({"overflow":"hidden"});
		$('body').css({'overflow':'hidden'});
    }
    
    handleHide() {
        $(".right-nav").animate({width: 'toggle'});
        $("body").animate({right: "0"}, 400);
        $('.show-sidebar').css({'opacity':'1'});
        $('body').removeClass('add-overlay');
        $('body').css({'overflow':'visible'});
        $('.show-sidebar').removeClass('sidebar-active').next('.fa').removeClass('fa-chevron-left').addClass('fa-chevron-right');
    }
    
	
 
  render() {
	  
	   const {display} = this.state;
        return (
        <div>
        <div style={{display: "none"}} className="right-nav">
		<div className="navbar-header">
	        <button className="navbar-toggle hide-sidebar" type="button" onClick={this.handleHide}>X</button>
	    </div>
	    <h6>My Planswell acount</h6>
			<ul>
				<li>
					<Link to='/account'>Account settings</Link>
					<i className="fa fa-arrow-right"></i>
				</li>
				<li>
					<Link to='#'>Refer a friend</Link>
					<i className="fa fa-arrow-right"></i>
				</li>
				<li>
					<Link to='#'>Update your plan</Link>
					<i className="fa fa-arrow-right"></i>
				</li>
				<li>
					<Link to='#'>Logout</Link>
					<i className="fa fa-arrow-right"></i>
				</li>
				<li className="no-border">
					<Link to='#'>Contact Planswell</Link>
					<p><small>Have a question about your account?Let us know below and well get back to you as soon as possible.</small></p>
				</li>
				<li className="no-border pt-0">
					<textarea placeholder="What's on your mind?"></textarea>
					<button className="button is-primary">Email Us</button>
				</li>
				<li className="no-border pt-0 call-us">Burning question that cans wait? Give us a call: <span>1-800-PLANSWELL</span></li>
			</ul>
	    </div>
	    <div className="container">
            <nav className="navbar ">
			  <div className="navbar-brand">
				<Link to='/homeNew' className='navbar-item'> 
				<img src="images/planswell-logo-green.png" />		
				</Link>
				<div className="navbar-burger burger" >
				   <span></span>
				   <span></span>
				   <span></span>
				</div>
			  </div>

			  <div id="navMenubd-example" className="navbar-menu">
				<div className="navbar-end">
				  <ul>
					<li>
					  <a className="navbar-item" href="#1">
						<span className="icon">
						  <i className="fa fa-bell"></i>
						  <span className="badge">1</span>
						</span>
					  </a>
					</li>
					<li>
					  <Link to='#' className='button is-primary is-outlined'> <i className="fa fa-question"></i>Help </Link>
					  
					</li>
					<li>

					  
					  <Link to='#' className='navbar-item' onClick={this.handleShow}> 
						<img src="images/user.png" />
						<span className="show-sidebar" >Chris Baldesara</span>
						<i className="fa fa-chevron-right"></i>
					  </Link>
					</li>
				  </ul>
			  </div>
			  </div>
  	        </nav>
  	        </div>
  	       </div>
        );
    }
  
}

export default Header;
