import React from 'react';

import FormProvider from '../store/form/FormProvider';
import Form from './Form'
import Selection from './Selection'
import Actions from './Actions'

function Edit () {
  return (
    <FormProvider>
      <div>
        <h3>EDIT STUFF</h3>
        <Form />
        <Selection />
        <Actions />
      </div>
    </FormProvider>
  )
}

export default Edit;
