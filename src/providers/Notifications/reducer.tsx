import { Notifications, Notification } from '.';

type AddNotification = {
  type?: 'ADD_NOTIFICATION'
  payload: Notification
}

type DeleteNotification = {
  type: 'DELETE_NOTIFICATION'
  payload: {
    id: string
  }
}

type Action = (
  AddNotification |
  DeleteNotification
)

export const reducer = (state: Notifications, action: Action): Notifications => {
  let reducedState = { ...state };
  const {
    type,
    payload,
    payload: {
      id
    }
  } = action;

  switch (type) {
    case 'ADD_NOTIFICATION': {
      if (id) reducedState[id] = payload;
      break;
    }
    case 'DELETE_NOTIFICATION': {
      if (payload) {
        if (id && id in reducedState) delete reducedState[id];
      }
      break;
    }
    default: {
      break;
    }
  }

  return reducedState;
};
