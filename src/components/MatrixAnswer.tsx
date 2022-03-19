import React from 'react';
import '../index.scss';
import {NumberField} from "../uilib/number-field/NumberField";


export const MatrixAnswer: React.FC<{
    values: number[][];
    visibility: boolean;
}> = ({values, visibility}) : JSX.Element =>{
    if(!visibility)
        return <></>;
    const cells = [];
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values[0].length; j++)
            cells.push(<input className={"matrix-cell"} value={values[i][j]} readOnly/>)
        cells.push(<br  className={"matrix-answer"}  key={i}/>)
    }
    return <div className={"matrix"}>
        <div className={"matrix-title"}>
        <NumberField  value={values.length} readOnly/>
        x
        <NumberField value={values[0].length} readOnly/>
        </div>
        <div>
            {cells}
        </div>

    </div>
}
