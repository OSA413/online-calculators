import React, { useEffect, useState} from 'react';
import {MatrixItem} from "./MatrixItem";
import {MatrixAnswer} from "./MatrixAnswer";
import MatrixCalculator, {Matrix} from "../../calculators/matrix/matrix";
import '../../index.scss';
import {Button, MenuItem, Select, SelectChangeEvent} from "@mui/material";


export const TwoMatrixCalculator: React.FC = () =>{
    return <MatrixOperation/>
}

const operations = [
    "+",
    "-",
    "*",
    "/"
]

const MatrixOperation = ( ) => {
    const [answerVisibility, setAnswerVisibility] = useState<boolean>(false);
    const [firstMatrixData, setFirstMatrixData] = useState<number[][]>([[0]]);
    const [secondMatrixData, setSecondMatrixData] = useState<number[][]>([[0]]);

    const [operation, setOperation] = useState<string>('+');

    useEffect(() => setAnswerVisibility(false), [operation])

    function handleChange(event: SelectChangeEvent) {
        setOperation(event.target.value)
    }

    return <div>
        <div  className={"matrix-operation"}>
            <MatrixItem key={1} onChange={(matrixData)=> setFirstMatrixData(matrixData)}/>
            <Select
                value={operation}
                inputProps={{min: 0, style: { textAlign: 'center'  }}}
                variant={"standard"}
                onChange={handleChange}
            >
                {operations.map(o=> {
                    return( <MenuItem value={o}>{o}</MenuItem>)
                })}
            </Select>
            <MatrixItem key={2} onChange={(matrixData) => setSecondMatrixData(matrixData)}/>
        </div>
        <div className={"matrix-operation"}>
            <Button variant="contained" color={"success"} onClick={()=> {
                if(!answerVisibility)
                    setAnswerVisibility(true)
            }}>=</Button>
        </div>

        <div  className={"matrix-operation"}>
            {catchErrorOrRenderAnswer(firstMatrixData, secondMatrixData, operation, answerVisibility)}
        </div>
    </div>
}

function catchErrorOrRenderAnswer(firstMatrixData: number[][], secondMatrixData: number[][], operation: string, answerVisibility: boolean){
    try {
        return renderAnswer(firstMatrixData ,secondMatrixData, operation, answerVisibility)
    } catch (e){
        return <p>Проверьте размер матриц</p>
    }

}

function renderAnswer(firstMatrixData: number[][], secondMatrixData: number[][], operation: string, answerVisibility: boolean){
    if(!answerVisibility)
        return null
    if(operation === "+"){
        const a:Matrix = { data: firstMatrixData}
        const b:Matrix = { data: secondMatrixData}
            const answer = MatrixCalculator.Add(a, b);
            return <MatrixAnswer values={answer.data}/>

    }
    else if(operation === "-"){
        const a:Matrix = { data: firstMatrixData}
        const b:Matrix = { data: secondMatrixData}
            const answer = MatrixCalculator.Subtraction(a, b);
            return <MatrixAnswer values={answer.data}/>

    }
    else if(operation === "*"){
        const a:Matrix = { data: firstMatrixData}
        const b:Matrix = { data: secondMatrixData}
            const answer = MatrixCalculator.Multiply(a, b);
            return <MatrixAnswer values={answer.data}/>

    }
    else if(operation === "/"){
        const a:Matrix = { data: firstMatrixData}
        const b:Matrix = { data: secondMatrixData}

            const newB = MatrixCalculator.InverseMatrix(b);
            const answer = MatrixCalculator.Multiply(a, newB);
            return <MatrixAnswer values={answer.data}/>

    }
    return <p>Неподдерживаемя операция</p>;
}




