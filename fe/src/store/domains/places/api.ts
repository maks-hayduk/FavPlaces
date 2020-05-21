import config from 'config';
import { apiClientService, mapApiService } from 'services';
import { IFileInfo } from 'types';

import { IPlaceModel } from './types';

export const addPlace = (data: IPlaceModel) => apiClientService.post('/places', { data });

export const getPlaces = () => apiClientService.get('/places');

export const updatePlace = (placeId: number, data: IPlaceModel) => 
  apiClientService.put(`/places/${placeId}`, { data });

export const deletePlace = (placeId: number) => apiClientService.delete(`/places/${placeId}`);

export const sharePlace = (placeId: number, email: string) => 
  apiClientService.post(`/shared-places/${placeId}`, { data: { email } });

export const getSharedPlaces = () => apiClientService.get('/shared-places');

export const deleteSharedPlace = (placeId: number) => apiClientService.delete(`/shared-places/${placeId}`);

export const searchPlace = (placeName: string) =>
  mapApiService.get(`/geocoding/v5/mapbox.places/${encodeURI(placeName)}.json?access_token=${config.mapBoxKey}&cachebuster=1589830226430&autocomplete=true`);

export const uploadImages = (files: IFileInfo[], placeId: number) => 
  apiClientService.post(`/places/${placeId}/images`, { data: files });

export const deleteImage = (placeId: number, imageId: number) => apiClientService.delete(`/places/${placeId}/images/${imageId}`);
