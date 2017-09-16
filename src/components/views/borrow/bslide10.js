import React from 'react';
import { Link } from 'react-router'

class Bslide10 extends React.Component { 
       
        
        
    componentDidMount() {
      
      }          
            
  render() {
	    
        return (
			       <div className="swiper-container">
                      <div className="message is-warning">
                          <div className="message-header"></div>
                        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets no-margin">
                            <i className="fa fa-check green-btn pull-right complete"></i>
                        </div>
                      </div>
                      <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <article className="message">
                                <div className="box">
                                  <p className="warning-title">Borrow wisely</p>
                                <h4>Congratulations, Chris, you're officially a home owner!</h4>
                                 <p>You're setup with the best possible mortgage to meet your needs now and in the future.</p>
                                </div>
                            </article>
                          </div>
                          <div className="col btn-sec pt-0">
                              <Link className="button is-warning" to='/mortgage'><span>See your mortgage</span> </Link>
                          </div>
                      </div>
                  </div>
			    );
    }
  
}

export default Bslide10;
