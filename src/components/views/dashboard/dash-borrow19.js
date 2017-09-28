import React from 'react';
import { Link } from 'react-router'
import BorrowTitle from './borrow-title.js';

class DashboardBorrow7 extends React.Component {
  render() {
        return (
               <div className="box no-padding message-col dashboard detialed-box"> 
                  <article className="message no-margin">
                  <div className="message-header no-padding">
                    <div className="full-width">                    
                        <BorrowTitle />
                        <div className="col">
                          <div className="is-warning swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                              <span className="completed-message">Compeleted <i className="fa fa-check green-btn step7"></i> </span>
                          </div>
                         <p className="no-margin is-warning critical-text">Home mortgage <i class="fa fa-question question-mark"></i></p>
                          <h4 className="no-margin">Congratulations, Chris, you're officially a home owner!</h4>
                         </div>
                    </div>
                  </div>
              </article>
                <div className="col btn-sec pt-10 pb-10">
                      <Link className="button is-warning" to="/mortgage" >See your mortgage</Link>
                  </div>
              </div>
        );
    }
  
}

export default DashboardBorrow7;
