import { apiClientService } from 'services';

import { ISignUpModel, ISignInModel } from './types';

export const signUp = (data: ISignUpModel) => apiClientService.post('/api/signup', { data });

export const signIn = (data: ISignInModel) => apiClientService.post('/api/signin', { data });
