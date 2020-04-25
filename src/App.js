import React from 'react';
import logo from './logo.svg';
import './App.css';
import { count, length } from './number'; 

const name = 'Anastasia';
const flag = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{ 
          fontSize: 24 
        }}>
          My first react app change!
        </p>
        <p>
          {3.14}
        </p>
        <p>
          {12 + 30}
        </p>
        <p>
          {name}
        </p>
        <p>
          {flag && "Flag is true"}
          {undefined}
          {null}
          {false}
          {true}
        </p>
        <p>
          count * length = { count * length }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
