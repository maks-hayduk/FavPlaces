import { createSelector } from 'reselect';

import { IStoreState } from 'store';

const selectPlaces = (state: IStoreState) => state.places;

export const selectAllPlaces = createSelector(
  selectPlaces, 
  (places) => places.data.asMutable()
);

export const selectCurrentPlace = createSelector(
  selectPlaces,
  ({ selectedId, data }) => {
    const selectedPlace = data.find(place => place.id === selectedId);

    if (selectedPlace) {
      return selectedPlace;
    }

    return null;
  }
);
