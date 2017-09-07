import React from 'react';


import Header from './Header';
import Footer from './Footer';
import Main from './Main';

import * as api from '../api';

class App extends React.Component {

  state = {
   
  };



  render() {
    return (
      <div className="App">
       <Header />
       <Main />
       <Footer />
      </div>
    );
  }
}

export default App;
