import * as api from './api';

import { IGetTagsActionType, TagActionTypeKeys, ISetFilteredTagsActionType } from './actionTypes';
import { ITagModel } from './types';

export type GetTagsAction = () => IGetTagsActionType;

export const getTagsAction: GetTagsAction = () => ({
  type: TagActionTypeKeys.GET_TAGS,
  payload: api.getTags()
});

export type SetFilteredTagsAction = (tags: ITagModel[]) => ISetFilteredTagsActionType;

export const setFilteredTagsAction: SetFilteredTagsAction = (tags) => ({
  type: TagActionTypeKeys.SET_FILTERED_TAGS,
  value: tags
});
