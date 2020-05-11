import Immutable, { ImmutableObject } from 'seamless-immutable';

import { AuthActionTypeKeys, IAuthActionTypes } from './actionTypes';
import { IAuthInitialState } from './types';

const authInitialState: ImmutableObject<IAuthInitialState> = Immutable({
  token: ''
});

const authReducer = (state = authInitialState, action: IAuthActionTypes) => {
  switch (action.type) {
    case AuthActionTypeKeys.LOGIN_FULFILLED: {
      const { token } = action.payload;

      return state.set('token', token);
    }

    case AuthActionTypeKeys.GET_PARAM_TOKEN:
      return state.set('token', action.payload);

    default:
      return state;
  }
};

export default authReducer;
