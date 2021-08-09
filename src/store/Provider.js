import React from 'react';

import DialogsProvider from './dialogs/DialogsProvider';
import PageProvider from './page/PageProvider';

function Provider ({children}) {
  return (
    <PageProvider>
      <DialogsProvider>
        {children}
      </DialogsProvider>
    </PageProvider>
  );
}

export default Provider;
