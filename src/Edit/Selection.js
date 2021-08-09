import React, { useContext } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import FormContext from '../store/form/Context';

function Selection () {
  const {checkboxes, formFieldsMap, update} = useContext(FormContext);

  const handleChange = field => e => update(field, e.target.checked);

  return (
    <div>
      <h3>Select Something</h3>
      <FormGroup style={{display: 'flex', alignItems: 'center'}}>
        <FormControlLabel 
          label="Bears"
          control={
            <Checkbox
              checked={checkboxes.bears}
              onChange={handleChange(formFieldsMap.bears)}
              name="bears"
              color="primary"
            />
          }
        />
        <FormControlLabel 
          label="Beets"
          control={
            <Checkbox
              checked={checkboxes.beets}
              onChange={handleChange(formFieldsMap.beets)}
              name="beets"
              color="primary"
            />
          }
        />
        <FormControlLabel 
          label="Battlestar Galactica"
          control={
            <Checkbox
              checked={checkboxes.bGalactica}
              onChange={handleChange(formFieldsMap.bGalactica)}
              name="battlestar"
              color="primary"
            />
          }
        />
      </FormGroup>
    </div>
  )
}

export default Selection;
