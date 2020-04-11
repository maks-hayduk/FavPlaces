import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { RouteConst } from 'consts';
import { styled } from 'theme';

import Map from '../Map';
import SideBar from '../SideBar';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;

  position: relative;
  overflow: hidden;
`;

interface IAuthorizedRoot {}

const AuthorizedRoot: React.FC<IAuthorizedRoot> = ({  }) => {

  return (
    <Wrapper>
      <SideBar />
      <Switch>
        <Route path={RouteConst.Map} component={Map}/>
        <Redirect to={RouteConst.Map} />
      </Switch>
    </Wrapper>
  );
};

export default AuthorizedRoot;
