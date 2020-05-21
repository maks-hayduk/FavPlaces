import Immutable, { ImmutableObject } from 'seamless-immutable';

import { UserActionTypes, UserActionTypeKeys } from './actionTypes';
import { IUserInitialState } from './types';

import { AuthActionTypeKeys } from '../auth';

const userInitialState: ImmutableObject<IUserInitialState> = Immutable({
  id: 0,
  name: '',
  surname: '',
  email: '',
  role: ''
});

const userReducer = (state = userInitialState, action: UserActionTypes) => {
  switch (action.type) {
    case AuthActionTypeKeys.LOGIN_FULFILLED: {
      const { token, ...payload } = action.payload;

      return state.merge(payload);
    }

    case UserActionTypeKeys.GET_DETAILS_FULFILLED:
      return state.merge(action.payload);

    case UserActionTypeKeys.UPDATE_USER_FULFILLED: 
      return state.merge(action.payload);

    case AuthActionTypeKeys.LOG_OUT: 
      return userInitialState;

    default:
      return state;
  }
};

export default userReducer;
