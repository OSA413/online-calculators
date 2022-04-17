import React, {ChangeEventHandler, useEffect, useState} from 'react';
import {MatrixItem} from "./MatrixItem";
import {MatrixAnswer} from "./MatrixAnswer";
import MatrixCalculator, {Matrix} from "../../calculators/matrix/matrix";
import '../../index.scss';


export const TwoMatrixCalculator: React.FC = () =>{

    return <MatrixOperation/>
}

const MatrixOperation = ( ) => {
    const [answerVisibility, setAnswerVisibility] = useState<boolean>(false);
    const [firstMatrixData, setFirstMatrixData] = useState<number[][]>([[0]]);
    const [secondMatrixData, setSecondMatrixData] = useState<number[][]>([[0]]);

    const [operation, setOperation] = useState<string>('');

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
            <MatrixItem key={1} onChange={(matrixData)=> setFirstMatrixData(matrixData)}/>
            <input className={"matrix-operator-input"} value={operation} onChange={handleChange}/>
            <MatrixItem key={2} onChange={(matrixData) => setSecondMatrixData(matrixData)}/>
            <button className={"matrix-result-operation"}  onClick={()=> {
                if(!answerVisibility)
                    setAnswerVisibility(true)
            }}>=</button>
        </div>

        <div  className={"matrix-operation"}>
            {renderAnswer(firstMatrixData, secondMatrixData, operation, answerVisibility)}
        </div>
    </div>

}


function renderAnswer(firstMatrixData: number[][], secondMatrixData: number[][], operation: string, answerVisibility: boolean){
    if(!answerVisibility)
        return null
    if(operation === "+"){
        let a:Matrix = { data: firstMatrixData}
        let b:Matrix = { data: secondMatrixData}
        try {
            let answer = MatrixCalculator.Add(a, b);
            return <MatrixAnswer values={answer.data}/>
        }
        catch (e) {
            return <p>Неправильный размер матриц</p>;
        }
    }
    else if(operation === "-"){
        let a:Matrix = { data: firstMatrixData}
        let b:Matrix = { data: secondMatrixData}
        try {
            let answer = MatrixCalculator.Subtraction(a, b);
            return <MatrixAnswer values={answer.data}/>
        }
        catch (e) {
            return <p>Неправильный размер матриц</p>;
        }
    }
    else if(operation === "*"){
        let a:Matrix = { data: firstMatrixData}
        let b:Matrix = { data: secondMatrixData}
        try {
            let answer = MatrixCalculator.Multiply(a, b);
            return <MatrixAnswer values={answer.data}/>
        }
        catch (e) {
            return <p>Неправильный размер матриц</p>;
        }
    }

    //TODO обратная матрица для деления
    return <p>Неподдерживаемя операция</p>;
}




