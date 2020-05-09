import { ImmutableObject } from 'seamless-immutable';

export interface ISignUpModel {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface ILoginModel {
  email: string;
  password: string;
}

export interface ILoginResponse {
  id: number;
  token: string;
  name: string;
}

export interface IAuthInitialState {
  token: string;
}

export interface IAuthState extends ImmutableObject<IAuthInitialState> {}
