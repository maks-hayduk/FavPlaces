import { ImmutableObject } from 'seamless-immutable';

export interface ITagModel {
  id: number;
  label: string;
}

export interface ITagsInitialState {
  data: ITagModel[];
}

export interface ITagsState extends ImmutableObject<ITagsInitialState> {}
