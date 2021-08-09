import React, { useContext } from 'react';

import CancelConfirm from './CancelConfirm';
import SaveConfirm from './SaveConfirm';
import DialogsContext from '../store/dialogs/Context';

function Dialogs () {
  const {dialogs, close, dialogMap} = useContext(DialogsContext);


  return (
    <>
      <CancelConfirm
        name={dialogMap.cancelConfirmation}
        close={close}
        open={dialogs.cancelConfirmation}
      />
      <SaveConfirm 
        name={dialogMap.saveConfirmation}
        close={close}
        open={dialogs.saveConfirmation}
      />
    </>
  );
}

export default Dialogs;
