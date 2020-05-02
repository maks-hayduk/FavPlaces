import Immutable, { ImmutableObject } from 'seamless-immutable';

import { AuthActionTypeKeys, IAuthActionTypes } from './actionTypes';
import { ISignInResponse } from './types';

const authInitialState: ImmutableObject<ISignInResponse> = Immutable({
  id: 0,
  token: '',
  name: ''
});

const authReducer = (state = authInitialState, action: IAuthActionTypes) => {
  switch (action.type) {
    case AuthActionTypeKeys.SIGN_IN_FULFILLED:
      return state.merge(action.payload);
    default:
      return state;
  }
};

export default authReducer;
