import * as api from './api';
import { UserActionTypeKeys, IGetDetailsActionType } from './actionTypes';

export type GetDetailsAction = (id: number) => IGetDetailsActionType;

export const getDetailsAction: GetDetailsAction = () => ({
  type: UserActionTypeKeys.GET_DETAILS,
  payload: api.getDetails()
});
