import React from 'react';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';

export const ListItems = [
    {
        title: 'Home',
        path: '',
        icon: <FaIcons.FaHome size={25} color={"black"}/>,
        cName: 'nav-text'
    },
    {
        title: 'Операции с одной матрицой',
        path: '/one-matrix',
        icon: <SiIcons.SiMatrix size={25} color={"black"}/>,
        cName: 'nav-text'
    },
    {
        title: 'Операции с двумя матрицами',
        path: '/two-matrix',
        icon: <SiIcons.SiMatrix size={25} color={"black"}/>,
        cName: 'nav-text'
    },
    {
        title: 'Индекс массы тела',
        path: '/bmi',
        icon: <FaIcons.FaWeight size={25} color={"black"}/>,
        cName: 'nav-text'
    }
]