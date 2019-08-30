import React from 'react';
import logo from './logo.svg';
import './styles/Header.css';
import './components/Navbar'
// import { Navbar } from 'react-bootstrap';

function Header() {
  return (
      <div className="Header">
        <header className="App-header">
        
            <img src={logo} className="App-logo" alt="logo" /> 
            <span className="App-title">Conjugator IO</span>
        </header>
      </div>
  );
}

export default Header;
