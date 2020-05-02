import { ConnectedRouter } from 'connected-react-router';

import { IPlacesState } from './domains/places';
import { IMenuState } from './domains/ui';
import { IAuthState } from './domains/auth';

export interface IStoreState {
  router: ConnectedRouter;
  places: IPlacesState;
  ui: IMenuState;
  auth: IAuthState;
}
