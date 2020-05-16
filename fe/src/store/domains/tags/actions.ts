import * as api from './api';

import { IGetTagsActionType, TagActionTypeKeys } from './actionTypes';

export type GetTagsAction = () => IGetTagsActionType;

export const getTagsAction: GetTagsAction = () => ({
  type: TagActionTypeKeys.GET_TAGS,
  payload: api.getTags()
});
