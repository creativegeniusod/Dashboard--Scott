import React from 'react';
import { Link } from 'react-router'
import InvestTitle from './invest-title.js';
import DashboardInvestor from './dash-investor.js';
import DashboardInvestor1 from './dash-investor1.js';
import DashboardInvestor2 from './dash-investor2.js';
import DashboardInvestor3 from './dash-investor3.js';
import DashboardInvestor4 from './dash-investor4.js';
import DashboardInvestor5 from './dash-investor5.js';
import DashboardInvestor6 from './dash-investor6.js';
import InvestSlide from '../investor/inv-slide.js';
class Investor extends React.Component {
 	constructor(props) {
		super(props);
		this.handelPopup = this.handelPopup.bind(this);
		this.handelParentTabs = this.handelParentTabs.bind(this);
		this.state = {
       	 	visible: 0,
       	 	tab: 0
       	};
    }
	handelPopup()
   	{
   		this.setState({
          visible: 1,
        });
   	}
	handelParentTabs()
    {
      this.setState({tab:this.state.tab + 1})
    }
  render() {
  		const {visible} = this.state;
  		const {tab} = this.state;
        return (
       <div className="column">
       		{
       			tab==0?
       			 <div className="box no-padding message-col dashboard detialed-box"> 
	              	<article className="message no-margin">
			            <div className="message-header no-padding">
			              <div className="full-width">                    
			                	<InvestTitle />

			                  <div className="col">
			                    <p className="no-margin heading">Invest <strong>$1,000/month</strong> into a TFSA and an RRSP so you'll have <strong>$1,256,080</strong> ready for when you retire.</p>
			                    <div className="is-info swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
			                    	<a href="#" className="swiper-pagination-bullet bold"></a>
			                    	<a href="#" className="swiper-pagination-bullet"></a>
			                    	<a href="#" className="swiper-pagination-bullet"></a>
			                    </div>
			                    <h4 className="no-margin">Next step:</h4>
			                    <p className="no-margin">Design your portfolio and start your monthly investment plan.</p>
			                  </div>
			              </div>
			            </div>
			        </article>
	                	
			          <div className="col btn-sec pt-10 pb-10">
			            <a className="button is-info" onClick={e => this.setState({ tab:2})}>Design your portfolio</a>
			            <a className="align-right" onClick={e => this.setState({ visible:"alreadyhave"})}>i already have investment</a>
			          </div>
	            </div>:
	            tab == 1?
	            <DashboardInvestor currenttab ={this.handelParentTabs} />:
	            tab == 2?
	            <DashboardInvestor1 currenttab ={this.handelParentTabs} />:
	            tab == 3?
	            <DashboardInvestor2 currenttab ={this.handelParentTabs} />:
	            tab == 4?
	            <DashboardInvestor3 currenttab ={this.handelParentTabs} />:
	            tab == 5?
	            <DashboardInvestor4 currenttab ={this.handelParentTabs} />:
	            tab == 6?
	            <DashboardInvestor5 currenttab ={this.handelParentTabs} />:
	            tab == 7?
	            <InvestSlide currenttab ={this.handelParentTabs} />:
       			null
       		}
           
            {
            visible== "alreadyhave"?
            	<div id="modal" className="modal is-active opened">
				  <div className="modal-background"></div> 
				  <div className="modal-content">
				    <div className="btn-wrap">
				      <button className="modal-close is-large" aria-label="close" onClick={e => this.setState({ visible:0})}></button>
				    </div>  

				    <div className="box no-padding">
				      <div className="p-30">
				        <h2 className="no-margin modal-heading">I already have investments</h2>
				        
				       	<p>That's great! If you don't mind us asking. we'd appreciate some details about your current investment for our records, and to be sure your investments are keeping you on track to reach your goals. Request a call with one of our specialist to discuss your current investments.</p>
				      		<div className="col pt-20"><a className="button modal-button is-small" onClick={e => this.setState({ visible:"call"})} data-target="#modal">Request a call</a><a href="#" className="button inverse-btn">Nevermind</a></div>
				      </div>  

				    </div>

				</div>
				</div>:
				visible== "call"?
				<div id="modal-3" className="modal is-active modal-dashboard opened" >
		          <div className="modal-background align-center"></div> 
		          <div className="modal-content align-center">
		            <div className="btn-wrap">
		              <button className="modal-close is-large" aria-label="close" onClick={e => this.setState({ visible:0})}></button>
		            </div>  
		            <div className="box bg-img">
		              <h2 className="align-center">Great! You've request a call</h2>
		              <p className="align-center">One of our specialist will reach out to you over the phone to discuss your current investments. You can expect a call in 1-2 days.</p>
		                <a href="#" className="button modal-button" data-target="#modal-3" onClick={e => this.setState({ tab:1, visible:0})}>Back to dashboard</a>
		              </div>    
		            </div>
		          </div>:

				null
            }
            
        </div>

        );
    }
  
}

export default Investor;
