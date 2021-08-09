import { createContext } from 'react';

export const pageMap = {
  manage: 'manage',
  edit: 'edit'
};

export default createContext({
  currentPage: pageMap.manage,
  pageMap: pageMap,
  toManagePage: () => {},
  toEditPage: () => {}
});
