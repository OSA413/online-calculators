import React from 'react';
import '../../index.scss';
import {Box, TextField} from "@mui/material";


export const NumberAnswer: React.FC<{
    value: number;
}> = ({value}) : JSX.Element =>{

    return <div className={"matrix"}>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '8ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField variant={"filled"} color={"success"} inputProps={{min: 0, style: { textAlign: 'center'  }}}  focused value={value} style = {{width: "8ch", margin: "2%"}}  InputProps={{
                readOnly: true,
            }}/>

        </Box>
    </div>
}
