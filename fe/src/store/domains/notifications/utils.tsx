import * as React from 'react';
import { Notification } from 'react-notification-system';
import { Action } from 'redux';

import { NotificationBlock } from 'components';

export interface INotifOptions {
  title: string;
  message?: string;
  autoDismiss?: number;
  position?: Notification['position'];
  Icon?: React.ReactNode;
}

export const getConfig = (
  { title, message, autoDismiss = 5, position = 'tc' }: INotifOptions,
  Icon: React.ReactNode
): Notification => ({
  autoDismiss,
  children: <NotificationBlock message={message ? message : ' '} Icon={Icon} title={title} />,
  position
});

export const createAction = (action: (opts: Notification) => Action, Icon?: React.ReactNode) => (opts: INotifOptions) =>
  action(getConfig(opts, Icon));
