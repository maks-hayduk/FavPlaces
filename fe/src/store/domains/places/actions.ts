import { Coords } from 'types';

import * as api from './api';
import { PlacesActionTypeKeys, IGetFeatureDataActionType } from './actionTypes';

export type GetFeatureDataAction = (coords: Coords) => IGetFeatureDataActionType;

export const getFeatureDataAction: GetFeatureDataAction = (coords) => ({
  type: PlacesActionTypeKeys.GET_FEATURE_DATA,
  payload: api.getFeatureData(coords)
});
