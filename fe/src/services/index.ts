import config from 'config';

import ApiClient from './apiClient';

export const apiClientService = new ApiClient(config.apiUrl);
