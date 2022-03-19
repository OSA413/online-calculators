import React, {useEffect, useState} from 'react';
import {MatrixItem} from "./MatrixItem";
import {Operator} from "../uilib/operator/Operator";
import {MatrixAnswer} from "./MatrixAnswer";
import MatrixCalculator, {Matrix} from "../calculators/matrix/matrix";
import '../index.scss';


export const TwoMatrixCalculator: React.FC<{
    operation: string;
}> = ({operation}) =>{

    return <div>
        {MatrixOperation( operation)}
    </div>
}

const MatrixOperation = ( operation: string) => {
    const [answerVisibility, setAnswerVisibility] = useState<boolean>(false);
    const [values1, setValues1] = useState<number[][]>([[0]]);
    const [values2, setValues2] = useState<number[][]>([[0]]);

    useEffect(() => setAnswerVisibility(false), [values1, values2, operation])

    return <div>
        <div  className={"matrix-operation"}>
            <MatrixItem key={1} onChange={(value?)=> setValues1(value)}/>
            <Operator  onClick={()=> {
                if(!answerVisibility)
                    setAnswerVisibility(true)
            }}>{operation}</Operator>
            <MatrixItem key={2} onChange={(value?) => setValues2(value)}/>
            <p style={{fontSize: "2em"}}> = </p>
        </div>

        <div  className={"matrix-operation"}>
            {renderAnswer(values1, values2, operation, answerVisibility)}
        </div>

    </div>

}

function renderAnswer(firstMatrixData: number[][], secondMatrixData: number[][], operation: string, answerVisibility: boolean){
    if(operation === "+"){
        let a:Matrix = { data: firstMatrixData}
        let b:Matrix = { data: secondMatrixData}
        try {
            let answer = MatrixCalculator.Add(a, b);
            return <MatrixAnswer visibility={answerVisibility} values={answer.data}/>
        }
        catch (e) {
            return <p>Неправильный размер матриц</p>;
        }

    }
    return <p>Непподерживаемя операция</p>;
}




