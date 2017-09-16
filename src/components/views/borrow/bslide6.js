import React from 'react';
import { Link } from 'react-router'
import { Modal, Button } from 'antd';

class Bslide6 extends React.Component { 
     constructor(props) {
      super(props);
      this.handelPopup = this.handelPopup.bind(this)
      this.state = {
            visible: 0,
            slide:0
          };
      }
      handelPopup()
      {
        this.setState({
          visible: 1,
          slide:1
        });
      }
    componentDidMount() {
      
      }          
            
  render() {
         const {visible}=this.state;
	       const {slide}=this.state;
         console.log(visible);
        return (
			       <div className="swiper-container">
                  <div className="message is-warning">
                      <div className="message-header"></div>
                    <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                        <a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
                        <a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
                        <a href="#" className="swiper-pagination-bullet swiper-pagination-bullet-active"></a>
                        <a href="#" className="swiper-pagination-bullet bold"></a>
                        <a href="#" className="swiper-pagination-bullet"></a>
                        <a href="#" className="swiper-pagination-bullet"></a>
                        <a href="#" className="swiper-pagination-bullet"></a>
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
                            {
                              this.props.currentTab==6?
                              <a className="button is-warning" >
                                <span>Upload documents</span> 
                              </a>:
                               <a className="button is-warning" onClick={this.handelPopup} >
                                <span>Upload documents</span> 
                              </a>
                            }
                           {
                              this.props.currentTab==7?
                               <span className="app-done">Application done <i className="fa fa-check green-btn"></i></span>:
                               null
                            }
                      </div>
                  </div>
                  {
                    visible==1?
                    <div id="modal" className="modal is-active opened">
                    <div className="modal-background"></div> 
                        <div className="modal-content">
                          <div className="btn-wrap">
                            <button className="modal-close is-large" aria-label="close" onClick={e => this.setState({ visible:0})}></button>
                          </div>  
                          <div className="box no-padding">
                            <div className="p-20">
                              <h2>Upload mortgage documents</h2>
                              <p>To complete a mortgage application, there are certain documents that are necessary. We'll onlu ask for essentials when it comes to your information. Our accepted documents formats: .pdf, .tiff</p>
                              <p><b>Please upload the following:</b></p>
                            </div>  
                              <div className="up-doc-row columns no-margin">
                                  <div className="column  black-color">Your last T4 statement</div>
                              {
                              slide==1?
                               <a className="column text-right warning-color" onClick={e => this.setState({ slide:2})}>Choose document</a>:
                               slide==2?
                               <label className="column text-right warning-color">cbaldesarra-t4.pdf</label>:
                               slide==3?
                               <label className="column text-right warning-color">cbaldesarra-t4.pdf</label>:null
                             }
                                   
                                   
                              </div>
                            <div className="up-doc-row columns no-margin">
                                {
                                slide==2?
                                 <label className="error">Whoops! This format isn't accepted. Please select either a .pdf or a .tiff</label>:null
                               }
                                <div className="column black-color">Personal credit statement</div>
                                {
                                  slide==1?
                                  <a className="column text-right warning-color" onClick={e => this.setState({ slide:2})}>Choose document</a>:
                                   slide==2?
                                   <a className="column text-right warning-color" onClick={e => this.setState({ slide:3})}>Choose document</a>:
                                   slide==3?
                                    <label className="column text-right warning-color" onClick={e => this.setState({ slide:3})}>cbaldesarra-credit-statement.pdf</label>:null
                                 }
                            </div>
                            <div className="col p-20">
                                {
                                    slide==1 || slide==2?
                                    <a className="button is-warning white disabled" data-target="#modal">Upload documents</a>:                                   
                                    slide==3?
                                    <a className="button is-warning " data-target="#modal" onClick={e=>this.setState({visible:2})}>Upload documents</a>:null
                                 }
                              
                              <a href="#" className="button inverse-btn" onClick={e => this.setState({ visible:0})}>Nevermind</a>
                            </div>
                          </div>
                      </div>
                  </div>:
                  visible==2?
                  <div id="modal-3" className="modal is-active opened">
                  <div className="modal-background"></div> 
                  <div className="modal-content ">
                    <div className="btn-wrap">
                      <button className="modal-close is-large" aria-label="close" onClick={e => this.setState({ visible:0})}></button>
                    </div>  
                    <div className="box bg-img align-center">
                      <h2 className="align-center">Awesome! We've received your documents</h2>  
                      <p className="align-center">You are all set document wise. Now, as long as you've filled out your application, your mortgage application should be fully completed and ready to ne submitted to a vendor.</p>
                        <a href="#" className="button modal-button" data-target="#modal-3" onClick={this.props.currentState}>Back to mortgage</a>
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
