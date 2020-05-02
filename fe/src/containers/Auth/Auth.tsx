import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { RouteConst } from 'consts';

import Login from './Login';
import SignUp from './SignUp';

const Auth: React.FC<{}> = ({  }) => {

  return (
    <Switch>
      <Route path={RouteConst.Login} component={Login}/>
      <Route path={RouteConst.SignUp} component={SignUp}/>
      <Redirect to={RouteConst.Login}/>
    </Switch>
  );
};

export default Auth;
