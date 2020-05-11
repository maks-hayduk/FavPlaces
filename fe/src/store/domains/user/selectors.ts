import { createSelector } from 'reselect';

import { IStoreState } from 'store';

import { IUserInitialState } from './types';

const selectUser = (state: IStoreState) => state.user;

export interface IUserDataSelect extends IUserInitialState {}

export const selectUserData = createSelector(
  selectUser, 
  (user): IUserDataSelect => user
);
