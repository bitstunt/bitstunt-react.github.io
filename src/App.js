import React, { useState, useEffect } from 'react';
import './App.css';
import About from './Components/Adout';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
    </>
  );
}

export default App;
