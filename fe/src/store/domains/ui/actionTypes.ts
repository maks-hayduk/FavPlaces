export enum ActionTypeKeys {
  SET_MENU_VISIBILITY = 'menu/SET_MENU_VISIBILITY'
}

export interface ISetMenuVisibilityAction {
  readonly type: ActionTypeKeys.SET_MENU_VISIBILITY;
  value: boolean;
}

export type IMenuActionTypes = ISetMenuVisibilityAction;
