import { IStoreState } from 'store/types';

export const selectMenuStatus = (state: IStoreState) => state.ui.isMenuOpen;
