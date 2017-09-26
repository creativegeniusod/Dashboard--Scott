import React from 'react';
import { Link } from 'react-router'
import InvestSlide from './investor/inv-slide.js';
import InvestSlide1 from './investor/inv-slide1.js';
import InvestSlide2 from './investor/inv-slide2.js';
import InvestSlide3 from './investor/inv-slide3.js';
import InvestSlide4 from './investor/inv-slide4.js';
import InvestSlide5 from './investor/inv-slide5.js';
import InvestSlide6 from './investor/inv-slide6.js';
import InvestSlide7 from './investor/inv-slide7.js';
class BorrowInvestor extends React.Component {
 	constructor(props) {
		super(props);
		this.handelPopup = this.handelPopup.bind(this);
		this.handelParentTabs = this.handelParentTabs.bind(this);
		this.state = {
       	 	visible: 0,
       	 	intab: 0
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
      this.setState({intab:this.state.intab + 1})
    }
  render() {
  		
  		const {intab} = this.state;
        return (
       <div className="column">
       		{
       			intab==0?
       			 <InvestSlide />:
       			intab==1?
       			<InvestSlide1 currentTab={this.handelParentTabs} />:
       			intab==2?
       			<InvestSlide2 currentTab={this.handelParentTabs} />:
       			intab==3?
       			<InvestSlide3 currentTab={this.handelParentTabs} />:
       			intab==4?
       			<InvestSlide4 currentTab={this.handelParentTabs} />:
       			intab==5?
       			<InvestSlide5 currentTab={this.handelParentTabs} />:
       			intab==6?
       			<InvestSlide6 currentTab={this.handelParentTabs} />:
       			intab==7?
       			<InvestSlide7 currentTab={this.handelParentTabs} />:
       			null
       		}
        </div>

        );
    }
  
}

export default BorrowInvestor;
