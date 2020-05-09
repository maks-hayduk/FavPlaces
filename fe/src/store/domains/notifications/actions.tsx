import * as React from 'react';
import { error, info, success, warning } from 'react-notification-system-redux';

import { createAction } from './utils';

export const successNotifAction = createAction(success);
export const infoNotifAction = createAction(info);
export const warningNotifAction = createAction(warning);
export const errorNotifAction = createAction(error);
