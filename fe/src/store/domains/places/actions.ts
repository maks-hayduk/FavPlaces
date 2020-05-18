import { IThunk } from 'types';

import * as api from './api';
import { 
  PlacesActionTypeKeys, 
  IAddPlaceActionType, 
  IGetPlacesActionType, 
  IUpdatePlaceActionType, 
  IDeletePlaceActionType,
  ISetSelectedActionType,
  ISharePlaceActionType,
  IGetSharedPlacesActionType,
  IDeleteSharedPlaceActionType,
  ISearchPlaceActionType
} from './actionTypes';
import { IPlaceModel } from './types';

import { errorNotifAction, successNotifAction } from '../notifications';

export type AddPlaceAction = (data: IPlaceModel) => IAddPlaceActionType;

export const addPlaceAction: AddPlaceAction = (data) => ({
  type: PlacesActionTypeKeys.ADD_PLACE,
  payload: api.addPlace(data)
});

export type GetPlacesAction = () => IGetPlacesActionType;

export const getPlacesAction: GetPlacesAction = () => ({
  type: PlacesActionTypeKeys.GET_PLACES,
  payload: api.getPlaces()
});

export type UpdatePlaceAction = (placeId: number, data: IPlaceModel) => IUpdatePlaceActionType;

export const updatePlaceAction: UpdatePlaceAction = (placeId, data) => ({
  type: PlacesActionTypeKeys.UPDATE_PLACE,
  payload: api.updatePlace(placeId, data)
});

export type DeletePlaceAction = (placeId: number) => IDeletePlaceActionType;

export const deletePlaceAction: DeletePlaceAction = (placeId) => ({
  type: PlacesActionTypeKeys.DELETE_PLACE,
  payload: api.deletePlace(placeId),
  meta: placeId
});

export type HandleAddPlaceAction = (data: IPlaceModel) => IThunk<void>;

export const handleAddPlaceAction: HandleAddPlaceAction = (data) => async (dispatch) => {
  try {
    await dispatch(addPlaceAction(data));
    dispatch(successNotifAction({
      title: 'Place was successfully added to favorites'
    }));
  } catch (e) {
    dispatch(errorNotifAction({
      title: 'Place was not added to favorites',
      message: 'Something went wrong'
    }));
  }
};

export type HandleDeletePlaceAction = (placeId: number) => IThunk<void>;

export const handleDeletePlaceAction: HandleDeletePlaceAction = (placeId) => async (dispatch) => {
  try {
    await dispatch(deletePlaceAction(placeId));
    dispatch(successNotifAction({
      title: 'Place was successfully deleted'
    }));
  } catch (e) {
    dispatch(errorNotifAction({
      title: 'Place was not deleted',
      message: 'Something went wrong'
    }));
  }
};

export type HandleUpdatePlaceAction = (placeId: number, data: IPlaceModel) => IThunk<void>;

export const handleUpdatePlaceAction: HandleUpdatePlaceAction = (placeId, data) => async (dispatch) => {
  try {
    await dispatch(updatePlaceAction(placeId, data));
    dispatch(successNotifAction({
      title: 'Place was successfully updated'
    }));
  } catch (e) {
    dispatch(errorNotifAction({
      title: 'Place was not updated',
      message: 'Something went wrong'
    }));
  }
};

export type SelectPlaceIdAction = (id: number) => ISetSelectedActionType;

export const selectPlaceIdAction: SelectPlaceIdAction = (id) => ({
  type: PlacesActionTypeKeys.SET_SELECTED_PLACE_ID,
  value: id
});

export type SharePlaceAction = (placeId: number, email: string) => ISharePlaceActionType;

export const sharePlaceAction: SharePlaceAction = (placeId, email) => ({
  type: PlacesActionTypeKeys.SHARE_PLACE,
  payload: api.sharePlace(placeId, email)
});

export type HandleSharePlaceAction = (placeId: number, email: string) => IThunk<void>;

export const handleSharePlaceAction: HandleSharePlaceAction = (placeId, email) => async (dispatch) => {
  try {
    await dispatch(sharePlaceAction(placeId, email));
    dispatch(successNotifAction({
      title: 'Place was successfully shared'
    }));
  } catch (e) {
    dispatch(errorNotifAction({
      title: 'Place was not shared',
      message: 'Something went wrong'
    }));
  }
};

export type GetSharedPlacesAction = () => IGetSharedPlacesActionType;

export const getSharedPlacesAction: GetSharedPlacesAction = () => ({
  type: PlacesActionTypeKeys.GET_SHARED_PLACES,
  payload: api.getSharedPlaces()
});

export type DeleteSharedPlaceAction = (placeId: number) => IDeleteSharedPlaceActionType;

export const deleteSharedPlaceAction: DeleteSharedPlaceAction = (placeId) => ({
  type: PlacesActionTypeKeys.DELETE_SHARED_PLACE,
  payload: api.deleteSharedPlace(placeId),
  meta: placeId
});

export type HandleDeleteSharedPlaceAction = (placeId: number) => IThunk<void>;

export const handleDeleteSharedPlaceAction: HandleDeleteSharedPlaceAction = (placeId) => async (dispatch) => {
  try {
    await dispatch(deleteSharedPlaceAction(placeId));
    dispatch(successNotifAction({
      title: 'Shared place was successfully deleted'
    }));
  } catch (e) {
    dispatch(errorNotifAction({
      title: 'Shared place was not deleted',
      message: 'Something went wrong'
    }));
  }
};

export type SearchPlaceAction = (placeName: string) => ISearchPlaceActionType;

export const searchPlaceAction: SearchPlaceAction = (placeName) => ({
  type: PlacesActionTypeKeys.SEARCH_PLACE,
  payload: api.searchPlace(placeName)
});
