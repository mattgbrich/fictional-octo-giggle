import React, { useState } from 'react';
import Context, { dialogMap } from './Context';

function PageProvider ({children}) {
  const [dialogs, setDialogs] = useState({
    [dialogMap.saveConfirmation]: false,
    [dialogMap.cancelConfirmation]: false
  });

  const open = (dialog) => {
    setDialogs(d => ({
      ...d,
      [dialog]: true
    }));
  };

  const close = (dialog) => {
    setDialogs(d => ({
      ...d,
      [dialog]: false
    }));
  };

  return (
    <Context.Provider value={{dialogs, open, close, dialogMap}}>
      {children}
    </Context.Provider>
  );
}

export default PageProvider;