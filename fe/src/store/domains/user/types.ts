import { ImmutableObject } from 'seamless-immutable';

export interface IUserModel {
  id: number;
  name: string;
  surname: string;
  email: string;
  role: string;
}

export interface IUserInitialState extends IUserModel {}

export interface IUserState extends ImmutableObject<IUserInitialState> {}
