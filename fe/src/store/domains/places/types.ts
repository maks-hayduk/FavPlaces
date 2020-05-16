import { ImmutableObject } from 'seamless-immutable';

import { IOptionType } from 'types';

export interface IPlaceModel {
  id?: number;
  title: string;
  latitude: number;
  longtitude: number;
  datetime: string;
  tags: IOptionType[] | null;
  description?: string;
}

export interface IPlacesInitialState {
  data: IPlaceModel[];
  selectedId: number;
}

export interface IPlacesState extends ImmutableObject<IPlacesInitialState> {}
