import * as React from 'react';
import { Notification } from 'react-notification-system';
import * as Notifications from 'react-notification-system-redux';

import { notificationStyles } from './notificationStyles';

export interface IWrappedProps {
  notifications: Notification[];
}

const NotificationsContainer: React.SFC<IWrappedProps> = ({ notifications }) => (
  <Notifications.default notifications={notifications} style={notificationStyles} />
);

export default NotificationsContainer;
