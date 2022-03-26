import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TwoMatrixCalculator} from "./components/matrix/TwoMatrixCalculator";

function App() {
  return (

    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="App-name">
                Онлайн Калькуляторы на все случаи жизни!
            </p>
        </header>
        <div>
          <TwoMatrixCalculator operation={"*"}/>
        </div>
        <footer className="App-footer">

        </footer>

    </div>
  );
}

export default App;
