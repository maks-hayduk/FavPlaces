import Immutable, { ImmutableObject } from 'seamless-immutable';

import { PlacesActionTypeKeys, IPlacesActionTypes } from './actionTypes';
import { IPlacesInitialState } from './types';

const placesInitialState: ImmutableObject<IPlacesInitialState> = Immutable({
  selectedId: 0,
  data: [],
  shared: [],
  searchPlaceOptions: []
});

const placesReducer = (state = placesInitialState, action: IPlacesActionTypes) => {
  switch (action.type) {
    case PlacesActionTypeKeys.GET_PLACES_FULFILLED:
      return state.set('data', action.payload);

    case PlacesActionTypeKeys.ADD_PLACE_FULFILLED:
      return state.update('data', val => [action.payload, ...val]);

    case PlacesActionTypeKeys.UPDATE_PLACE_FULFILLED: {
      const { id } = action.payload;

      const oldPlace = state.data.find(place => place.id === id);
      
      if (oldPlace) {
        const placeIndex = state.data.indexOf(oldPlace);

        return state.setIn(['data', String(placeIndex)], action.payload);
      }

      return state;
    }

    case PlacesActionTypeKeys.DELETE_PLACE_FULFILLED: {
      const deletedPlaceId = action.meta;

      return state.update('data', places => places.filter(place => place.id !== deletedPlaceId));
    }

    case PlacesActionTypeKeys.SET_SELECTED_PLACE_ID: {
      const id = action.value;

      return state.set('selectedId', id);
    }

    case PlacesActionTypeKeys.GET_SHARED_PLACES_FULFILLED:
      return state.set('shared', action.payload);

    case PlacesActionTypeKeys.DELETE_SHARED_PLACE_FULFILLED: {
      const deletedPlaceId = action.meta;

      return state.update('shared', places => places.filter(place => place.id !== deletedPlaceId));
    }

    case PlacesActionTypeKeys.SEARCH_PLACE_FULFILLED:
      return state.set('searchPlaceOptions', action.payload.features);

    case PlacesActionTypeKeys.UPLOAD_IMAGES_FULFILLED: {
      const placeId = action.meta;

      const oldPlace = state.data.find(place => place.id === placeId);
      
      if (oldPlace) {
        const placeIndex = state.data.indexOf(oldPlace);

        return state.setIn(['data', String(placeIndex)], { ...oldPlace, images: action.payload });
      }

      return state;
    }

    case PlacesActionTypeKeys.DELETE_IMAGE_FULFILLED: {
      const { imageId, placeId } = action.meta!;

      const place = state.data.find(placeMap => placeMap.id === placeId);
      
      if (place) {
        const placeIndex = state.data.indexOf(place);

        return state.setIn(['data', String(placeIndex)], {
          ...place,
          images: place.images?.filter(image => image.id !== imageId)
        });
      }

      return state;
    }

    default:
      return state;
  }
};

export default placesReducer;
