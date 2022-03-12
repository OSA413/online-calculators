import React, {useState} from 'react';
import {MatrixItem} from "./MatrixItem";
import {Operator} from "../uilib/operator/Operator";
import {MatrixAnswer} from "./MatrixAnswer";
import MatrixCalculator, {Matrix} from "../calculators/matrix/matrix";


export const TwoMatrixCalculator: React.FC<{
    operation: string;
}> = ({operation}) =>{

    return <div>
        {MatrixOperation( operation)}
    </div>
}

const MatrixOperation = ( operation: string) => {
    const [answerVisibility, setAnswerVisibility] = useState<boolean>(false);
    return <>
        <MatrixItem key={1} />
        <Operator onClick={()=> {
            if(answerVisibility)
                setAnswerVisibility(false)
            else
                setAnswerVisibility(true)
        }}>{operation}</Operator>
        <MatrixItem key={2}/>
        <p style={{fontSize: "2em"}}> = </p>
        <MatrixAnswer visibility={answerVisibility} values={renderAnswer(Array(3).fill(0).map(() => Array(3).fill(4)), Array(3).fill(4).map(() => Array(3).fill(5)), operation)}/>
    </>
}

function renderAnswer(firstMatrixData: number[][], secondMatrixData: number[][], operation: string){
    if(operation === "+"){
        console.log("A + B = C")
        let a:Matrix = { data: firstMatrixData}
        let b:Matrix = { data: secondMatrixData}
        return MatrixCalculator.Add(a, b).data;
    }
    return firstMatrixData;
}

