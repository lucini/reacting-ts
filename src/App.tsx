import React from 'react';
import logo from './logo.svg';
import './App.css';

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
        <Primeiro></Primeiro>
        <ComParametro titulo="Alguma coisa"></ComParametro>
        <ComParametro titulo="Outra instância"></ComParametro>
      </header>
    </div>
  );
}

export default App;
