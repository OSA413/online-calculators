import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Cell} from "./uilib/cell/Cell";

function App() {
  return (

    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="App-name">
                Онлайн Калькуляторы на все случаи жизни!
            </p>
        </header>
        <body>
        <div>
            <Cell/>
            <Cell/>
        </div>
        <div>
            <Cell/>
            <Cell/>
        </div>
        </body>
        <footer className="App-footer">

        </footer>

    </div>
  );
}

export default App;
