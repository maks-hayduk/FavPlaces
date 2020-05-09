import { apiClientService } from 'services';

import { ISignUpModel, ILoginModel } from './types';

export const signUp = (data: ISignUpModel) => apiClientService.post('/signup', { data });

export const login = (data: ILoginModel) => apiClientService.post('/signin', { data });
