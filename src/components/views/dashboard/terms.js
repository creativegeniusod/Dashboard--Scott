import React from 'react';
import { Link } from 'react-router'

class Terms extends React.Component {
	constructor(props) {
    super(props);
    }
  render() {
  		console.log(this.props.currentState,"sdsd");
        	return (
      			<div id="modal" className="modal is-active opened">
					  <div className="modal-background"></div> 
					  <div className="modal-content">
					    <div className="btn-wrap">
					      <button className="modal-close is-large" aria-label="close" onClick={this.props.currentState}></button>
					    </div>  
					    <div className="box no-padding">
					      <div className="p-30">
					        <h2 className="no-margin">Referral rewards terms and conditions</h2>
					       	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>	
					       	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
					       	<div className="col pt-20 align-center"><a className="button modal-button" onClick={this.props.currentState} data-target="#modal">Got it</a></div>
					      </div>  

					    </div>

					</div>
				</div>
			);
    }
  
}

export default Terms;
