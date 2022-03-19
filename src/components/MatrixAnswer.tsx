import React from 'react';
import '../index.scss';


export const MatrixAnswer: React.FC<{
    values: number[][];
}> = ({values}) : JSX.Element =>{
    const cells = [];
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values[0].length; j++)
            cells.push(<input className={"matrix-cell"} key={i+"+"+j} value={values[i][j]} readOnly/>)
        cells.push(<div  key={i}/>)
    }
    return <div className={"matrix"}>
            {cells}
    </div>
}
