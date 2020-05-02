import * as api from './api';
import { AuthActionTypeKeys, ISignUpActionType, ISignInActionType } from './actionTypes';
import { ISignUpModel, ISignInModel } from './types';

export type SignUpAction = (data: ISignUpModel) => ISignUpActionType;

export const signUpAction: SignUpAction = (data) => ({
  type: AuthActionTypeKeys.SIGN_UP,
  payload: api.signUp(data)
});

export type SignInAction = (data: ISignInModel) => ISignInActionType;

export const signInAction: SignInAction = (data) => ({
  type: AuthActionTypeKeys.SIGN_IN,
  payload: api.signIn(data)
});
