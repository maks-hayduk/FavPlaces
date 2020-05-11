import { ImmutableObject } from 'seamless-immutable';

export interface IUserInitialState {
  id: number;
  name: string;
  surname: string;
  email: string;
  role: string;
}

export interface IUserState extends ImmutableObject<IUserInitialState> {}
