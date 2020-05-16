import { createSelector } from 'reselect';

import { IStoreState } from 'store';
import { IOptionType } from 'types';

const selectTags = (state: IStoreState) => state.tags;

export type IAllTagsSelect = IOptionType[];

export const selectAllTags = createSelector(
  selectTags,
  (tags): IAllTagsSelect => {
    const data = tags.data.asMutable().map(tag => ({
      id: tag.id,
      label: tag.label,
      value: tag.label
    }));

    return data;
  }
);
