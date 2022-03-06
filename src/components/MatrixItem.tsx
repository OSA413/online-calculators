import React from 'react';
import {Cell} from "../uilib/cell/Cell";
import classes from './MatrixItem.module.css'



export const MatrixItem: React.FC<{
    rows: number;
    columns: number;
}> = ({rows, columns}) =>{
    return <div className={classes.root}>
        <p>{rows} x {columns}</p>
        {renderMatrix(rows, columns)}
    </div>
}

function renderMatrix(rows: number, columns: number) {
    const cells = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            cells.push(<Cell/>)
        }
        cells.push(<br/>)
    }
    return cells;
}


