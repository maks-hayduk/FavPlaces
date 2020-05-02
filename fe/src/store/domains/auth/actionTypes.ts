import { IPromiseAction } from 'types';

import { ISignInResponse } from './types';

export enum AuthActionTypeKeys {
  SIGN_UP = 'auth/SIGN_UP',
  SIGN_UP_FULFILLED = 'auth/SIGN_UP_FULFILLED',

  SIGN_IN = 'auth/SIGN_IN',
  SIGN_IN_FULFILLED = 'auth/SIGN_IN_FULFILLED',
}

export interface ISignUpActionType 
  extends IPromiseAction<AuthActionTypeKeys.SIGN_UP, Promise<{ success: boolean }>> {}

export interface ISignUpFulfilledActionType 
  extends IPromiseAction<AuthActionTypeKeys.SIGN_UP_FULFILLED, { success: boolean }> {}

export interface ISignInActionType 
  extends IPromiseAction<AuthActionTypeKeys.SIGN_IN, Promise<ISignInResponse>> {}

export interface ISignInFulfilledActionType 
  extends IPromiseAction<AuthActionTypeKeys.SIGN_IN_FULFILLED, ISignInResponse> {}

export type IAuthActionTypes =
  | ISignUpFulfilledActionType
  | ISignInFulfilledActionType;
