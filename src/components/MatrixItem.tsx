import React, {useState} from 'react';
import {Cell} from "../uilib/cell/Cell";
import classes from './MatrixItem.module.css'
import {NumberField} from "../uilib/number-field/NumberField";



export const MatrixItem: React.FC = () =>{
    const [rows, setRows] = useState<number>(3);
    const [columns, setColumns] = useState<number>(3);

    return <div className={classes.root}>
        <div className={classes.title}> <NumberField value={rows} onChange={e=> setRows(Number(e.target.value))}/>
            x
             <NumberField value={columns} onChange={e=> setColumns(Number(e.target.value))}/></div>
        <div className={classes.matrix}>{useRenderMatrix(rows, columns)}</div>
    </div>
}

function useRenderMatrix(rows: number, columns: number) {
    const cells = [];
    const [values, setValues] = useState<number[][]>(Array(rows).fill(0).map(() => Array(columns).fill(0)));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            cells.push(<input type={"number"} value={values[i][j]} onChange={e=> {
                setValues(values => {
                    values[i][j] = Number(e.target.value);
                    console.log(values[i][j])
                    return [...values]
                });
            }} />)
        }
        cells.push(<br/>)
    }
    console.log(rows, columns)
    console.log(values)


    return cells;
}


