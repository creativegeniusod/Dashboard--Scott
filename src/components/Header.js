import React from 'react';

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
     //  this.setState({ display: !this.state.display });
      $('.show-sidebar').addClass('sidebar-active').next('.fa').removeClass('fa-chevron-right').addClass('fa-chevron-left');
      $(".right-nav").animate({width: 'toggle'});
      $('body').addClass('add-overlay');
      $('body').animate({right: "400px"}, 400).css({"overflow":"hidden"});
      $('body').css({'overflow':'hidden'});
    }
    
    handleHide() {
     //  this.setState({ display: !this.state.display });
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
	    		<a href="">Account Settings</a>
	    		<i className="fa fa-arrow-right"></i>
	    	</li>
	    	<li>
	    		<a href="">Refer a friend</a>
	    		<i className="fa fa-arrow-right"></i>
	    	</li>
	    	<li>
	    		<a href="">Update your plan</a>
	    		<i className="fa fa-arrow-right"></i>
	    	</li>
	    	<li>
	    		<a href="">Logout</a>
	    		<i className="fa fa-arrow-right"></i>
	    	</li>
	    	<li className="no-border">
	    		<a href="">Contact Planswell</a>
	    		<p><small>Have a question about your account?Let us know below and well get back to you as soon as possible.</small></p>
	    	</li>
	    	<li className="no-border pt-0">
	    		<textarea placeholder="What's on your mind?"></textarea>
	    		<button className="button is-primary">Email Us</button>
	    	</li>
	    	<li className="no-border pt-0">Burning question that cans wait? Give us a call: 1-800-PLANSWELL</li>
	    </ul>
	</div>
          
        
            <nav className="navbar ">
			  <div className="navbar-brand">
				<a className="navbar-item" href="">
				  <img src="images/planswell-logo-green.png" />
				</a>
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
					  <a className="navbar-item" href="" target="_blank">
						<span className="icon">
						  <i className="fa fa-bell"></i>
						  <span className="badge">1</span>
						</span>
					  </a>
					</li>
					<li>
					  <a className="button is-primary is-outlined"><i className="fa fa-question"></i> Help</a>
					</li>
					<li>
					  <a className="navbar-item" href="javascript:void(0)">
						<img src="images/user.png" />
						<span className="show-sidebar" onClick={this.handleShow} >Chris Baldesara</span>
						<i className="fa fa-chevron-right"></i>
					  </a>
					</li>
				  </ul>
			  </div>
			  </div>
  	        </nav>
  	        </div>
        );
    }
  
}

export default Header;
