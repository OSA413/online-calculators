import React from 'react';
import logo from './logo.svg';
import './App.css';
import CalculatorList from "./components/list/CalculatorList";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {MatrixCalc} from "./components/pages/MatrixCalc";
import MainPage from "./components/pages/MainPage";
import BmiPage from "./components/pages/BmiPage";
import { IconContext } from 'react-icons';
import { ListItems } from './components/list/ListItems';
import './components/list/CalculatorList.css';

function App() {
  return ( <BrowserRouter>
    <div className="App">
    <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
            <img src={logo} className='logo'/>
        </div>
        <div className='nav-menu'>
          <nav>
              <ul>
                {ListItems.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon} <span>{item.title}</span>
                      </Link>
                    </li>)
                })}
              </ul>
          </nav>
          <Routes>
              <Route path="matrix" element={<MatrixCalc/>}/>
              <Route path="/" element={<MainPage/>}/>
              <Route path="bmi" element={<BmiPage/>}/>
          </Routes>
        </div>
    </IconContext.Provider>
    </div>
  </BrowserRouter>
  );
}

export default App;
