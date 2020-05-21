import { ImmutableObject } from 'seamless-immutable';

import { IOptionType } from 'types';

export interface IImageInfo {
  id: number;
  base64: string;
  name: string;
  size: string;
  type: string;
}

export interface IFeature {
  id: string;
  center: [number, number];
  place_name: string;
  properties: {
    category: string;
    address: string;
    landmark: boolean;
  };
  text: string;
}

export interface ISearchPlaceResponse {
  features: IFeature[];
}

export interface IPlaceModel {
  id?: number;
  title: string;
  latitude: number;
  longtitude: number;
  datetime: string;
  tags: IOptionType[] | null;
  description?: string;
  images?: IImageInfo[];
}

export interface ISharePlaceModel extends IPlaceModel {
  email: string;
}

export interface IPlacesInitialState {
  selectedId: number;
  data: IPlaceModel[];
  shared: ISharePlaceModel[];
  searchPlaceOptions: IFeature[];
}

export interface IPlacesState extends ImmutableObject<IPlacesInitialState> {}
