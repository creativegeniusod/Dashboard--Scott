import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/views/Home';
import Account from './components/views/account';
import HomeNew from './components/views/HomeNew';
import HomeBorrow from './components/views/HomeBorrow';
import Borrow from './components/views/Borrow';
import Mortgage from './components/views/borrow/mortgage.js';
import MortgageInfo from './components/views/borrow/mortgage-info.js';
import MortgageDocuments from './components/views/borrow/mortgage-documents.js';
import InvestmentAccount from './components/views/investor/investment-account.js';
import Dashboard from './components/views/Dashboard.js';
import ReferFriend from './components/views/dashboard/refer-friend.js';
import PolicyView from './components/views/dashboard/policy-view.js';
import PolicyDetail from './components/views/dashboard/policy-detail.js';
import PolicyDocuments from './components/views/dashboard/policy-document.js';
import PolicyClaim from './components/views/dashboard/policy-claim.js';



export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomeBorrow} />
    <Route path='account' component={Account}/>
     <Route path='homeNew' component={HomeNew}/>
     <Route path='borrow' component={Borrow}/>
     <Route path='mortgage' component={Mortgage}/>
     <Route path='mortgage-info' component={MortgageInfo}/>
     <Route path='mortgage-documents' component={MortgageDocuments}/>
     <Route path='investment-account' component={InvestmentAccount}/>
     <Route path='refer-friend' component={ReferFriend} />
     <Route path='dashboard' component={Dashboard}/>
     <Route path='policy-view' component={PolicyView}/>
     <Route path='policy-detail' component={PolicyDetail}/>
     <Route path='policy-document' component={PolicyDocuments}/>
     <Route path='policy-claim' component={PolicyClaim}/>
    <Route path='*' component={Home} />
   
  </Route>
);
