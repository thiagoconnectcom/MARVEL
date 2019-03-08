import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Marvel from './pages/Marvel';

import Reset from './assets/styles/Reset';
import Base from './assets/styles/Base';
import Colors from './assets/styles/Colors';
import Fonts from './assets/styles/Fonts';

const App = () => (
  <Fragment>
    <Reset />
    <Colors />
    <Fonts />
    <Base />
    <Header />

    <Router>
      <Fragment>
        <Route exact path="/" component={Marvel} />
      </Fragment>
    </Router>

    <Footer />
  </Fragment>
);

export default App;
