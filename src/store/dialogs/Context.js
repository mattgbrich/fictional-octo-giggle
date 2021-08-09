import { createContext } from 'react';

export const dialogMap = {
  saveConfirmation: 'saveConfirmation',
  cancelConfirmation: 'cancelConfirmation'
};

export default createContext({
  dialogs: {
    saveConfirmation: false,
    cancelConfirmation: false,
  },
  open: () => {},
  close: () => {},
  dialogMap
});
