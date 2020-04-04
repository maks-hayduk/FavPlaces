import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { RouteConst } from 'consts';
import { styled } from 'theme';

import Map from '../Map';
import Login from '../Login';

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.color.ironLight};
`;

interface IRoot {}

const Root: React.FC<IRoot> = ({  }) => {

  return (
    <Wrapper>
      <Switch>
        <Route path={RouteConst.Map} component={Map}/>
        <Route path={RouteConst.Login} component={Login}/>
        <Redirect to={RouteConst.Login}/>
      </Switch>
    </Wrapper>
  );
};

export default Root;
