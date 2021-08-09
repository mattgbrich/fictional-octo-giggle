import React from 'react';
import './App.css';
import MainContainer from './MainContainer';
import Dialogs from './Dialogs';
import Provider from './store/Provider';

function App() {
  return (
    <>
      <Provider>
        <MainContainer />
        <Dialogs />
      </Provider>
    </>
  );
}

export default App;
