import Immutable, { ImmutableObject } from 'seamless-immutable';

import { TagActionTypeKeys, ITagActionTypes } from './actionTypes';
import { ITagsInitialState } from './types';

const authInitialState: ImmutableObject<ITagsInitialState> = Immutable({
  data: []
});

const tagsReducer = (state = authInitialState, action: ITagActionTypes) => {
  switch (action.type) {
    case TagActionTypeKeys.GET_TAGS_FULFILLED:
      return state.set('data', action.payload);

    default:
      return state;
  }
};

export default tagsReducer;
