import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import PageContext from '../store/page/Context';

function CancelConfirmation ({open, close, name}) {
  const { toManagePage } = useContext(PageContext);

  const handleClose = () => close(name);

  const handleConfirm = () => {
    toManagePage();
    handleClose();
  }

  return (
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Cancel Editing?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your changes will not be saved. Are you sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Nevermind
          </Button>
          <Button onClick={handleConfirm} color="primary" variant="contained">
            Yes, cancel editing
          </Button>
        </DialogActions>
      </Dialog>
  );
} 

export default CancelConfirmation;
