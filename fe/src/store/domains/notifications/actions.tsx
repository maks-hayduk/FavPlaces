import * as React from 'react';
import { error, info, success, warning } from 'react-notification-system-redux';

import { ErrorNotification, SuccesNotificationIcon, WarningNotification } from 'components';

import { createAction } from './utils';

export const successNotifAction = createAction(success, <SuccesNotificationIcon />);
export const infoNotifAction = createAction(info);
export const warningNotifAction = createAction(warning, <WarningNotification />);
export const errorNotifAction = createAction(error, <ErrorNotification />);
