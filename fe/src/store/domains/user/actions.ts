import { IThunk, IPromiseActionResponse } from 'types';

import * as api from './api';
import { UserActionTypeKeys, IGetDetailsActionType, IUpdateUserActionType } from './actionTypes';
import { IUserModel } from './types';

import { errorNotifAction, successNotifAction } from '../notifications';

export type GetDetailsAction = () => IGetDetailsActionType;

export const getDetailsAction: GetDetailsAction = () => ({
  type: UserActionTypeKeys.GET_DETAILS,
  payload: api.getDetails()
});

export type UpdateUserAction = (data: IUserModel) => IUpdateUserActionType;

export const updateUserAction: UpdateUserAction = (data) => ({
  type: UserActionTypeKeys.UPDATE_USER,
  payload: api.updateUser(data)
});

export type HandleUpdateUserAction = (data: IUserModel) => IThunk<void>;

export const handleUpdateUserAction: HandleUpdateUserAction = (data) => async (dispatch) => {
  try {
    const response = 
      await dispatch(updateUserAction(data)) as IPromiseActionResponse<IUserModel & { passwordChanged: boolean }>;

    if (response.value?.passwordChanged) {
      dispatch(successNotifAction({
        title: 'User data & password was updated'
      }));
    } else {
      dispatch(successNotifAction({
        title: 'User data was updated'
      }));
    }
  } catch (e) {
    dispatch(errorNotifAction({
      title: 'User data was not updated',
      message: 'Something went wrong'
    }));
  }
};
