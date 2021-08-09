import React, { useState } from 'react';
import Context, { pageMap } from './Context';

function PageProvider ({children}) {
  const [currentPage, setCurrentPage] = useState(pageMap.manage);
  const toManagePage = () => setCurrentPage(pageMap.manage);
  const toEditPage = () => setCurrentPage(pageMap.edit);

  return (
    <Context.Provider value={{currentPage, toManagePage, toEditPage, pageMap}}>
      {children}
    </Context.Provider>
  );
}

export default PageProvider;
