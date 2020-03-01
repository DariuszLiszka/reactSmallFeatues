import React from 'react';
import logo from './logo.svg';
import DynamicBtn from './dynamic-classes/Dynamic-button';
import RandomBgc from './random-bgc/RandomBgc';
import './App.css';

function App() {
  return (
    <div className='App'>
      {/* <DynamicBtn /> */}
      <RandomBgc />
    </div>
  );
}

export default App;
