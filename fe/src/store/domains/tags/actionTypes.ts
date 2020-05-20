import { IPromiseAction } from 'types';

import { ITagModel } from './types';

export enum TagActionTypeKeys {
  GET_TAGS = 'tags/GET_TAGS',
  GET_TAGS_FULFILLED = 'tags/GET_TAGS_FULFILLED',

  SET_FILTERED_TAGS = 'tags/SET_FILTERED_TAGS'
}

export interface IGetTagsActionType 
  extends IPromiseAction<TagActionTypeKeys.GET_TAGS, Promise<ITagModel[]>> {}

export interface IGetTagsFulfilledActionType 
  extends IPromiseAction<TagActionTypeKeys.GET_TAGS_FULFILLED, ITagModel[]> {}

export interface ISetFilteredTagsActionType {
  type: TagActionTypeKeys.SET_FILTERED_TAGS;
  value: ITagModel[];
}

export type ITagActionTypes =
  | IGetTagsFulfilledActionType
  | ISetFilteredTagsActionType;
