import React, { useContext } from 'react';
import Button from '@material-ui/core/Button'
import PageContext from '../store/page/Context';

function Actions () {
  const { toEditPage } = useContext(PageContext);

  const handleClickEditMe = () => toEditPage();

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickEditMe}>
        Edit
      </Button>
    </div>
  )
}

export default Actions;
