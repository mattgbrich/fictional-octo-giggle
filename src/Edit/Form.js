import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField'
import FormContext from '../store/form/Context';

function Form () {
  const {firstName, lastName, update, formFieldsMap} = useContext(FormContext);

  const handleChange = (field) => (e) => update(field, e.target.value);

  return (
    <div>
      <h2>This is the form</h2>
      <TextField label="First Name" value={firstName} onChange={handleChange(formFieldsMap.firstName)} style={{marginRight: 16}}/>
      <TextField label="Last Name" value={lastName} onChange={handleChange(formFieldsMap.lastName)} />
    </div>
  )
}

export default Form;
