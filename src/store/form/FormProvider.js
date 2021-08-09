import React, { useState } from 'react';
import Context, { formFieldsMap } from './Context';

function PageProvider ({children}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    bears: false,
    beets: false,
    bGalactica: false
  });

  const update = (field, value) => {
    setFormData(fd => ({
      ...fd,
      [field]: value,
    }));
  };
  
  const { firstName, lastName, bears, beets, bGalactica } = formData;
  const checkboxes = {bears, beets, bGalactica};
  return (
    <Context.Provider value={{firstName, lastName, checkboxes, update, formFieldsMap}}>
      {children}
    </Context.Provider>
  );
}

export default PageProvider;
