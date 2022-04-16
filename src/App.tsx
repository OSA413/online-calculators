import React from 'react';
import logo from './logo.svg';
import './App.css';
import CalculatorList from "./components/list/CalculatorList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MatrixCalc} from "./components/pages/MatrixCalc";
import MainPage from "./components/pages/MainPage";
import BmiPage from "./components/pages/BmiPage";

function App() {
  return ( <BrowserRouter>
    <div className="App">
        <CalculatorList/>
        <Routes>
            <Route path="matrix" element={<MatrixCalc/>}/>
            <Route path="/" element={<MainPage/>}/>
            <Route path="bmi" element={<BmiPage/>}/>
        </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
