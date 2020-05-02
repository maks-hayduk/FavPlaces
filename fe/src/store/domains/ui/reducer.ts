import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, IMenuActionTypes } from './actionTypes';

import { IMenuState } from './types';

const mobileMenuInitialState: ImmutableObject<IMenuState> = Immutable({
  isMenuOpen: false
});

const mobileMenuReducer = (
  state: ImmutableObject<IMenuState> = mobileMenuInitialState,
  action: IMenuActionTypes
) => {
  switch (action.type) {
    case ActionTypeKeys.SET_MENU_VISIBILITY:
      return state.set('isMenuOpen', action.value);

    default:
      return state;
  }
};

export default mobileMenuReducer;
