import React, { useContext } from 'react';
import Manage from './Manage';
import Edit from './Edit'
import PageContext from './store/page/Context';

function MainContainer () {
  const { currentPage, pageMap } = useContext(PageContext);

  return (
    <div className="App">
      {currentPage === pageMap.manage && <Manage />}
      {currentPage === pageMap.edit && <Edit />}
    </div>
  );
}

export default MainContainer;
