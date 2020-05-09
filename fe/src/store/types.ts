import { ConnectedRouter } from 'connected-react-router';
import { Notification } from 'react-notification-system';

import { IPlacesState } from './domains/places';
import { IMenuState } from './domains/ui';
import { IAuthState } from './domains/auth';
import { IUserState } from './domains/user';

export interface IStoreState {
  router: ConnectedRouter;
  notifications: Notification[];
  places: IPlacesState;
  ui: IMenuState;
  auth: IAuthState;
  user: IUserState;
}
