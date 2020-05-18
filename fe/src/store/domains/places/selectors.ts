import { createSelector } from 'reselect';

import { IStoreState } from 'store';

const selectPlaces = (state: IStoreState) => state.places;

export const selectAllPlaces = createSelector(
  selectPlaces, 
  (places) => places.data.asMutable()
);

export const selectCurrentPlace = createSelector(
  selectPlaces,
  ({ selectedId, data, shared }) => {
    const selectedPlace = data.find(place => place.id === selectedId);

    if (selectedPlace) {
      return selectedPlace;
    }

    const sharedPlace = shared.find(place => place.id === selectedId);

    if (sharedPlace) {
      return sharedPlace;
    }

    return null;
  }
);

export const selectSharedPlaces = createSelector(
  selectPlaces,
  ({ shared }) => shared.asMutable()
);

export const selectSearchPlaces = createSelector(
  selectPlaces,
  ({ searchPlaceOptions }) => {
    return searchPlaceOptions.asMutable().map(place => ({
      label: place.place_name,
      value: place.id
    }));
  }
);
