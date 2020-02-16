import React from 'react';
import logo from './logo.svg';
import './App.css';
import CalculatorBody from './CalculatorBody';
import CalcScreen from './CalcScreen';

function App() {
  return (
    <div className="App">
      <CalcScreen />
      <CalculatorBody />
    </div>
  );
}

export default App;
