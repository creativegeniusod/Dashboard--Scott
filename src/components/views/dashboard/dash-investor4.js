import React from 'react';
import { Link } from 'react-router'
import InvestTitle from './invest-title.js'
import FundAccount from './fund-account.js'
import FundTransfer from './fund-transfer.js'
import AccountTransfer from './account-transfer.js'
import BeingTransfer from './being-transfer.js'
import InvestSlide from '../investor/inv-slide.js'
class DashboardInvestor4 extends React.Component {
	constructor(props) {
		super(props);
		this.handelPopup = this.handelPopup.bind(this);
		this.handelPopupClose = this.handelPopupClose.bind(this);
		this.handelPopupNext = this.handelPopupNext.bind(this);
		this.state = {
       	 	visible: 0,
       	 	tab: 0,
       	 	slide: 1
       	};
    }
	handelPopup()
   	{
   		this.setState({
          visible: 1,
        });
   	}

   	handelPopupClose(){
   		this.setState({
          visible: 0,
        });
   	}
   	handelPopupNext(slide){
   		if(slide == "backtoinvest")
   		{
   			this.setState({
	          visible: 0,
	          slide: 2
	        });
   		}
   		else
   		{
	   		this.setState({
	          visible: slide,
	        });
   		}
   	}

  	render() {
  		const  {visible,slide} = this.state;
        return (
        		<div>
        		{
        			visible != "backToInvestAfterTransfer"?
	        			<div className="box no-padding message-col dashboard detialed-box"> 
		              	<article className="message no-margin">
				            <div className="message-header no-padding">
				              <div className="full-width">                    
				                	<InvestTitle />
				                  <div className="col">
				                    <p className="no-margin heading">Invest $1,000/month into a TFSA and an RRSP so you'll have $1,256,080 ready for when you retire.</p>
				                    <h4 className="no-margin">Your Investment accounts are open and ready to funded.</h4>
				              </div>
				              <div className="col mt-20">
				                    <div className="columns ml-20 pt-10 top-border">
				                    	<div className="column tfsa-text pt-20">Your TFSA</div>
				                    	<div className="column right-side">
				                    		{
				                    			slide==1?
				                    				<a className="button is-info" onClick={e => this.setState({ visible:1})}>Fund my TFSA</a>:
				                    			slide == 2?
				                    			 	<span>Funding pending(2-3 weeks) <i className="fa fa-clock-o" onClick={this.props.currenttab}></i></span>:
				                    			null

				                    		}
				                    	</div>
				                    </div>
				                     <div className="columns ml-20 pt-10 top-border">
				                    	<div className="column tfsa-text pt-20">Your RRSP</div>
				                    	<div className="column right-side"><a className="button is-info" onClick={e => this.setState({ visible:1})}>Fund my RRSP</a></div>
				                    </div>
				                  </div>
			                  </div>
				            </div>
				        </article>
				    </div>:
				    <InvestSlide eventclose={this.handelPopupClose} event={this.handelPopupNext} />
        		}
       			  
	            {
	            	visible== 1?
	            	<div id="modal" className="modal is-active opened">
					  <div className="modal-background"></div> 
					  <div className="modal-content">
					    <div className="btn-wrap">
					      <button className="modal-close is-large" aria-label="close" onClick={e => this.setState({ visible:0})}></button>
					    </div>  
					    <div className="box no-padding">
					      <div className="p-30">
					        <h2 className="no-margin">Funding > Setting up a PAC</h2>
					       	<p>Pre-authorized contribution is the best way to consistently build wealth and hit your retirement goal. Simply fill and sign a PAC from and we'll do the rest.</p>
					       	<p><span>Your recommendation:</span> $418/month to your TFSA</p>
					      		<div className="col pt-20"><a className="button modal-button is-info is-small" onClick={e => this.setState({ visible:"follow"})} data-target="#modal">Fill out PAC form</a><a href="#" className="button inverse-btn"onClick={e => this.setState({ visible:0})} >Nevermind</a></div>
					      </div>  

					    </div>

					</div>
					</div>:
		          	visible == "fund"?
		          	<FundAccount eventclose={this.handelPopupClose} event={this.handelPopupNext} />:
		          	visible == "transfer"?
		          	<FundTransfer eventclose={this.handelPopupClose} event={this.handelPopupNext}  />:
		          	visible == "follow"?
		           	<AccountTransfer eventclose={this.handelPopupClose} event={this.handelPopupNext} />:
		           	visible == "follow-transfer"?
		           	<BeingTransfer eventclose={this.handelPopupClose} event={this.handelPopupNext} />:		           	
					null
				}
	           </div>
	           
        );
    }
  
}

export default DashboardInvestor4;
