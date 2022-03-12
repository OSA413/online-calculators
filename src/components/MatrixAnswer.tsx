import React from 'react';

export const MatrixAnswer: React.FC<{
    values: number[][];
    visibility: boolean;
}> = ({values, visibility}) : JSX.Element =>{
    if(!visibility)
        return <></>;
    const cells = [];
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values[0].length; j++)
            cells.push(<p>{values[i][j]}</p>)
        cells.push(<br key={i}/>)
    }
    return <>
        {cells}
    </>
}
