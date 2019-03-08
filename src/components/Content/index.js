import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from '../../components/Menu';

import Main from './styles';
import Destaques from '../../pages/Destaques';
import Brasil from '../../pages/Brasil';
import Eua from '../../pages/Eua';
import Argentina from '../../pages/Argentina';
import Franca from '../../pages/Franca';

const Content = () => (
  <Fragment>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Destaques} />
        <Route path="/Brasil" component={Brasil} />
        <Route path="/Eua" component={Eua} />
        <Route path="/Argentina" component={Argentina} />
        <Route path="/Franca" component={Franca} />
      </Switch>
    </BrowserRouter>
  </Fragment>
);
export default Content;
