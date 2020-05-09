import * as React from 'react';
import { styled } from 'theme';

const NotificationWrapper = styled.div`
  max-width: 100%;

  .notification-title {
    font-size: 12px;
    margin: 0px 0px 5px;
    padding: 0px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.black};
    font-style: normal;
    line-height: normal;
  }

  .notification-message {
    margin: 0px;
    padding: 0px;
    width: 100%;
    line-height: 1.52;
    font-size: 12px;
    border-top: none;
    color: ${({ theme }) => theme.color.gray};
  }

  .wrapper {
    display: flex;
    justify-context: space-between;
  }

  .icon-wrapper {
    margin-right: 10px;
  }
`;

interface INotificationBlockProps {
  message: string;
  Icon: React.ReactNode;
  title: string;
}

export const NotificationBlock: React.FC<INotificationBlockProps> = ({ message, Icon, title }) => {
  return (
    <NotificationWrapper>
      <div className="wrapper">
        <div className="icon-wrapper">{Icon}</div>
        <div>
          <h4 className="notification-title">{title}</h4>

          <div className="notification-message">{message}</div>
        </div>
      </div>
    </NotificationWrapper>
  );
};
