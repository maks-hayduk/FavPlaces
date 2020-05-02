import { History } from 'history';

import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux-seamless-immutable';

import mobileMenuReducer from './domains/ui/reducer';
import placesReducer from './domains/places/reducer';
import authReducer from './domains/auth/reducer';

const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  ui: mobileMenuReducer,
  auth: authReducer,
  places: placesReducer
});

export default createRootReducer;
