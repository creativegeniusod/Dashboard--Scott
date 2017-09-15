import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/views/Home';
import Account from './components/views/account';
import HomeNew from './components/views/HomeNew';
import HomeBorrow from './components/views/HomeBorrow';
import Borrow from './components/views/Borrow';



export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomeBorrow} />
    <Route path='account' component={Account}/>
     <Route path='homeNew' component={HomeNew}/>
     <Route path='borrow' component={Borrow}/>
    <Route path='*' component={Home} />
  </Route>
);
