import { ImmutableObject } from 'seamless-immutable';

export interface IPlaceModel {
  id?: number;
  title: string;
  latitude: number;
  longtitude: number;
  datetime: string;
  description?: string;
}

export interface IPlacesInitialState {
  data: IPlaceModel[];
  selectedId: number;
}

export interface IPlacesState extends ImmutableObject<IPlacesInitialState> {}
