import React from 'react';
import '../../index.scss';
import {Box, TextField} from "@mui/material";


export const MatrixAnswer: React.FC<{
    values: number[][];
}> = ({values}) : JSX.Element =>{
    const cells = [];
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values[0].length; j++)
            cells.push(<TextField variant={"filled"} color={"success"} focused value={values[i][j]}  InputProps={{
                readOnly: true,
            }}/>)


        cells.push(<div  key={i}/>)
    }
    return <div className={"matrix"}>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '6ch' },
            }}
            noValidate
            autoComplete="off"
        >
            {cells}
        </Box>
    </div>
}
