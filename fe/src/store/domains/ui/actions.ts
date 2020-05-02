import { ActionTypeKeys, ISetMenuVisibilityAction } from './actionTypes';

export type ToggleMenuStatus = (value: boolean) => ISetMenuVisibilityAction;

export const toggleMenuStatus: ToggleMenuStatus = value => ({
  value,
  type: ActionTypeKeys.SET_MENU_VISIBILITY
});
