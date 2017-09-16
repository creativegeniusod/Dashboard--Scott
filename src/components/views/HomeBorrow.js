import React from 'react';
import { Link } from 'react-router'
import Bslide from './borrow/bslide.js';
import Bslide2 from './borrow/bslide2.js';
import Bslide3 from './borrow/bslide3.js';
import Bslide4 from './borrow/bslide4.js';
import Bslide5 from './borrow/bslide5.js';
import Bslide6 from './borrow/bslide6.js';
import Bslide7 from './borrow/bslide7.js';
import Bslide8 from './borrow/bslide8.js';
import Bslide9 from './borrow/bslide9.js';
import Bslide10 from './borrow/bslide10.js';
import BorrowInvestor from './borrow-investor';
import BorrowProtector from './borrow-protection';
import Title from './common/title.js';

class HomeBorrow extends React.Component {
	constructor(props) {
		super(props);
		this.handelParentTabs = this.handelParentTabs.bind(this);
		this.state = {
       	 	tab: 1,
       	};
    }

    handelParentTabs()
    {
    	this.setState({tab:this.state.tab+1})
    }
  render() {
  		const {tab}=this.state;
        return (
      <div className="main-content">
        <Title />
        <section className="section level-2">
          <div className="container">
            <div className="content">
              <div className="columns is-variable bd-klmn-columns is-3">
                  <BorrowInvestor />
                  <BorrowProtector />
                  <div className="column custom-col-3">
                          <div className="box no-padding detialed-box">
                              {
                              	tab==1?
                              	<Bslide currentState={this.handelParentTabs} />:
                              	tab==2?
                              	<Bslide2 currentState={this.handelParentTabs}/>:
                              	tab==3?
                              	<Bslide3 currentState={this.handelParentTabs}/>:
                              	tab==4?
                              	<Bslide4 currentState={this.handelParentTabs}/>:
                              	tab==5?
                              	<Bslide5 currentState={this.handelParentTabs}/>:
                              	tab==6?
                              	<Bslide6 currentState={this.handelParentTabs} currentTab={this.state.tab} />:
                              	tab==7?
                              	<Bslide6 currentState={this.handelParentTabs}  currentTab={this.state.tab} />:
                                tab==8?
                                <Bslide7 currentState={this.handelParentTabs}  currentTab={this.state.tab} />:
                                tab==9?
                                <Bslide8 currentState={this.handelParentTabs}  currentTab={this.state.tab} />:
                                tab==10?
                                <Bslide9 currentState={this.handelParentTabs}  currentTab={this.state.tab} />:
                                tab==11?
                                <Bslide10 currentState={this.handelParentTabs}  currentTab={this.state.tab} />:
                              	null
                              }
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

export default HomeBorrow;
