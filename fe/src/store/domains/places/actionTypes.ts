import { IPromiseAction } from 'types';

import { IFeature } from './types';

export enum PlacesActionTypeKeys {
  GET_FEATURE_DATA = 'places/GET_FEATURE_DATA',
  GET_FEATURE_DATA_FULFILLED = 'places/GET_FEATURE_DATA_FULFILLED',
}

export interface IGetFeatureDataActionType 
  extends IPromiseAction<PlacesActionTypeKeys.GET_FEATURE_DATA, Promise<{ features: IFeature[] }>> {}

export interface IGetFeatureDataFulfilledActionType 
  extends IPromiseAction<PlacesActionTypeKeys.GET_FEATURE_DATA_FULFILLED, { features: IFeature[] }> {}

export type IPlacesActionTypes =
  | IGetFeatureDataFulfilledActionType;
