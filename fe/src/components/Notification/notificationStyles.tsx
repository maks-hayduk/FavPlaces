import { theme } from 'theme';

export const notificationStyles: object = {
  Containers: {
    DefaultStyle: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      left: 0,
      maxWidth: '100%',
      minWidth: '100%',
      pointerEvents: 'none',
      width: '0'
    }
  },

  NotificationItem: {
    DefaultStyle: {
      alignItems: 'flex-start',
      backgroundColor: `${theme.color.white}`,
      borderRadius: '4px',
      borderTop: `4px solid ${theme.color.primaryLight}`,
      boxShadow: `0 0 8px 0 ${theme.color.gray}`,
      display: 'flex',
      flexDirection: 'column',
      height: 'auto',
      justifyContent: 'center',
      marginLeft: 0,
      maxWidth: '400px',
      minHeight: 'fit-content',
      minWidth: '300px',
      padding: '10px',
      pointerEvents: 'auto',
      width: '90%'
    },

    success: {
      backgroundColor: `${theme.color.white}`,
      borderRadius: '2px',
      borderTop: `5px solid ${theme.color.primary}`,
      boxShadow: `0px 0px 8px ${theme.color.gray}`
    },

    error: {
      backgroundColor: `${theme.color.white}`,
      borderRadius: '2px',
      borderTop: `5px solid ${theme.color.red}`,
      boxShadow: `0px 0px 8px ${theme.color.gray}`
    },

    warning: {
      backgroundColor: `${theme.color.white}`,
      borderRadius: '2px',
      borderTop: `4px solid ${theme.color.yellow}`,
      boxShadow: `0px 0px 8px ${theme.color.gray}`
    }
  },

  Title: {
    DefaultStyle: {
      color: `${theme.color.black}`,
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: 'normal',
      lineHeight: 'normal'
    }
  },

  ActionWrapper: {
    DefaultStyle: {
      color: `${theme.color.primary}`,
      fontSize: '12px',
      fontWeight: '500'
    }
  },

  MessageWrapper: {
    DefaultStyle: {
      borderTop: 'none',
      color: `${theme.color.gray}`,
      fontSize: '12px',
      lineHeight: '1.52',
      marginRight: 0,
      width: '100%'
    }
  },

  Dismiss: {
    DefaultStyle: {
      backgroundColor: `${theme.color.transparent}`,
      border: `solid 1px ${theme.color.black}`,
      boxShadow: 'none',
      color: `${theme.color.black}`,
      fontSize: '11px',
      height: '14px',
      lineHeight: '13px',
      opacity: '0.5',
      right: '10px',
      textAlign: 'center',
      top: '10px',
      width: '14px'
    }
  }
};
