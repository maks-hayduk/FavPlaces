import { apiClientService } from 'services';

export const getTags = () => apiClientService.get('/tags');
