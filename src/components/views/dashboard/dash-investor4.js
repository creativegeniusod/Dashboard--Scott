import React from 'react';
import { Link } from 'react-router'
import InvestTitle from './invest-title.js'
import FundAccount from './fund-account.js'
import FundTransfer from './fund-transfer.js'
import AccountTransfer from './account-transfer.js'
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
   	handelPopupNext(){
   		this.setState({
          visible: "transfer",
        });
   	}

  	render() {
  		const  {visible,slide} = this.state;
        return (
        		<div>
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
			    </div>
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
					      		<div className="col pt-20"><a className="button modal-button is-info is-small" onClick={e => this.setState({ visible:"fill"})} data-target="#modal">Fill out PAC form</a><a href="#" className="button inverse-btn"onClick={e => this.setState({ visible:0})} >Nevermind</a></div>
					      </div>  

					    </div>

					</div>
					</div>:
					visible== "fill"?
					<div id="modal-3" className="modal is-active modal-dashboard opened" >
			          <div className="modal-background align-center"></div> 
			          <div className="modal-content align-center">
			            <div className="btn-wrap">
			              <button className="modal-close is-large" aria-label="close" onClick={e => this.setState({ visible:0})}></button>
			            </div>  
			            <div className="box bg-img">
			              <h2 className="align-center">High five! Your PAC is on the way</h2>
			              <p className="align-center">We'll let you know as soon as your monthly pre-authorized contribution take effect. For now, sit tight and we'll do the rest.</p>
			                <a href="#" className="button modal-button is-info" data-target="#modal-3" onClick={e => this.setState({ visible:"fund"})}>Fund another acount</a>
			                <br/>
			                <a onClick={e => this.setState({ slide:2,visible:0})} >Back to investments</a>
			              </div>    
			            </div>
			          </div>:
			          visible == "fund"?
			          <FundAccount eventclose={this.handelPopupClose} eventnext={this.handelPopupNext} event={this.handelPopup} />:
			          visible == "transfer"?
			          <FundTransfer eventclose={this.handelPopupClose} />:
			           visible == "follow"?
			           <AccountTransfer eventclose={this.handelPopupClose} />:
					null
				}
	           </div>
	           
        );
    }
  
}

export default DashboardInvestor4;
