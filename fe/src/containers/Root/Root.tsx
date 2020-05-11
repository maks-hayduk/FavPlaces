import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Notification } from 'react-notification-system';

import { Notifications } from 'components';
import { RouteConst } from 'consts';
import { styled } from 'theme';
import { HandleTokenLoginAction, IUserDataSelect, ToggleMenuStatus } from 'store';

import AuthorizedRoot from './AuthorizedRoot';

import AuthContainer from '../Auth';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.color.ironLight};
`;

interface IRoot {
  isMenuOpen: boolean;
  notifications: Notification[];
  handleTokenLoginAction: HandleTokenLoginAction;
  userData: IUserDataSelect;
  toggleMenuStatus: ToggleMenuStatus;
}

const Root: React.FC<IRoot> = ({ isMenuOpen, notifications, handleTokenLoginAction, userData, toggleMenuStatus }) => {

  React.useEffect(() => {
    handleTokenLoginAction();
  }, []);

  return (
    <Wrapper>
      <Notifications notifications={notifications} />
      <Switch>
        <Route path={RouteConst.Auth} component={AuthContainer} />
        <Route path={RouteConst.Root} render={() => (
          userData?.id ? (
            <AuthorizedRoot 
              isMenuOpen={isMenuOpen}
              toggleMenuStatus={toggleMenuStatus}
            />
          ) : null
          )} 
        />
      </Switch>
    </Wrapper>
  );
};

export default Root;
