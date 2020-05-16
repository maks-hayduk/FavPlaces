import { apiClientService } from 'services';

import { IPlaceModel } from './types';

export const addPlace = (data: IPlaceModel) => apiClientService.post('/places', { data });

export const getPlaces = () => apiClientService.get('/places');

export const updatePlace = (placeId: number, data: IPlaceModel) => 
  apiClientService.put(`/places/${placeId}`, { data });

export const deletePlace = (placeId: number) => apiClientService.delete(`/places/${placeId}`);
