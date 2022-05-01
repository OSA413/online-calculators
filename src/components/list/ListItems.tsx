import React from 'react';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';

export const ListItems = [
    {
        title: 'Home',
        path: '',
        icon: SiIcons.SiMatrix,
        cName: 'nav-text'
    },
    {
        title: 'Матрицы',
        path: '/matrix',
        icon: SiIcons.SiMatrix,
        cName: 'nav-text'
    },
    {
        title: 'Индекс массы тела',
        path: '/bmi',
        icon: FaIcons.FaWeight,
        cName: 'nav-text'
    }
]