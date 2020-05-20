import { apiClientService } from 'services';

import { IUserModel } from './types';

export const getDetails = () => apiClientService.get('/user');

export const updateUser = (data: IUserModel) => apiClientService.put('/user', { data });
