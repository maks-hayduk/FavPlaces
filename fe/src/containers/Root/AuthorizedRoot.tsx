import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { RouteConst } from 'consts';
import { styled } from 'theme';
import { Coords } from 'types';

import Map from '../Map';
import SideBar from '../SideBar';
import { ToggleMenuStatus } from 'store';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;

  position: relative;
  overflow: hidden;
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
  const [mapCenter, setMapCenter] = React.useState<Coords>([24.03354921447226, 49.83588835908614]);

  return (
    <Wrapper>
      <SideBar mapCenter={mapCenter} setMapCenter={setMapCenter}/>
      {isMenuOpen && <OpacityLayout onClick={() => toggleMenuStatus(false)}/>}
      <Switch>
        <Route path={RouteConst.Map} render={() => <Map mapCenter={mapCenter} setMapCenter={setMapCenter}/>}/>
        <Redirect to={RouteConst.Map} />
      </Switch>
    </Wrapper>
  );
};

export default AuthorizedRoot;
