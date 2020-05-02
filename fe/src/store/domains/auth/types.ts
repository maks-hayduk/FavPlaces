import { ImmutableObject } from 'seamless-immutable';

export interface ISignUpModel {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface ISignInModel {
  email: string;
  password: string;
}

export interface ISignInResponse {
  id: number;
  token: string;
  name: string;
}

export interface IAuthState extends ImmutableObject<ISignInResponse> {}
