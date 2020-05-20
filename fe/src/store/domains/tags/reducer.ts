import Immutable, { ImmutableObject } from 'seamless-immutable';

import { TagActionTypeKeys, ITagActionTypes } from './actionTypes';
import { ITagsInitialState } from './types';

const authInitialState: ImmutableObject<ITagsInitialState> = Immutable({
  data: [],
  filteredTags: []
});

const tagsReducer = (state = authInitialState, action: ITagActionTypes) => {
  switch (action.type) {
    case TagActionTypeKeys.GET_TAGS_FULFILLED:
      return state.set('data', action.payload);

    case TagActionTypeKeys.SET_FILTERED_TAGS:
      return state.set('filteredTags', action.value);

    default:
      return state;
  }
};

export default tagsReducer;
