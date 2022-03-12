import React, {useState} from 'react';
import {Cell} from "../uilib/cell/Cell";
import classes from './MatrixItem.module.css'
import {NumberField} from "../uilib/number-field/NumberField";



export const MatrixItem: React.FC = () =>{
    const [rows, setRows] = useState<number>(3);
    const [columns, setColumns] = useState<number>(3);

    const [values, setValues] = useState<number[][]>(Array(rows).fill(0).map(() => Array(columns).fill(0)));

    const change = (i: number, j:number, v:number) => setValues(values => {
        values[i][j] = v;
        console.log(values[i][j])
        return [...values]
    });

    return <div className={classes.root}>
        <div className={classes.title}>
            <NumberField value={rows} onChange={e=> setRows(Number(e.target.value))}/>
            x
            <NumberField value={columns} onChange={e=> setColumns(Number(e.target.value))}/></div>
        <div className={classes.matrix}>
            <UseRenderMatrix matrix={values} rows={rows} columns={columns} change={change}/>
        </div>
    </div>
}

const UseRenderMatrix = ({matrix, rows, columns, change}:
     {matrix: number[][] ,rows: number, columns: number, change: (i: number, j: number, v: number)=>void}): JSX.Element => {

    const cells = [];
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            cells.push(<input type={"number"} value={matrix?.[i]?.[j] ?? 0} onChange={e => change(i, j, Number(e.target.value))} />)
        }
        cells.push(<br/>)
    }
    console.log(rows, columns)

    return <div>
        {cells}
    </div>;
}


