import React from 'react';
import logo from './assets/img/logoUniovi.png';
import './assets/css/App.css';

import MainNav from './components/NavBar';
import SimpleFooter from './components/SimpleFooter';

function App() {
  return (
   
    <div className="App">
        <MainNav 
          companyName="Uniovi"
          logo={logo}
          clickMsg="Hello World"
        />

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
      <SimpleFooter />     
    </div>
  );
}

export default App;
