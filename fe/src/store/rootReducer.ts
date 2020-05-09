import { History } from 'history';
import { reducer as notifications } from 'react-notification-system-redux';
import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux-seamless-immutable';

import mobileMenuReducer from './domains/ui/reducer';
import placesReducer from './domains/places/reducer';
import authReducer from './domains/auth/reducer';
import userReducer from './domains/user/reducer';

const createRootReducer = (history: History) => combineReducers({
  notifications,
  router: connectRouter(history),
  ui: mobileMenuReducer,
  auth: authReducer,
  user: userReducer,
  places: placesReducer
});

export default createRootReducer;
