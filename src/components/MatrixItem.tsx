import React, {useEffect, useState} from 'react';
import {NumberField} from "../uilib/number-field/NumberField";
import '../index.scss';



export const MatrixItem: React.FC<{onChange(data: number[][]): void}> = ({onChange}) =>{
    const [rows, setRows] = useState<number>(3);
    const [columns, setColumns] = useState<number>(3);

    const [values, setValues] = useState<number[][]>(Array(rows).fill(0).map(() => Array(columns).fill(0)));

    const change = (i: number, j:number, v:number) => setValues(value => {
        value[i][j] = v;
        return [...value]
    });


    useEffect(() => onChange(values), [values])



    useEffect(() => 
        setValues(Array(rows).fill(0).map(() => Array(columns).fill(0)))
    , [rows, columns])

    return <div className={"matrix"} >
        <div className={"matrix-title"}>
            <NumberField  value={rows} onChange={e=> setRows(Number(e.target.value))}/>
            x
            <NumberField value={columns} onChange={e=> setColumns(Number(e.target.value))}/>
        </div>
        <div >
            <UseRenderMatrix matrix={values} change={change}/>
        </div>
    </div>
}

const UseRenderMatrix = ({matrix, change}:
     {matrix: number[][] , change: (i: number, j: number, v: number)=>void})
     : JSX.Element => {

    const cells = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++)
            cells.push(<input className={"matrix-cell"} key={i+"+"+j} type={"number"} value={matrix[i][j]} onChange={e => change(i, j, Number(e.target.value))} />)
        cells.push(<br key={i}/>)
    }

    return <div>
        {cells}
    </div>;
}


