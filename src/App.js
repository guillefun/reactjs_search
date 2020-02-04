import React from 'react';
import logo from './logoUniovi.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenidos a este ejemplo de ReactJS<span>&#128127;</span>.
        </p>
        <a
          className="App-link"
          href="https:\\www.uniovi.es"
          target="_blank"
          rel="noopener noreferrer"
        >
          Uniovi
        </a>
      </header>
    </div>
  );
}

export default App;
