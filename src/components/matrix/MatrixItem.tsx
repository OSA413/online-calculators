import React, {useEffect, useState} from 'react';
import '../../index.scss';
import {Box, TextField} from "@mui/material";



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
            <Box
                sx={{
                    '& .MuiTextField-root': { m: 1, maxWidth: '4ch'},
                }}
                justifyContent="center"
                alignItems="center">
                <TextField inputProps={{min: 0, style: { textAlign: 'center'  }}} variant={"standard"}  color={"primary"} focused value={rows} type={"number"} onChange={e=> setRows(Number(e.target.value))}/>
                <TextField inputProps={{min: 0, style: { textAlign: 'center'  }}} style = {{width: "2ch"}} variant={"standard"}  color={"primary"} value={"x"}/>
                <TextField inputProps={{min: 0, style: { textAlign: 'center'  }}} variant={"standard"} color={"primary"} focused value={columns} type={"number"} onChange={e=> setColumns(Number(e.target.value))}/>
            </Box>

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
        for (let j = 0; j < matrix[0].length; j++) {
            cells.push(<TextField value={matrix[i][j]} type="number"
                                  color={"warning"}
                                  InputLabelProps={{
                                      shrink: true,
                                  }}
                                  variant="filled"
                                  onChange={e => change(i, j, Number(e.target.value))}/>)
        }
        cells.push(<div key={i}/>)
    }

    return <div>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '8ch'},
            }}
            noValidate
            autoComplete="off"
        >
        {cells}
        </Box>
    </div>;
}


