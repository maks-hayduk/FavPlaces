import { ImmutableObject } from 'seamless-immutable';

export interface IUserInitialState {
  id: number;
  name: string;
}

export interface IUserState extends ImmutableObject<IUserInitialState> {}
