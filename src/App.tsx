import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MatrixCalculator} from "./components/MatrixCalculator";
import {MatrixData} from "./model/MatrixData";

function App() {
    const firstData: MatrixData = {rows:6, columns:6};
    const secondData: MatrixData = {rows:3, columns:3};
  return (

    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="App-name">
                Онлайн Калькуляторы на все случаи жизни!
            </p>
        </header>
        <body>
        <MatrixCalculator firstMatrixData={firstData} secondMatrixData={secondData} operation={"+"}/>
        </body>
        <footer className="App-footer">

        </footer>

    </div>
  );
}

export default App;
