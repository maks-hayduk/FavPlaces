import { IStoreState } from 'store/types';

export const selectNotifications = (state: IStoreState) => state.notifications;
