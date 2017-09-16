import React from 'react';
import { Link } from 'react-router'

class Title extends React.Component { 
    componentDidMount() {    
      }          
            
  render() {
        return (
            <section className="section bg-content level-1">
              <div className="container">
                <div className="columns">
                  <div className="column">
                      <h1 className="title">
                          Your plan isn't implemented yet...
                      </h1>
                        <p className="subtitle">
                         You can retire at age 65 with a monthly income of $42,000, and a surplus of $85,000 at age 90. It starts with a plan.
                        </p>
                    </div>
                    <div className="column">
                    </div>
                  </div>
              </div>
            </section>
        );
    }
  
}

export default Title;
