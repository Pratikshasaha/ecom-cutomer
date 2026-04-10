import { create } from 'zustand';

export interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
}

interface NotificationState {
  notifications: Notification[];
  addNotification: (message: string, type?: 'success' | 'error' | 'info', duration?: number) => void;
  removeNotification: (id: string) => void;
}

export const useNotificationStore = create<NotificationState>((set, get) => ({
  notifications: [],
  addNotification: (message, type = 'success', duration = 3000) => {
    const id = Date.now().toString();
    set(state => ({
      notifications: [...state.notifications, { id, message, type, duration }]
    }));

    if (duration > 0) {
      setTimeout(() => {
        set(state => ({
          notifications: state.notifications.filter(n => n.id !== id)
        }));
      }, duration);
    }
  },
  removeNotification: (id) => {
    set(state => ({
      notifications: state.notifications.filter(n => n.id !== id)
    }));
  }
}));
