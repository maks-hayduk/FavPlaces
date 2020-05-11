import { IStoreState } from 'store';
import { createSelector } from 'reselect';

const selectPlaces = (state: IStoreState) => state.places;

export const selectAllPlaces = createSelector(
  selectPlaces, 
  (places) => places.data.asMutable()
);
