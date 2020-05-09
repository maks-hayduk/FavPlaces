import { push } from 'connected-react-router';

import { IThunk, IPromiseActionResponse } from 'types';
import { apiClientService } from 'services';
import { RouteConst, StorageConst } from 'consts';

import * as api from './api';
import { AuthActionTypeKeys, ISignUpActionType, ILoginActionType } from './actionTypes';
import { ISignUpModel, ILoginModel, ILoginResponse } from './types';
import { successNotifAction, errorNotifAction } from '../notifications';

export type SignUpAction = (data: ISignUpModel) => ISignUpActionType;

export const signUpAction: SignUpAction = (data) => ({
  type: AuthActionTypeKeys.SIGN_UP,
  payload: api.signUp(data)
});

export type LoginAction = (data: ILoginModel) => ILoginActionType;

export const loginAction: LoginAction = (data) => ({
  type: AuthActionTypeKeys.LOGIN,
  payload: api.login(data)
});

export type HandleLoginAction = (data: ILoginModel) => IThunk<void>;

export const handleLoginAction: HandleLoginAction = (data) => async (dispatch, getState) => {
  try {
    const { value } = await dispatch(loginAction(data)) as IPromiseActionResponse<ILoginResponse>;

    if (value?.token) {
      window.localStorage.setItem(StorageConst.AuthToken, value.token);
      apiClientService.setDefaultHeaders('Authorization', `Basic ${value.token}`);
    }

    dispatch(successNotifAction({
      title: 'You have been successfully logged in'
    }));

    dispatch(push(RouteConst.Map));
  } catch (e) {
    dispatch(errorNotifAction({
      title: 'Something went wrong'
    }));
  }
};
