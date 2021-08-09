import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button'
import PageContext from '../store/page/Context';
import FormContext from '../store/form/Context';
import DialogContext from '../store/dialogs/Context';
import CircularProgress from '@material-ui/core/CircularProgress';

function Actions () {
  const [loading, setLoading] = useState(false);
  const { toManagePage } = useContext(PageContext);
  const {firstName, lastName, checkboxes} = useContext(FormContext);
  const { dialogMap, open } = useContext(DialogContext);

  const handleCancel = () => open(dialogMap.cancelConfirmation);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log("SAVED", {
        firstName,
        lastName,
        checkboxes
      });
      open(dialogMap.saveConfirmation);
      toManagePage();
    }, 2000)
  };

  const noSelections = !checkboxes.bears && !checkboxes.beets && !checkboxes.bGalactica;

  const saveDisabled = () => {
    return !firstName.length || !lastName.length || noSelections;
  }
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Button variant="outlined" color="secondary" onClick={handleCancel} style={{marginRight: 16}}>
        CANCEL
      </Button>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSave}
        disabled={saveDisabled()}
      >
        {loading ? <CircularProgress /> : "SAVE"}
      </Button>
    </div>
  );
}

export default Actions;
