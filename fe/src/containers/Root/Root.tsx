import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { RouteConst } from 'consts';
import { styled } from 'theme';

import AuthorizedRoot from './AuthorizedRoot';

import AuthContainer from '../Auth';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.color.ironLight};
`;

interface IRoot {
  isMenuOpen: boolean;
}

const Root: React.FC<IRoot> = ({ isMenuOpen }) => {

  return (
    <Wrapper>
      <Switch>
        <Route path={RouteConst.Auth} component={AuthContainer} />
        <Route path={RouteConst.Root} render={() => <AuthorizedRoot isMenuOpen={isMenuOpen}/>} />
      </Switch>
    </Wrapper>
  );
};

export default Root;
