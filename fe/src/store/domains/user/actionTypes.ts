import { IPromiseAction } from 'types';

import { IUserModel } from './types';

import { ILoginFulfilledActionType, ILogoutActionType } from '../auth/actionTypes';

export enum UserActionTypeKeys {
  GET_DETAILS = 'user/GET_DETAILS',
  GET_DETAILS_FULFILLED = 'user/GET_DETAILS_FULFILLED',

  UPDATE_USER = 'user/UPDATE_USER',
  UPDATE_USER_FULFILLED = 'user/UPDATE_USER_FULFILLED',
}

export interface IGetDetailsActionType 
  extends IPromiseAction<UserActionTypeKeys.GET_DETAILS, Promise<any>> {}

export interface IGetDetailsFulfilledActionType 
  extends IPromiseAction<UserActionTypeKeys.GET_DETAILS_FULFILLED, any> {}

export interface IUpdateUserActionType 
  extends IPromiseAction<UserActionTypeKeys.UPDATE_USER, Promise<IUserModel & { passwordChanged: boolean }>> {}

export interface IUpdateUserFulfilledActionType 
  extends IPromiseAction<UserActionTypeKeys.UPDATE_USER_FULFILLED, IUserModel & { passwordChanged: boolean }> {}

export type UserActionTypes =
  | IGetDetailsFulfilledActionType
  | ILoginFulfilledActionType
  | ILogoutActionType
  | IUpdateUserFulfilledActionType;
