import { IPromiseAction } from 'types';

import { IPlaceModel } from './types';

export enum PlacesActionTypeKeys {
  ADD_PLACE = 'places/ADD_PLACE',
  ADD_PLACE_FULFILLED = 'places/ADD_PLACE_FULFILLED',

  GET_PLACES = 'places/GET_PLACES',
  GET_PLACES_FULFILLED = 'places/GET_PLACES_FULFILLED',

  UPDATE_PLACE = 'places/UPDATE_PLACE',
  UPDATE_PLACE_FULFILLED = 'places/UPDATE_PLACE_FULFILLED',

  DELETE_PLACE = 'places/DELETE_PLACE',
  DELETE_PLACE_FULFILLED = 'places/DELETE_PLACE_FULFILLED',
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

export type IPlacesActionTypes =
  | IAddPlaceFulfilledActionType
  | IGetPlacesFulfilledActionType
  | IUpdatePlaceFulfilledActionType
  | IDeletePlaceFulfilledActionType;
