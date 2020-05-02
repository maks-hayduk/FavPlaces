import Immutable, { ImmutableObject } from 'seamless-immutable';

import { PlacesActionTypeKeys, IPlacesActionTypes } from './actionTypes';
import { IPlacesInitialState } from './types';

const placesInitialState: ImmutableObject<IPlacesInitialState> = Immutable({
  currentFeature: {
    id: '',
    center: Immutable([]),
    place_name: '',
    place_type: Immutable([]),
    properties: {
      category: Immutable([]),
      address: '',
      landmark: false
    },
    text: ''
  }
});

const placesReducer = (state = placesInitialState, action: IPlacesActionTypes) => {
  switch (action.type) {
    case PlacesActionTypeKeys.GET_FEATURE_DATA_FULFILLED: {
      const { payload: { features } } = action;

      return state.set('currentFeature', features[0]);
    }
    default:
      return state;
  }
};

export default placesReducer;
