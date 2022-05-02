import React, { useEffect, useState} from 'react';
import {MatrixItem} from "./MatrixItem";
import '../../index.scss';
import {Button, MenuItem, Select, SelectChangeEvent} from "@mui/material";


export const OneMatrixCalculator: React.FC = () =>{

    return <MatrixOperation/>
}

const operations = [
    "-1",
    "det"
]

const MatrixOperation = ( ) => {
    const [answerVisibility, setAnswerVisibility] = useState<boolean>(false);
    const [matrixData, setMatrixData] = useState<number[][]>([[0]]);

    const [operation, setOperation] = useState<string>('-1');

    useEffect(() => setAnswerVisibility(false), [operation])

    function handleChange(event: SelectChangeEvent) {
        setOperation(event.target.value)
    }


    return <div>
        <div  className={"matrix-operation"}>
            <MatrixItem key={1} onChange={(matrixData)=> setMatrixData(matrixData)}/>
            <Select
                value={operation}
                inputProps={{min: 0, style: { textAlign: 'center'  }}}
                variant={"standard"}
                onChange={handleChange}
            >
                {operations.map(o=> {
                   return( <MenuItem value={o}>{o}</MenuItem>)
                })}
            </Select>        </div>
        <div className={"matrix-operation"}>
            <Button variant="contained" color={"success"} onClick={()=> {
                if(!answerVisibility)
                    setAnswerVisibility(true)
            }}>=</Button>
        </div>

        <div  className={"matrix-operation"}>
            {renderAnswer(matrixData, operation, answerVisibility)}
        </div>
    </div>

}


function renderAnswer(matrixData: number[][], operation: string, answerVisibility: boolean){
    if(!answerVisibility)
        return null
    if(operation === "-1"){
    }
    else if(operation === "det"){
    }
    return <p>Неподдерживаемя операция</p>;
}




