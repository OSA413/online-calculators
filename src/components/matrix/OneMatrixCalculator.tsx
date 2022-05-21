import React, { useEffect, useState} from 'react';
import {MatrixItem} from "./MatrixItem";
import '../../index.scss';
import {Button, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import Matrix, {
    determinant,
    inverseMatrix,
    matrixOfCofactors, pow,
    scalarMultiply,
    transpose
} from "../../calculators/matrix/matrix";
import {MatrixAnswer} from "./MatrixAnswer";
import {NumberAnswer} from "./NumberAnswer";


export const OneMatrixCalculator: React.FC = () =>{

    return <MatrixOperation/>
}

const operations = [
    "-1",
    "det",
    "T",
    "A",
    "*",
    "^"
]

const scalarOperations = ["*", "^"]

const MatrixOperation = ( ) => {
    const [answerVisibility, setAnswerVisibility] = useState<boolean>(false);
    const [matrixData, setMatrixData] = useState<number[][]>([[0]]);

    const [operation, setOperation] = useState<string>('-1');
    const [scalar, setScalar] = useState<number>(0);

    useEffect(() => setAnswerVisibility(false), [operation])

    function handleChange(event: SelectChangeEvent) {
        setOperation(event.target.value)
    }

    function isScalarMultiplyOrPow() {
        if(scalarOperations.includes(operation)){
            return <TextField value={scalar} type="number"
                               color={"success"}
                               inputProps={{min: 0, style: { textAlign: 'center'  }}}
                               focused
                               style = {{width: "8ch", margin: "2%"}}
                               variant="filled"
                               onChange={e => setScalar(Number(e.target.value))}/>
        }
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
            </Select>
            { isScalarMultiplyOrPow()}
        </div>
        <div className={"matrix-operation"}>
            <Button variant="contained" color={"success"} onClick={()=> {
                if(!answerVisibility)
                    setAnswerVisibility(true)
            }}>=</Button>
        </div>

        <div  className={"matrix-operation"}>
            {
                catchErrorOrRenderAnswer(matrixData, operation, answerVisibility, scalar)}
        </div>
    </div>

}

function catchErrorOrRenderAnswer(matrixData: number[][], operation: string, answerVisibility: boolean, scalar: number){
    try {
        return renderAnswer(matrixData, operation, answerVisibility, scalar)
    } catch (e){
        return <p>Проверьте размер матрицы</p>
    }

}
function renderAnswer(matrixData: number[][], operation: string, answerVisibility: boolean, scalar: number){
    if(!answerVisibility)
        return null
    const matrix: Matrix = {data: matrixData};

    if(operation === "-1"){

        const answer = inverseMatrix(matrix);
        return <MatrixAnswer values={answer.data}/>
    }
    else if(operation === "A"){
        const answer = matrixOfCofactors(matrix);
        return <MatrixAnswer values={answer.data}/>
    }
    else if(operation === "T"){
        const answer = transpose(matrix);
        return <MatrixAnswer values={answer.data}/>
    }
    else if(operation === "det"){
        const answer = determinant(matrix);
        return <NumberAnswer value={answer}/>
    }
    else if(operation === "*"){
        const answer = scalarMultiply(matrix, scalar);
        return <MatrixAnswer values={answer.data}/>
    }
    else if(operation === "^"){
        const answer = pow(matrix, scalar);
        return <MatrixAnswer values={answer.data}/>
    }
    return <p>Неподдерживаемя операция</p>;
}




