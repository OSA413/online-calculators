import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TwoMatrixCalculator} from "./components/TwoMatrixCalculator";
import {MatrixData} from "./model/MatrixData";
import {Main} from "./components/Main";

// function matrixOnClick() =>{
//     return
// }

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
        {/*<button>Matrix</button>*/}
        <Main/>
        </body>
        <footer className="App-footer">

        </footer>

    </div>
  );
}

export default App;
