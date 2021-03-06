import React from 'react';
import { Link } from 'react-router'

class Header extends React.Component {
	
	 constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
        this.state = {
            display: false,
            hide: 'hideN',
            sidebar: 'fa-chevron-right',
            sidebarActive: false,
            opacity: false,
            emailSubmit: false,
        };
    }
    handleShow(e) {
		e.preventDefault();
       this.setState({
          hide: 'showN',
          sidebar: 'fa-chevron-left',
          sidebarActive: true,
          opacity: false,
          emailSubmit: false
        });
		document.body.classList.add('add-overlay');
		document.getElementById("navDiv").className ='right-nav';
		document.body.style.overflow = "hidden";
		document.body.classList.add('slideout');
		document.body.classList.remove('slidein');
		
    }
    
    handleHide() {
		this.setState({
          hide: 'hideN',
          sidebar: 'fa-chevron-right',
          sidebarActive: false,
          opacity: true,
        }); 
        document.body.classList.remove('add-overlay');
		document.body.style.overflow = "visible";	
		document.body.classList.remove('slideout');
		document.body.classList.add('slidein');
    }
    
	
 
  render() {
	   const {display, hide, sidebar, sidebarActive, opacity,emailSubmit} = this.state;
        return (
        <div>
        
     
        <div id='navDiv' className={`right-nav`}>
		<div className="navbar-header">
	        <button className="navbar-toggle hide-sidebar" type="button" onClick={this.handleHide}>X</button>
	    </div>
			<ul>
				<li>
					<h6>My Planswell account</h6>
				</li>
				<li>
					<Link to='/refer-friend' onClick={this.handleHide}>Refer a friend</Link>
					<i className="fa fa-arrow-right"></i>
				</li>
				<li>
					<Link to='#'>Logout</Link>
					<i className="fa fa-arrow-right"></i>
				</li>
				
				{
					emailSubmit == false?
					<li className="no-border pt-15">
						<Link to='#'>Contact Planswell</Link>
						<p><small>Have a question about your account?Let us know below and well get back to you as soon as possible.</small></p>
						<textarea placeholder="What's on your mind?"></textarea>
						<button className="button is-primary" onClick={e=>this.setState({emailSubmit:"content"})}>Email Us</button>
					</li>:
					emailSubmit == "content"?
					<li className="no-border pt-15">
						<Link to='#'>Contact Planswell</Link>
						<p><small>Have a question about your account?Let us know below and well get back to you as soon as possible.</small></p>
						<textarea value="What's the deal with all the insurance, huh!? Tell me about that!"></textarea>
						<button className="button is-primary" onClick={e=>this.setState({emailSubmit:true})}>Email Us</button>
					</li>:
					emailSubmit == true?
					<li className="no-border pt-15">
						<h6 className="white">Thanks for reaching out, Chris.</h6>
						<p><small>one of our Plan Pros will reach out to you as soon as possible via email.</small></p>
					</li>:
					null
				}
				
				<li className="no-border pt-0 call-us">Burning question that cans wait? Give us a call: <span>1-800-PLANSWELL</span></li>
			</ul>
	    </div>
	    <div className="container container-header">
            <nav className="navbar ">
			  <div className="navbar-brand">
				<Link to='/homeNew' className='navbar-item'> 
				<img src="static/images/planswell-logo-green.png" />		
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
						<img src="static/images/user.png" />
						<span className= {`show-sidebar ${sidebarActive ? 'sidebar-active' : ''} ${opacity ? 'opacity' : ''}`} >Chris Baldesara</span>
						<i className={`fa ${sidebar}`}></i>
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
