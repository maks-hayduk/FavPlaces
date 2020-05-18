import { IPromiseAction } from 'types';

import { IPlaceModel, ISearchPlaceResponse } from './types';

export enum PlacesActionTypeKeys {
  ADD_PLACE = 'places/ADD_PLACE',
  ADD_PLACE_FULFILLED = 'places/ADD_PLACE_FULFILLED',

  GET_PLACES = 'places/GET_PLACES',
  GET_PLACES_FULFILLED = 'places/GET_PLACES_FULFILLED',

  UPDATE_PLACE = 'places/UPDATE_PLACE',
  UPDATE_PLACE_FULFILLED = 'places/UPDATE_PLACE_FULFILLED',

  DELETE_PLACE = 'places/DELETE_PLACE',
  DELETE_PLACE_FULFILLED = 'places/DELETE_PLACE_FULFILLED',

  SET_SELECTED_PLACE_ID = 'places/SET_SELECTED_PLACE_ID',

  SHARE_PLACE = 'places/SHARE_PLACE',
  SHARE_PLACE_FULFILLED = 'places/SHARE_PLACE_FULFILLED',

  GET_SHARED_PLACES = 'places/GET_SHARED_PLACES',
  GET_SHARED_PLACES_FULFILLED = 'places/GET_SHARED_PLACES_FULFILLED',

  DELETE_SHARED_PLACE = 'places/DELETE_SHARED_PLACE',
  DELETE_SHARED_PLACE_FULFILLED = 'places/DELETE_SHARED_PLACE_FULFILLED',

  SEARCH_PLACE = 'places/SEARCH_PLACE',
  SEARCH_PLACE_FULFILLED = 'places/SEARCH_PLACE_FULFILLED',
}

export interface ISetSelectedActionType {
  readonly value: number;
  readonly type: PlacesActionTypeKeys.SET_SELECTED_PLACE_ID;
}

export interface IAddPlaceActionType 
  extends IPromiseAction<PlacesActionTypeKeys.ADD_PLACE, Promise<IPlaceModel>> {}

export interface IAddPlaceFulfilledActionType 
  extends IPromiseAction<PlacesActionTypeKeys.ADD_PLACE_FULFILLED, IPlaceModel> {}

export interface IGetPlacesActionType
  extends IPromiseAction<PlacesActionTypeKeys.GET_PLACES, Promise<IPlaceModel[]>> {}

export interface IGetPlacesFulfilledActionType
  extends IPromiseAction<PlacesActionTypeKeys.GET_PLACES_FULFILLED, IPlaceModel[]> {}

export interface IUpdatePlaceActionType
  extends IPromiseAction<PlacesActionTypeKeys.UPDATE_PLACE, Promise<IPlaceModel>> {}

export interface IUpdatePlaceFulfilledActionType
  extends IPromiseAction<PlacesActionTypeKeys.UPDATE_PLACE_FULFILLED, IPlaceModel> {}

export interface IDeletePlaceActionType
  extends IPromiseAction<PlacesActionTypeKeys.DELETE_PLACE, Promise<{}>, number> {}

export interface IDeletePlaceFulfilledActionType
  extends IPromiseAction<PlacesActionTypeKeys.DELETE_PLACE_FULFILLED, {}, number> {}

export interface ISharePlaceActionType
  extends IPromiseAction<PlacesActionTypeKeys.SHARE_PLACE, Promise<{}>> {}

export interface ISharePlaceFulfilledActionType
  extends IPromiseAction<PlacesActionTypeKeys.SHARE_PLACE_FULFILLED, {}> {}

export interface IGetSharedPlacesActionType
  extends IPromiseAction<PlacesActionTypeKeys.GET_SHARED_PLACES, Promise<{}>> {}

export interface IGetSharedPlacesFulfilledActionType
  extends IPromiseAction<PlacesActionTypeKeys.GET_SHARED_PLACES_FULFILLED, {}> {}

export interface IDeleteSharedPlaceActionType
  extends IPromiseAction<PlacesActionTypeKeys.DELETE_SHARED_PLACE, Promise<{}>, number> {}

export interface IDeleteSharedPlaceFulfilledActionType
  extends IPromiseAction<PlacesActionTypeKeys.DELETE_SHARED_PLACE_FULFILLED, {}, number> {}

export interface ISearchPlaceActionType 
  extends IPromiseAction<PlacesActionTypeKeys.SEARCH_PLACE, Promise<ISearchPlaceResponse>> {}

export interface ISearchPlaceFulfilledActionType 
  extends IPromiseAction<PlacesActionTypeKeys.SEARCH_PLACE_FULFILLED, ISearchPlaceResponse> {}

export type IPlacesActionTypes =
  | IAddPlaceFulfilledActionType
  | IGetPlacesFulfilledActionType
  | IUpdatePlaceFulfilledActionType
  | IDeletePlaceFulfilledActionType
  | ISetSelectedActionType
  | ISharePlaceFulfilledActionType
  | IGetSharedPlacesFulfilledActionType
  | IDeleteSharedPlaceFulfilledActionType
  | ISearchPlaceFulfilledActionType;
