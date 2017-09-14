import React from 'react';
import { Link } from 'react-router-dom'

class Tab2 extends React.Component { 
       
        
        
    componentDidMount() {
      
      }          
            
  render() {
	    
        return (
      <div id="tab2" className="tab-content">
		      						<h1 className="title">Update your plan </h1>
	      							<div className="box">
	      								<p>In just a few minutes we’ll make sure that you're on track to hit your ﬁnancial goals now, and in the future. Let us know what's going on and we’ll update your plan to suit.</p>
	      								<p>Before we start, any major updates?</p>
	      								<div className="field">							             
							             <div className="control">
							                <div className="select">
							                  <select>
							                    <option>I got a raise!</option>
							                    <option></option>
							                  </select>
							                </div>
							              </div>
							            </div>
	      								<a href="#" className="add-more">+ Add another mortgage</a>
	      								<div className="col pt-20">
									        <a className="button is-small">Answer update questions</a>
									        
								      	</div>
	      							</div>
	      						</div>
        );
    }
  
}

export default Tab2;
