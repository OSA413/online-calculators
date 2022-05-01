import React, {ChangeEventHandler, useEffect, useState} from 'react';
import {MatrixItem} from "./MatrixItem";
import {MatrixAnswer} from "./MatrixAnswer";
import MatrixCalculator, {Matrix} from "../../calculators/matrix/matrix";
import '../../index.scss';
import {Button, TextField} from "@mui/material";


export const OneMatrixCalculator: React.FC = () =>{

    return <MatrixOperation/>
}

const MatrixOperation = ( ) => {
    const [answerVisibility, setAnswerVisibility] = useState<boolean>(false);
    const [matrixData, setMatrixData] = useState<number[][]>([[0]]);

    const [operation, setOperation] = useState<string>('+');

    useEffect(() => setAnswerVisibility(false), [operation])

    function handleChange(event: React.ChangeEvent<HTMLInputElement> ) {

        const value = event.target.value;
        if(value.length > 1 ){
            setOperation('')
            return
        }
        setOperation(value)
    }



    return <div>
        <div  className={"matrix-operation"}>
            <MatrixItem key={1} onChange={(matrixData)=> setMatrixData(matrixData)}/>
            <TextField  inputProps={{min: 0, style: { textAlign: 'center'  }}} variant={"standard"} style = {{width: "4ch"}} value={operation} onChange={handleChange}/>
        </div>
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
    return <p>Неподдерживаемя операция</p>;
}




