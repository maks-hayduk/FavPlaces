import { apiClientService } from 'services';

export const getDetails = () => apiClientService.get('/api/user/');
