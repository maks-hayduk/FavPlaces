import { IPromiseAction } from 'types';

import { ILoginResponse } from './types';

export enum AuthActionTypeKeys {
  SIGN_UP = 'auth/SIGN_UP',
  SIGN_UP_FULFILLED = 'auth/SIGN_UP_FULFILLED',

  LOGIN = 'auth/LOGIN',
  LOGIN_FULFILLED = 'auth/LOGIN_FULFILLED',

  GET_PARAM_TOKEN = 'auth/GET_PARAM_TOKEN',
}

export interface IGetParamTokenFulfilledActionType extends IPromiseAction<AuthActionTypeKeys.GET_PARAM_TOKEN, string> {}

export interface ISignUpActionType 
  extends IPromiseAction<AuthActionTypeKeys.SIGN_UP, Promise<{ success: boolean }>> {}

export interface ISignUpFulfilledActionType 
  extends IPromiseAction<AuthActionTypeKeys.SIGN_UP_FULFILLED, { success: boolean }> {}

export interface ILoginActionType 
  extends IPromiseAction<AuthActionTypeKeys.LOGIN, Promise<ILoginResponse>> {}

export interface ILoginFulfilledActionType 
  extends IPromiseAction<AuthActionTypeKeys.LOGIN_FULFILLED, ILoginResponse> {}

export type IAuthActionTypes =
  | ISignUpFulfilledActionType
  | ILoginFulfilledActionType
  | IGetParamTokenFulfilledActionType;
