// @flow
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'typeface-roboto';
import '@mdi/font/css/materialdesignicons.min.css';

import Main from './Main';

function App() {
  return (
    <Router>
      <Route component={Main} />
    </Router>
  );
}

export default App;
