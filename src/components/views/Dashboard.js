import React from 'react';
import { Link } from 'react-router'
import Investor from './dashboard/dashbaord-investor.js';
import Protector from './dashboard/dashboard-protection.js';
import Borrow from './dashboard/dashboard-borrow.js';
import DashboardTitle from './common/dashboard-title.js';

class Dashboard extends React.Component {
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
        <DashboardTitle />
        <section className="section level-2">
          <div className="container">
            <div className="content">
              <div className="columns is-variable bd-klmn-columns is-3">
                  <Investor />
                  <Protector />
                  <Borrow />
              </div>
            </div>
          </div>
      </section>
      </div>
        );
    }
  
}

export default Dashboard;
