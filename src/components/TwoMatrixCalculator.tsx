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

function renderMatrixOperation( operation: string){
    const input = [];
    input.push(<MatrixItem />);
    input.push(<Operator onClick={()=>renderAnswer([[0]], [[0]], operation)}>{operation}</Operator>);
    input.push(<MatrixItem/>);
    input.push(<p style={{fontSize: "2em"}}> = </p>)
    return input;

}

function renderAnswer(firstMatrixData: number[][], secondMatrixData: number[][], operation: string){
    if(operation === "+"){
        console.log("A + B = C")
    }
}

