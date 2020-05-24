import * as React from 'react';
import { error, info, success, warning } from 'react-notification-system-redux';

import { createAction } from './utils';

export const successNotifAction = createAction(success);
export const errorNotifAction = createAction(error);
