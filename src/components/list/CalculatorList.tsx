import React, {useState} from 'react'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {ListItems} from "./ListItems";
import './CalculatorList.css';
import {IconContext} from "react-icons";
import logo from '../../logo.svg';

function CalculatorList(){
    const [sidebar, showSidebar] = useState(false);
    const setSidebar = () => showSidebar(!sidebar);

    return ( <>
        <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
            <img src={logo} className='logo'/>
            <Link to="#" className='menu-bars'>
                <FaIcons.FaBars onClick={setSidebar} />
            </Link>
        </div>
        <nav className={ sidebar ? 'nav-menu active': 'nav-menu'}>
            <ul className='nav-menu-items' onClick={setSidebar}>
                <li className='navbar-toggle'>
                    <Link to='#' className='menu-bars'>
                        <AiIcons.AiOutlineClose/>
                    </Link>
                </li>
                {ListItems.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                            </Link>
                        </li>)
            })}
            </ul>
        </nav>
    </IconContext.Provider>
</>)
}

export default CalculatorList;