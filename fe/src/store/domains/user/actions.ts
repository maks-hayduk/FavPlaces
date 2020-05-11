import * as api from './api';
import { UserActionTypeKeys, IGetDetailsActionType } from './actionTypes';

export type GetDetailsAction = () => IGetDetailsActionType;

export const getDetailsAction: GetDetailsAction = () => ({
  type: UserActionTypeKeys.GET_DETAILS,
  payload: api.getDetails()
});
