import React from 'react';
import {MatrixData} from "../model/MatrixData";
import {MatrixItem} from "./MatrixItem";
import classes from './MatrixCalculator.module.css'
import {Operator} from "../uilib/operator/Operator";

export const MatrixCalculator: React.FC<{
    firstMatrixData: MatrixData;
    secondMatrixData: MatrixData;
    operation: string;
}> = ({firstMatrixData, secondMatrixData, operation}) =>{
    return <div className={classes.root}>
        {renderMatrixOperation(firstMatrixData, secondMatrixData, operation)}
    </div>
}

function renderMatrixOperation(firstMatrixData:MatrixData, secondMatrixData:MatrixData, operation: string){
    const input = [];
    input.push(<MatrixItem rows={firstMatrixData.rows} columns={firstMatrixData.columns}/>);
    input.push(<Operator>{operation}</Operator>);
    input.push(<MatrixItem rows={secondMatrixData.rows} columns={secondMatrixData.columns}/>);
    return input;

}
