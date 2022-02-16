import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
} from 'react';

import classes from './index.module.scss';
import { reducer } from './reducer';

export type Notification = {
  message?: string
  duration?: number
  id?: string
}

export type Notifications = {
  [id: string]: Notification
}

export interface INotifications {
  setNotification: (args: {
    id?: string,
    message?: string,
    duration?: number
  }) => void
  notifications: Notifications
}

export const NotificationsContext = createContext<INotifications>({} as INotifications);
export const useNotifications = (): INotifications => useContext(NotificationsContext);

export const NotificationsProvider: React.FC = (props) => {
  const [notifications, dispatchNotifications] = useReducer(reducer, {});

  const { children } = props;

  const setNotification = useCallback(({
    id,
    message = 'No message provided',
    duration = 5000,
  }) => {
    // set deletion timer
    const timerID = setTimeout(() => {
      dispatchNotifications({
        type: 'DELETE_NOTIFICATION',
        payload: {
          id,
        },
      });
    }, duration);
    // set notification
    dispatchNotifications({
      type: 'ADD_NOTIFICATION',
      payload: {
        id,
        message,
        duration,
      },
    });

    return () => clearTimeout(timerID);
  }, []);

  const notifs = Object.keys(notifications || {});

  return (
    <NotificationsContext.Provider
      value={{
        setNotification,
        notifications,
      }}
    >
      {children}
      <div className={classes.notificationsContainer}>
        {Array.isArray(notifs) && notifs.length > 0 && (
          notifs.map((notif, index) => {
            const notification = notifications[notif];
            const { message } = notification;

            return (
              <div
                key={index}
                className={classes.notification}
              >
                {message}
              </div>
            );
          })
        )}
      </div>
    </NotificationsContext.Provider>
  );
};
