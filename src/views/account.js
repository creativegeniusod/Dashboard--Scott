import React from 'react';
import { Link } from 'react-router-dom'

class Account extends React.Component { 
        constructor(props) {
			super(props);
			this.handleHide = this.handleHide.bind(this);
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
					<h1 className="title">Chris account setting </h1>
			    </div>
			</div>
		</section>
		<section className="section level-2">
		    <div className="container">
			    <div className="content">
			    	<div className="columns">
	      				<div className="column"></div>
	      				<div className="column is-one-quarter"></div>
				    </div>
			    </div>
		    </div>
		</section>
	</div>
        );
    }
  
}

export default Account;
