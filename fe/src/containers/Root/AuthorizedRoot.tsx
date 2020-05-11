import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { RouteConst } from 'consts';
import { styled } from 'theme';

import Map from '../Map';
import SideBar from '../SideBar';
import { ToggleMenuStatus } from 'store';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;

  position: relative;
  overflow: hidden;

  .burger-btn {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 50;
  }
`;

const OpacityLayout = styled.div`
  background-color: black;
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: 75;
  opacity: 0.3;
`;

interface IAuthorizedRoot {
  isMenuOpen: boolean;
  toggleMenuStatus: ToggleMenuStatus;
}

const AuthorizedRoot: React.FC<IAuthorizedRoot> = ({ isMenuOpen, toggleMenuStatus }) => {
  return (
    <Wrapper>
      <SideBar />
      {isMenuOpen && <OpacityLayout onClick={() => toggleMenuStatus(false)}/>}
      <Switch>
        <Route path={RouteConst.Map} component={Map}/>
        <Redirect to={RouteConst.Map} />
      </Switch>
    </Wrapper>
  );
};

export default AuthorizedRoot;
