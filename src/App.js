import React from 'react';
import logo from './logo.svg';
import DynamicBtn from './dynamic-classes/Dynamic-button';
import RandomBgc from './random-bgc/RandomBgc';
import ModalContainer from './basic-modal/ModalContainer';
import DndContainer from './basic-dnd/DndConainter';
import LoadingBar from './animated-loading-bar/LoadingBar';
import Heart from './animated-heart/Heart';
import Slider from './slider/Slider';
import './App.css';

function App() {
  return (
    <div className='App'>
      {/* <DynamicBtn /> */}
      {/* <RandomBgc /> */}
      {/* <ModalContainer /> */}
      {/* <DndContainer /> */}
      {/* <LoadingBar /> */}
      {/* <Heart /> */}
      <Slider />
    </div>
  );
}

export default App;
