import { ImmutableObject, ImmutableArray } from 'seamless-immutable';

export interface IFeature {
  id: string;
  center: ImmutableArray<number>;
  place_name: string;
  place_type: ImmutableArray<string>;
  properties: {
    category: ImmutableArray<string>;
    address: string;
    landmark: boolean;
  };
  text: string;
}

export interface IPlacesInitialState {
  currentFeature: IFeature;
}

export interface IPlacesState extends ImmutableObject<IPlacesInitialState> {}
