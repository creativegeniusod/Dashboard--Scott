import React from 'react';
import { Link } from 'react-router-dom'

class Model extends React.Component { 
         constructor(props) {
    }
        
    componentDidMount() {
      
      }          
            
  render() {
	    console.log(this.props.show);
        return (
    <div id="modal-1" className="modal">
  <div className="modal-background"></div> 
  <div className="modal-content ">
    <div className="btn-wrap">
      <button className="modal-close is-large" aria-label="close"></button>
    </div>  
    <div className="box">
      <h2>Notiﬁcation settings</h2>      
		<div className="field">
	        <div className="control">
	          <label className="checkbox">
				  <input type="checkbox">
				   Recieve emails regarding account notiﬁcations
				</label>
	        </div>
	    </div>
	    <div className="field">
	        <div className="control">
	          <label className="checkbox">
				  <input type="checkbox">
				   Recieve update request emails
				</label>
	        </div>
	    </div>
	    <div className="field">
	        <div className="control">
	          <label className="checkbox">
				  <input type="checkbox">
				   Recieve our weekly Planswell newsletter
				</label>
	        </div>
	    </div>
       
      <div className="col pt-20">
        <a href="#" className="button is-primary" disabled="">Save settings</a><a href="#" className="button inverse-btn">Nevermind</a>
      </div>    
    </div>
  </div>
</div>	
        );
    }
  
}

Model.defaultProps = {
    show: false,
};

export default Model;
