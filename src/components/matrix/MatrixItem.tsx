import React, {useEffect, useState} from 'react';
import '../../index.scss';



export const MatrixItem: React.FC<{onChange(data: number[][]): void}> = ({onChange}) =>{
    const [rows, setRows] = useState<number>(3);
    const [columns, setColumns] = useState<number>(3);

    const [matrixData, setMatrixData] = useState<number[][]>(Array(rows).fill(0).map(() => Array(columns).fill(0)));

    const change = (i: number, j:number, v:number) => setMatrixData(value => {
        value[i][j] = v;
        return [...value]
    });


    useEffect(() => onChange(matrixData), [matrixData])



    useEffect(() => 
        setMatrixData(Array(rows).fill(0).map(() => Array(columns).fill(0)))
    , [rows, columns])

    return <div className={"matrix"} >
        <div className={"matrix-title"}>
            <input type={"number"} className={"matrix-title-item"} value={rows} onChange={e=> setRows(Number(e.target.value))}/>
            x
            <input type={"number"} className={"matrix-title-item"} value={columns} onChange={e=> setColumns(Number(e.target.value))}/>
        </div>
        <div >
            <RenderMatrix matrix={matrixData} change={change}/>
        </div>
    </div>
}

const RenderMatrix = ({matrix, change}:
     {matrix: number[][] , change: (i: number, j: number, v: number)=>void})
     : JSX.Element => {

    const cells = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++)
            cells.push(<input className={"matrix-cell"} key={i+"+"+j} type={"number"} value={matrix[i][j]} onChange={e => change(i, j, Number(e.target.value))} />)
        cells.push(<div key={i}/>)
    }

    return <div>
        {cells}
    </div>;
}


