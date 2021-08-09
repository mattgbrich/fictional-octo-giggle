import { createContext } from 'react';

export const formFieldsMap = {
  firstName: 'firstName',
  lastName: 'lastName',
  bears: 'bears',
  beets: 'beets',
  bGalactica: 'bGalactica'
};

export default createContext({
  firstName: '',
  lastName: '',
  checkboxes: {
    bears: false,
    beets: false,
    bGalactica: false
  },
  update: () => {},
  formFieldsMap
});
