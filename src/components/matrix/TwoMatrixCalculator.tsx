import React, {useEffect, useState} from 'react';
import {MatrixItem} from "./MatrixItem";
import {MatrixAnswer} from "./MatrixAnswer";
import MatrixCalculator, {Matrix} from "../../calculators/matrix/matrix";
import '../../index.scss';


export const TwoMatrixCalculator: React.FC<{
    operation: string;
}> = ({operation}) =>{

    return <div>
        {MatrixOperation( operation)}
    </div>
}

const MatrixOperation = ( operation: string) => {
    const [answerVisibility, setAnswerVisibility] = useState<boolean>(false);
    const [firstMatrixData, setFirstMatrixData] = useState<number[][]>([[0]]);
    const [secondMatrixData, setSecondMatrixData] = useState<number[][]>([[0]]);

    useEffect(() => setAnswerVisibility(false), [operation])

    return <div>
        <div  className={"matrix-operation"}>
            <MatrixItem key={1} onChange={(value?)=> setFirstMatrixData(value)}/>
            <button className={"matrix-operator"}  onClick={()=> {
                if(!answerVisibility)
                    setAnswerVisibility(true)
            }}>{operation}</button>
            <MatrixItem key={2} onChange={(value?) => setSecondMatrixData(value)}/>
            <p style={{fontSize: "2em"}}> = </p>
        </div>

        <div  className={"matrix-operation"}>
            {renderAnswer(firstMatrixData, secondMatrixData, operation, answerVisibility)}
        </div>

    </div>

}

function renderAnswer(firstMatrixData: number[][], secondMatrixData: number[][], operation: string, answerVisibility: boolean){
    if(!answerVisibility)
        return <></>
    if(operation === "+"){
        let a:Matrix = { data: firstMatrixData}
        let b:Matrix = { data: secondMatrixData}
        try {
            let answer = MatrixCalculator.Add(a, b);
            return <MatrixAnswer values={answer.data}/>
        }
        catch (e) {
            return <p >Неправильный размер матриц</p>;
        }

    }
    return <p>Непподерживаемя операция</p>;
}




