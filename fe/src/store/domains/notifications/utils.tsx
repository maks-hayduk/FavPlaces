import * as React from 'react';
import { Notification } from 'react-notification-system';
import { Action } from 'redux';

import { NotificationBlock } from 'components';
import { i18nService } from 'services';

const i18n = i18nService.getInstance();

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
  children: <NotificationBlock message={message ? i18n.t(message) : ' '} Icon={Icon} title={i18n.t(title)} />,
  // tslint:disable-next-line: object-shorthand-properties-first
  position
});

export const createAction = (action: (opts: Notification) => Action, Icon?: React.ReactNode) => (opts: INotifOptions) =>
  action(getConfig(opts, Icon));
