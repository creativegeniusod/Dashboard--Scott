import React from 'react';
import { Link } from 'react-router'
import { Modal, Button } from 'antd';

class Bslide6 extends React.Component { 
     constructor(props) {
      super(props);
      this.showModal= this.showModal.bind(this);
      this.handleOk= this.handleOk.bind(this);
      this.state = {
            visible: false,
          };
      }
      showModal(){
        this.setState({
          visible: true,
        });
      }
      handleOk(){
        this.setState({
          visible: false,
        });
      }
  
        
    componentDidMount() {
      
      }          
            
  render() {
	       const {visible}=this.state;
        return (
			       <div className="swiper-container">
                  <div className="message is-warning">
                      <div className="message-header"></div>
                    <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                        <a href="#" className="swiper-pagination-bullet"></a>
                        <a href="#" className="swiper-pagination-bullet"></a>
                        <a href="#" className="swiper-pagination-bullet"></a>
                        <a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
                    </div>
                  </div>
                  <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <article className="message">
                            <div className="box">
                              <p className="warning-title">Borrow wisely</p>
                            <h4>Your mortgage application is ready  to completed, and we'll need a few documents from you as well</h4>
                             <p> Filling out your application should only take 10-15 minutes, and we'll need [this document] [that document], and [this document]. Be sure to get them raedy before start your application.</p>
                            </div>
                        </article>
                      </div>

                      <div className="col btn-sec pt-0">
                            {
                              this.props.currentTab==6?
                               <a className="button is-warning" onClick={this.props.currentState} >
                                 <span>Fill application</span> 
                               </a>:
                               null
                            }
                         
                          <a className="button is-warning" onClick={this.showModal} >
                            <span>Upload documents</span> 
                          </a>
                           {
                              this.props.currentTab==7?
                               <span className="app-done">Application done <i className="fa fa-check green-btn"></i></span>:
                               null
                            }
                      </div>
                  </div>
                  {
                    visible===true?
                    <div id="modal" className="modal is-active opened">
                    <div className="modal-background"></div> 
                        <div className="modal-content">
                          <div className="btn-wrap">
                            <button className="modal-close is-large" aria-label="close" onClick={this.handleOk}></button>
                          </div>  
                          <div className="box">
                            <h2>Upload mortgage documents</h2>
                            <p>To complete a mortgage application, there are certain documents that are necessary. We'll onlu ask for essentials when it comes to your information. Our accepted documents formats: .pdf, .tiff</p>
                            <p><b>Please upload the following:</b></p>
                            <div className="up-doc-row columns no-margin">
                                <div className="column black">Your last T4 statement</div>
                                <div className="column text-right warning-color">Choose document</div>
                            </div>
                            <div className="up-doc-row columns no-margin">
                                <div className="column black-color">Personal credit statement</div>
                                <div className="column text-right warning-color">Choose document</div>
                            </div>
                            <div className="col pt-20">
                              <a className="button is-warning white" data-target="#modal">Submit details</a>
                              <a href="#" className="button inverse-btn">Nevermind</a>
                            </div>
                          </div>
                      </div>
                  </div>:
                    null
                  }
              </div>
               
			    );
    }
  
}
export default Bslide6;
