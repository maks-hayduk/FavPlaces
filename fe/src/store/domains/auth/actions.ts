import { push } from 'connected-react-router';

import { IThunk, IPromiseActionResponse } from 'types';
import { apiClientService } from 'services';
import { RouteConst, StorageConst } from 'consts';

import * as api from './api';
import { AuthActionTypeKeys, ISignUpActionType, ILoginActionType, IGetParamTokenFulfilledActionType } from './actionTypes';
import { ISignUpModel, ILoginModel, ILoginResponse } from './types';

import { getDetailsAction } from '../user';
import { successNotifAction, errorNotifAction } from '../notifications';

export type GetParamTokenFulfilledAction = (token: string) => IGetParamTokenFulfilledActionType;

export const getParamTokenFulfilledAction: GetParamTokenFulfilledAction = token => ({
  type: AuthActionTypeKeys.GET_PARAM_TOKEN,
  payload: token
});

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
      apiClientService.setDefaultHeaders('Authorization', `Bearer ${value.token}`);
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

export type HandleTokenLoginAction = () => IThunk<void>;

export const handleTokenLoginAction: HandleTokenLoginAction = () => async (dispatch) => {
  const token = window.localStorage.getItem(StorageConst.AuthToken);

  if (token) {
    apiClientService.setDefaultHeaders('Authorization', `Bearer ${token}`);
    await dispatch(getParamTokenFulfilledAction(token));
    dispatch(getDetailsAction());
  }
};
