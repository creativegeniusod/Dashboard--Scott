import React from 'react';
import { Link } from 'react-router'

class PolicySidebar extends React.Component {
  render() {
  			const tab =this.props.currenttabstat;
        	return (
      			<div className="box tabs vertical-align is-danger">  
                  <ul>

                      <li><Link className={ tab=='documents'? "active":"" } to="policy-document" onClick={this.props.tabhandle.bind("data","documents")} rel="tab1">My insurance documents<i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                      </li>

                      <li><a className={ tab=='faq'? "active":"" } href="javascript:void(0)" onClick={this.props.tabhandle.bind("data","faq")} rel="tab2">FAQs <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                      </li>
                      <li><Link className={ tab=='claim'? "active":"" } to='/policy-claim' onClick={this.props.tabhandle.bind("data","claim")}  rel="tab2">How to make a claim <i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                      </li>
                  </ul>
                  
              </div>

        );
    }
  
}

export default PolicySidebar;
