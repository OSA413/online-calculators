import React from 'react';
import {MatrixItem} from "./MatrixItem";
import classes from './MatrixCalculator.module.css'
import {Operator} from "../uilib/operator/Operator";

export const TwoMatrixCalculator: React.FC<{
    operation: string;
}> = ({operation}) =>{

    return <div className={classes.root}>
        {renderMatrixOperation( operation)}
    </div>
}

const renderMatrixOperation = ( operation: string) => {
    return <>
        <MatrixItem key={1} />
        <Operator onClick={()=>renderAnswer([[0]], [[0]], operation)}>{operation}</Operator>
        <MatrixItem key={2}/>
        <p style={{fontSize: "2em"}}> = </p>
    </>
}

function renderAnswer(firstMatrixData: number[][], secondMatrixData: number[][], operation: string){
    if(operation === "+"){
        console.log("A + B = C")
    }
}

