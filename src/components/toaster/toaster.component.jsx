import CircleCheck from '../../assets/icons/circle-check.component';
import ErrorSvg from '../../assets/icons/error-svg.component';

import toast from 'react-hot-toast';
import { theme } from '../../styles/themes';
/**
 *
 * @param {string} message - The message to be displayed in the notification.
 * @param {boolean} success - A boolean indicating whether the notification is a success notification (default is false).
 * @param {number} duration - The duration in milliseconds for which the notification should be displayed (default is 1500ms).
 */

const getMessage = message => {
  switch (message) {
    case 'FirebaseError: Firebase: Error (auth/email-already-in-use).':
      return 'Email already exists';
    case 'FirebaseError: Firebase: Error (auth/invalid-email).':
      return 'Invalid email address';
    case 'FirebaseError: Firebase: Error (auth/user-not-found).':
      return 'User not found';
    case 'FirebaseError: Firebase: Error (auth/wrong-password).':
      return 'Incorrect password';
    case 'FirebaseError: Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).':
      return 'Account has been temporarily disabled. You can immediately restore it by resetting your password';
    default:
      return message;
  }
};

export const ToastNotification = (
  message,
  success = false,
  duration = 1500
) => {
  const notification = getMessage(message);

  const config = {
    style: {
      padding: theme.padding.small,
      width: '100%',
      color: success ? theme.colors.secondary : '#FF4B4B',
      fontSize: theme.fontSize.bodyRegular,
      fontWeight: '700',
      fontFamily: theme.fontFamily.body,
    },

    position: 'bottom-center',
    duration,
    icon: success ? <CircleCheck /> : <ErrorSvg />,
  };
  if (success) {
    toast.success(notification, { ...config });
  } else {
    toast.error(notification, { ...config });
  }
};

export default ToastNotification;
