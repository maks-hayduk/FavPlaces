import { createSelector } from 'reselect';

import { IStoreState } from 'store';

import { selectTags } from '../tags';

const selectPlaces = (state: IStoreState) => state.places;

export const selectFavoritePlaces = createSelector(
  selectPlaces, 
  selectTags,
  ({ data }, { filteredTags }) => {
    if (filteredTags && (!filteredTags.length || !filteredTags)) {
      return data.asMutable();
    }

    const filters = filteredTags.map(el => el.id);

    return data.asMutable().filter(el => el.tags?.every(tag => filters.includes(Number(tag.id))));
  }
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
  selectTags,
  ({ shared }, { filteredTags }) => {
    if (filteredTags && (!filteredTags.length || !filteredTags)) {
      return shared.asMutable();
    }

    const filters = filteredTags.map(el => el.id);

    return shared.asMutable().filter(el => el.tags?.every(tag => filters.includes(Number(tag.id))));
  }
);

export const selectSearchPlaces = createSelector(
  selectPlaces,
  ({ searchPlaceOptions }) => {
    return searchPlaceOptions.asMutable().map(place => ({
      label: place.place_name,
      value: place.id,
      data: place
    }));
  }
);

export const selectAllPlaces = createSelector(
  selectPlaces,
  ({ data, shared }) => data.asMutable().concat(shared.asMutable())
);
