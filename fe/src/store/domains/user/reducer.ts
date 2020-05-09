import Immutable, { ImmutableObject } from 'seamless-immutable';

import { UserActionTypes } from './actionTypes';
import { IUserInitialState } from './types';

import { AuthActionTypeKeys } from '../auth'

const userInitialState: ImmutableObject<IUserInitialState> = Immutable({
  id: 0,
  name: ''
});

const userReducer = (state = userInitialState, action: UserActionTypes) => {
  switch (action.type) {
    case AuthActionTypeKeys.LOGIN_FULFILLED: {
      const { token, ...payload } = action.payload;

      return state.merge(payload);
    }
    default:
      return state;
  }
};

export default userReducer;
