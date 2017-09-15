import React from 'react';
import ReactDom from 'react-dom';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

require('./stylesheets/bulma-docs.scss');
require('./stylesheets/style.scss');
require('./stylesheets/index-2.scss');


ReactDom.render(
  <Router history={browserHistory} routes={routes} />,
  document.querySelector('#app')
);
