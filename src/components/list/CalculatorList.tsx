import React, {useState} from 'react'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import * as Icons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import {ListItems} from "./ListItems";
import './CalculatorList.css';
import logo from "../../logo.svg";
import {MatrixCalc} from "../pages/MatrixCalc";
import MainPage from "../pages/MainPage";

function CalculatorList(){
    const [sidebar, showSidebar] = useState(false);
    const setSidebar = () => showSidebar(!sidebar);
    // <div>test</div>
    return <BrowserRouter>
        <div className="calcList">
            <Link to="#" className='nav-menu'>
                <Icons.FaBars onClick={setSidebar} />
            </Link>
            <Routes>
                {/*<Route path="matrix" element={MatrixCalc}/>*/}
                <Route path="/" element={MainPage}/>
            </Routes>
        </div>
        <nav className={ sidebar ? 'nav-menu active': 'nav-menu'}>
            <ul className='nav-menu-items' onClick={setSidebar}>
                <li className='navbar-toggle'>
                    <Link to='#' className='menu-bars'>
                        <IoIcons.IoMdClose></IoIcons.IoMdClose>
                    </Link>
                </li>
                {ListItems.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                            {/*item.icon*/}
                            <span>{item.title}</span>
                            </Link>
                        </li>)
            })}
            </ul>
        </nav>
    </BrowserRouter>
}

export default CalculatorList;