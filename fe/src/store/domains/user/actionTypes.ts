import { IPromiseAction } from 'types';

import { ILoginFulfilledActionType } from '../auth/actionTypes';

export enum UserActionTypeKeys {
  GET_DETAILS = 'user/GET_DETAILS',
  GET_DETAILS_FULFILLED = 'user/GET_DETAILS_FULFILLED'
}

export interface IGetDetailsActionType 
  extends IPromiseAction<UserActionTypeKeys.GET_DETAILS, Promise<any>> {}

export interface IGetDetailsFulfilledActionType 
  extends IPromiseAction<UserActionTypeKeys.GET_DETAILS_FULFILLED, any> {}

export type UserActionTypes =
  | IGetDetailsFulfilledActionType
  | ILoginFulfilledActionType;
