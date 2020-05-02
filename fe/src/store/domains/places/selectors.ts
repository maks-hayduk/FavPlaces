import { IStoreState } from 'store';
import { createSelector } from 'reselect';

const selectPlaces = (state: IStoreState) => state.places;

export const selectCurrentFeature = createSelector(selectPlaces, places => places.currentFeature);
